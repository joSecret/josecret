---
author: JoSecret
slug: "twig-include-embed-extends"
publishDate: 2025-09-11T15:20:35Z
title: "Twig Template Inheritance: Include, Embed, and Extends"
description:
  Master Twig template inheritance with extends, include, and embed tags. Learn when to use each tag and how they work together to structure reusable templates efficiently.
tags:
  - Twig
  - PHP
  - Templates
  - Backend
  - Symfony
cover:
  src: './images/twig-include-embed-extends/cover.png'
  alt: 'Twig Template Inheritance: Include, Embed, and Extends Diagram'
---

# Twig Template Inheritance: Include, Embed, and Extends

When working with Twig templates, three powerful tags help you structure and reuse code efficiently: **`extends`**, **`include`**, and **`embed`**.
This article explains how they work, when to use each, and how they relate to one another.

---

## Quick Summary

### `extends`

- Used **only once**, at the very beginning of a template.
- Defines inheritance (the base layout).
- ❌ Cannot be used inside `include` or `embed`.

---

### 🔹 `include`

- Inserts a fragment of a template.
- Can be used **anywhere** (in a simple template, inside a block, inside an `embed`, or within an `extends`).
- Does not define its own blocks – it only inserts content.

---

### `embed`

- Works like `include` **but** allows you to **override blocks** inside the included file.
- Can contain `include` inside.
- ❌ Cannot contain `extends`.

---

## Relationship Diagram

```
Template
│
├── extends (only once, at the very beginning)
│   │
│   └── Blocks (defined in the extended layout)
│       │
│       ├── include (allowed anywhere)
│       └── embed (allowed anywhere)
│           │
│           ├── block overrides
│           └── include (allowed)
│
└── include (works directly in a template, even without extends)
```

---

## Key Takeaways

- **`extends`** sets the base layout for inheritance. Use it once at the top.
- **`include`** is best for inserting reusable snippets of template code.
- **`embed`** combines `include` with the power of overriding blocks.

By understanding how these three tags interact, you can build Twig templates that are both modular and easy to maintain.
