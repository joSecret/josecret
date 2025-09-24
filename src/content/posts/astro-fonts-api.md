---
author: JoSecret
publishDate: 2025-09-11T15:20:35Z
slug: "astro-fonts-api"
title: "Using Astro’s Experimental Fonts API"
description:
  Step-by-step guide on enabling and using Astro’s Experimental Fonts API to manage Google Fonts, Fontsource, Bunny, and self-hosted fonts with CSS variables and preload options.
tags:
  - Astro
  - Fonts
  - Typography
  - Frontend
  - Experimental
cover:
  src: './images/astro-fonts-api/cover.png'
  alt: 'Astro Fonts API Example'
---

# Using Astro’s Experimental Fonts API

Astro introduced an **Experimental Fonts API** that makes it easier to load and manage fonts from providers like Google, Fontsource, Bunny, or even self-hosted files.
This feature helps you configure fonts in a centralized way, automatically handle CSS variables, and improve performance with options like preloading. 🚀

---

## Why use the Fonts API?

- Avoids manual `@font-face` or `@import` setups
- Generates CSS variables for easy font usage
- Supports multiple providers (Google, Fontsource, Bunny, local)
- Includes optimizations like preload and fallbacks
- Cleaner and more maintainable code

---

### Enabling the Fonts API

To start, enable the `fonts` experimental flag inside your `astro.config.mjs`:

```js
// astro.config.mjs

import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Roboto",
        cssVariable: "--font-roboto",
        preload: true,
      },
    ],
  },
});
```

---

### Using fonts in components

Once configured, you can use the `<Font />` component from `astro:assets` in your layout or head:

```astro
---
// src/components/Head.astro
import { Font } from 'astro:assets';
---

<head>
  <Font cssVariable="--font-roboto" preload />
  <style>
    body {
      font-family: var(--font-roboto), sans-serif;
    }
  </style>
</head>
```

Now your entire site can use the Roboto font through the CSS variable. 🎉

---

### Configuration options

Here are some useful options when setting up fonts:

| Option        | Description                                                |
| ------------- | ---------------------------------------------------------- |
| `provider`    | Font source: Google, Fontsource, Bunny, or local           |
| `name`        | Font family name                                           |
| `cssVariable` | CSS variable to reference in styles (e.g. `--font-roboto`) |
| `preload`     | Preloads the font for faster initial render                |
| `weights`     | Array of font weights (e.g. `[400, 700]`)                  |
| `style`       | Font style (e.g. `normal`, `italic`)                       |
| `subsets`     | Character subsets (e.g. `latin`, `latin-ext`)              |
| `fallbacks`   | Alternative fonts if the primary one fails                 |

---

### Full example

```js
// astro.config.mjs
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Roboto",
        cssVariable: "--font-roboto",
        preload: true,
        weights: [400, 700],
        style: "normal",
        subsets: ["latin", "latin-ext"],
        fallbacks: ["sans-serif"],
      },
    ],
  },
});
```

```astro
---
// src/components/Head.astro
import { Font } from 'astro:assets';
---

<head>
  <Font cssVariable="--font-roboto" preload />
  <style>
    body {
      font-family: var(--font-roboto), sans-serif;
    }
    h1 {
      font-family: var(--font-roboto), sans-serif;
      font-weight: 700;
    }
  </style>
</head>
```

---

### Caveats

- The Fonts API is experimental → expect changes in future versions
- Some providers may not support all font weights or subsets
- Always test in production and set proper fallbacks

### Final thoughts

The Experimental Fonts API makes font management in Astro projects much easier and cleaner.
With automatic CSS variables, preload support, and multi-provider flexibility, it’s a great tool to improve typography and performance.

If you’re starting a new Astro project, give it a try — just remember it’s still experimental, so keep an eye on updates in the [Astro docs](https://docs.astro.build/en/reference/experimental-flags/fonts/?utm_source=chatgpt.com)
.
