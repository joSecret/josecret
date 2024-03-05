---
title: 'Setup Post CSS for Astro'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
pubDate: 'Mar 05 2024'
heroImage: '/pcss.png'
---

File: package.json

``` js
  "devDependencies": {
    "cssnano": "^5.1.14",
    "fs-extra": "^10.1.0",
    "glob": "^8.0.3",
    "node-fs-extra": "^0.8.2",
    "path": "^0.12.7",
    "postcss": "^8.4.19",
    "postcss-advanced-variables": "^3.0.1",
    "postcss-calc": "^8.2.4",
    "postcss-cli": "^10.0.0",
    "postcss-conditionals": "^2.1.0",
    "postcss-each": "^1.1.0",
    "postcss-import": "^14.1.0",
    "postcss-mixins": "^9.0.4",
    "postcss-nested": "^6.0.0",
    "postcss-preset-env": "^7.7.2",
    "postcss-pxtorem": "^6.0.0",
    "postcss-simple-vars": "^7.0.1",
    "postcss-url": "^10.1.3"
  }
```

file: postcss.config.cjs
``` js
const path = require('path');
const postcssMixins = require('postcss-mixins');
const postcssAdvancedVar = require('postcss-advanced-variables');
const postcssNested = require('postcss-nested');
const postcssCalc = require("postcss-calc");
const postcssUrl = require('postcss-url');
const postcssPresetEnv = require('postcss-preset-env');
const postcssPixelsToRem = require('postcss-pxtorem');
const cssnano = require('cssnano');
const postcssEach = require('postcss-each');

module.exports = {
  plugins: [
    postcssAdvancedVar,
    postcssNested,
    postcssPresetEnv({
      stage: 2,
      preserve: false,
      autoprefixer: {
        cascade: false,
        grid: 'no-autoplace',
      },
      importFrom: {
        customMedia: {
          '--sm': '(min-width: 576px)',
          '--md': '(min-width: 768px)',
          '--downLg': '(max-width: 991px)',
          '--lg': '(min-width: 992px)',
          '--xl': '(min-width: 1200px)',
          '--xxl': '(min-width: 1400px)',
        }
      },
      features: {
        'custom-properties': false,
        'blank-pseudo-class': false,
        'focus-visible-pseudo-class': false,
        'focus-within-pseudo-class': false,
        'has-pseudo-class': false,
        'image-set-function': false,
        'prefers-color-scheme-query': false,
      }
    }),
    postcssMixins({
      mixinsDir: path.join(__dirname, 'mixins')
    }),
    postcssCalc,
    postcssEach,
    postcssPixelsToRem({
        propList: [
          '*',
          '!background-position',
          '!border',
          '!border-width',
          '!box-shadow',
          '!border-top*',
          '!border-right*',
          '!border-bottom*',
          '!border-left*',
          '!border-start*',
          '!border-end*',
          '!outline*',
        ],
        mediaQuery: true,
        minPixelValue: 3,
    }),
    postcssUrl({
      filter: '**/*.svg',
      url: 'inline',
      optimizeSvgEncode: true,
    }),
    cssnano()
  ],
};
```

