import {
  BunJs,
  Docker,
  Git,
  Astro,
  AdobeXD,
  JavaScript,
  Bootstrap5,
  MySQL,
  GitHubDark,
  GitLab,
  CSS
} from "developer-icons";

import Html from '@/components/ui/icons/html.astro'
import Twig from '@/components/ui/icons/twig.astro'
import PostCss from '@/components/ui/icons/postCss.astro'
import Figma from '@/components/ui/icons/figma.astro'
import Sass from '@/components/ui/icons/sass.astro'
import Drupal from '@/components/ui/icons/drupal.astro'
import Php from '@/components/ui/icons/php.astro'
import Title from "@/components/box/title.astro";


export const TECH_STACK = [
  // Programming Languages
  {
    title: "HTML",
    href: "https://www.w3schools.com/",
    icon: Html,
  },
  {
    title: "Twig",
    href: "https://twig.symfony.com/",
    icon: Twig,
  },
  {
    title: "CSS",
    href: "https://www.w3schools.com/",
    icon: CSS,
  },
  {
    title: "Php",
    href: "https://www.php.net/",
    icon: Php,
  },
  {
    title: "JavaScript",
    href: "https://www.javascript.com/",
    icon: JavaScript,
  },
  {
    title: "PostCSS",
    href: "https://postcss.org/",
    icon: PostCss,
  },
  {
    title: "SASS",
    href: "https://sass-lang.com/",
    icon: Sass,
  },
  {
    title: "Boostrap",
    href: "https://getbootstrap.com/",
    icon: Bootstrap5,
  },

  // Frontend Technologies
  {
    title: "Astro.js",
    href: "https://astro.build/",
    icon: Astro,
  },


  // Backend Technologies
  {
    title: "Drupal.org",
    href: "https://drupal.org/",
    icon: Drupal,
  },

  // Databases & Caching
  {
    title: "MySQL",
    href: "https://www.mysql.com/",
    icon: MySQL,
  },

  // DevOps & Development Tools
  {
    title: "Docker",
    href: "https://www.docker.com/",
    icon: Docker,
  },
  {
    title: "Git",
    href: "https://git-scm.com/",
    icon: Git,
  },
  {
    title: "GitHub",
    href: "github.com",
    icon: GitHubDark,
  },
  {
    title: "Gitlab",
    href: "https://gitlab.com/",
    icon: GitLab,
  },

  // Miscellaneous
  {
    title: "Figma",
    href: "https://www.figma.com/",
    icon: Figma,
  },
  {
    title: 'Adobe XD',
    href: 'https://www.adobe.com/products/xd.html',
    icon: AdobeXD,
  }
];

