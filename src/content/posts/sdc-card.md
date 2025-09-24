---
author: JoSecret
slug: "sdc-card"
publishDate: 2025-09-24T10:00:00Z
title: "How to Create a Single Directory Component (SDC) in Drupal"
description:
  Learn how to build reusable frontend components in Drupal 10 using Single Directory Components (SDC). Step-by-step guide to creating a Card component with metadata, templates, and styles.
tags:
  - Drupal
  - SDC
  - Components
  - Frontend
  - Twig
cover:
  src: './images/sdc-card/cover.png'
  alt: 'Single Directory Component (SDC) Card Example in Drupal'
---

# How to Create a Single Directory Component (SDC) in Drupal

With the introduction of **Single Directory Components (SDC)** in Drupal 10, building and reusing frontend components has become much more standardized. Each component now lives in its own folder containing everything it needs: metadata, templates, styles, JavaScript, and documentation.

In this guide, we'll build a simple **Card** component and go step by step through the structure of the required files. to Create a Single Directory Component (SDC) in Drupal

With the introduction of **Single Directory Components (SDC)** in Drupal 10, building and reusing frontend components has become much more standardized. Each component now lives in its own folder containing everything it needs: metadata, templates, styles, JavaScript, and documentation.

In this guide, we’ll build a simple **Card** component and go step by step through the structure of the required files.

---

## Component Folder Structure

Each SDC lives in its own folder. For example:

```
components/
  card/
    card.component.yml
    card.twig
    card.css
    README.md
```

Key files:
- `card.component.yml` – defines the component’s metadata, props, and slots.
- `card.twig` – the component’s markup.
- `card.css` – optional styles.
- `README.md` – optional documentation.

---

## The `.component.yml` File

This YAML file describes the component and its configuration.

Example for **Card**:

```yaml
$schema: https://git.drupalcode.org/project/drupal/-/raw/10.1.x/core/modules/sdc/src/metadata.schema.json
name: Card
status: stable

version: 1.0.0
group: Layout
description: 'A reusable card component with optional image, title, and content.'

# Props.
props:
  type: object
  required:
    - card_title

  properties:
    # component variations
    card_type:
      type: string
      title: 'Card type'
      description: 'Defines the layout of the card component.'
      default: 'vertical'
      enum:
        - 'vertical'
        - 'horizontal'
        - 'image-overlay'

    # fields values
    card_title:
      type: string
      title: 'Card Title'
      description: 'The main title of the card.'
      default: ''

    card_image:
      type: string
      title: 'Card Image URL'
      description: 'Optional image displayed at the top of the card.'
      default: ''

    # uc -> utility_classes
    card_uc:
      type: array
      items:
        type: string
      title: Card Utility Classes
      description: 'An array of utility classes. Use this to add extra or custom CSS classes.'
      default: []

    # att -> attributes
    card_att:
      type: Drupal\Core\Template\Attribute
      title: Attributes
      description: 'A list of HTML attributes for the card.'

# Slots.
slots:
  slot_content:
    title: Content
    description: 'The body content of the card.'
```

### Key Points:
- `$schema` ensures validation against Drupal’s SDC schema.
- `name`, `status`, `version`, `group`, `description` are metadata.
- `props` define configurable properties.
- `slots` allow flexible placement of custom content.

---

## The `.twig` File

Here is the `card.twig` file, keeping the exact structure and comments from the accordion example, only renamed to `card`:

```twig
{#
/**
  * @file
  * Card component.
  *
  * Available variables:
  *
  *
  * Available properties:
  * - icon_position (none|left|right) (default: rigth)
  * - items (array) (default: []): format: [
  *     {
  *       title: (string),
  *       title_tag: (string),
  *       content: (block),
  *     },
  *   ]
  *
  * Available Utility classes -> uc
  * - [component_name]_uc (array) (default: [''])
  *
  * Available attributes -> att
  * - [component_name]_att (Drupal\Core\Template\Attribute)
  *
  * Available slots
  * - slot_content: The content for the button
  *
  * usage example: @see README.md
  *
  */
#}

{# Set default value #}
{% set icon_position = icon_position|default('right') %}

{# Create attributres #}
{% set card_att = card_att ?: create_attribute() %}

{# Component classes #}
{% set card_classes = [
  'card',
]|merge(card_uc ?: []) %}

{# Change attributres #}
{% if card_id %}
  {% set card_att = card_att.setAttribute('id', card_id) %}
{% endif %}

{# Render component #}
<div{{ card_att.addClass(card_classes) }}>
</div>
```

---

## Using the Component

You can now include the component in another Twig template:

```twig
{% include "card" with {
  card_title: "My first card",
  card_image: "https://picsum.photos/400/200",
  card_uc: ["highlight"],
} %}
  {% block slot_content %}
    <p>This is the card body content.</p>
  {% endblock %}
{% endinclude %}
```

---

## Conclusion

SDCs in Drupal:
- Keep everything for a component in one folder.
- Provide automatic validation and documentation through `.component.yml`.
- Allow reusability through props and slots.

Our **Card** example demonstrates the basic structure you’ll use for any SDC: whether it’s a **Button**, **Accordion**, **Modal**, or **Menu Item**.
