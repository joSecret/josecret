/**
 * @file
 * Description.
*/

'use strict';
// Variables!
const themeTitle       = 'JoAM';
const rootFolder       = './'
const sourcePath       = rootFolder + 'src/';
const distPath         = rootFolder + 'dist/';


// Load plugins!
const gulp         = require('gulp');
const sass         = require('gulp-sass');
const twig         = require('gulp-twig');
const image        = require('gulp-image');
const plumber      = require('gulp-plumber');
const purgecss     = require('gulp-purgecss')
const browsersync  = require('browser-sync').create();
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const strip        = require('gulp-strip-comments');
const minify       = require('gulp-minify');
const postcss      = require('gulp-postcss');

// BrowserSync!
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: rootFolder
    }
  });
  done();
}

function twigHtml() {
  return gulp
    .src(sourcePath + 'twig/html/*.twig')
    .pipe(twig({
      data: {
        tTitle: themeTitle,
      }
    }))
    .pipe(gulp.dest(rootFolder))
    .pipe(browsersync.stream())
}

function css() {
  return gulp
    .src(sourcePath + 'scss/**/*.scss')
    .on('error', catchErr)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'expanded' }, {errLogToConsole: true}))
    .on('error', catchErr)
    .pipe(postcss([autoprefixer]))
    .pipe(sourcemaps.write('map'))
    .pipe(gulp.dest(distPath + 'css'))
    .pipe(browsersync.stream())
}

function cssComponents() {
  return gulp
    .src(sourcePath + 'twig/components/**/*.scss')
    .on('error', catchErr)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'expanded' }, {errLogToConsole: true}))
    .on('error', catchErr)
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest(distPath + 'css/components'))
    .pipe(browsersync.stream())
}

function cssMin() {
  return gulp
    .src(sourcePath + 'scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(postcss([autoprefixer]))
    .pipe(
      purgecss({
        content: [rootFolder + 'src/**/*.twig']
      })
    )
    .pipe(gulp.dest(distPath + 'css'))
}

// Transpile,minify scripts!
function scripts() {
  return gulp
    .src([sourcePath + 'js/**/*'])
    .pipe(minify({noSource: true}))
    .pipe(gulp.dest(distPath + 'js'))
    .pipe(browsersync.stream())
}

function bootstrapJs() {
  return gulp
    .src([
      './node_modules/bootstrap/dist/js/bootstrap.min.js'
    ])
    .pipe(strip())
    .pipe(minify({noSource: true}))
    .pipe(gulp.dest(distPath + 'js/bootstrap'))
}

// images
function imageMin() {
  return gulp
    .src(rootFolder + 'assets/*')
    .pipe(image())
    .pipe(gulp.dest(distPath + 'assets/'));
}

// Watch files!
function watchFilesHtml() {
  gulp.watch(sourcePath + 'scss/**/*', css);
  gulp.watch(sourcePath + 'twig/components/**/*.scss', cssComponents);
  gulp.watch(sourcePath + 'js/**/*', scripts);
  gulp.watch(sourcePath + 'twig/**/*.twig', twigHtml);
}

const watchHtml = gulp.parallel(watchFilesHtml, browserSync);

// Documentation
function browserSyncDoc(done) {
  browsersync.init({
    server: {
      baseDir: rootFolder + 'dist/',
      index: "/documentation/index.html"
    }
  });
  done();
}

function twigdocumentation() {
  return gulp
    .src(sourcePath + 'twig/documentation/*.twig')
    .pipe(twig({
      data: {
        tTitle: themeTitle,
      }
    }))
    .pipe(gulp.dest(distPath + '/documentation'))
    .pipe(browsersync.stream())
}

function watchFilesDoc() {
  gulp.watch(sourcePath + 'scss/**/*', css);
  gulp.watch(sourcePath + 'js/**/*', scripts);
  gulp.watch(sourcePath + 'twig/documentation/**/*.twig', twigdocumentation);
}

const watchDoc = gulp.parallel(watchFilesDoc, browserSyncDoc);

// Snippets
function browserSyncSnippets(done) {
  browsersync.init({
    server: {
      baseDir: rootFolder + 'dist/',
      index: "/snippets/index.html"
    }
  });
  done();
}

function twigSnippets() {
  return gulp
    .src(sourcePath + 'twig/snippets/*.twig')
    .pipe(twig({
      data: {
        tTitle: themeTitle,
        folder: 'snippets/',
      }
    }))
    .pipe(gulp.dest(distPath + '/snippets'))
    .pipe(browsersync.stream())
}

function watchFilesSnippets() {
  gulp.watch(sourcePath + 'scss/**/*', css);
  gulp.watch(sourcePath + 'js/**/*', scripts);
  gulp.watch(sourcePath + 'twig/**/*.twig', twigSnippets);
}

const watchSnippets = gulp.parallel(watchFilesSnippets, browserSyncSnippets);

// Define complex tasks!
const build = gulp.series(gulp.parallel(cssMin, scripts, bootstrapJs, imageMin, twigHtml, twigdocumentation, twigSnippets));

function catchErr(e) {
  console.log(e);
  this.emit('end');
}

// Export tasks!
exports.watch = watchHtml;
exports.doc = watchDoc;
exports.snippets = watchSnippets;
exports.default = build;
