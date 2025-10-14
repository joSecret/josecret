---
author: JoSecret
slug: "install_drupal_with_DDEV"
publishDate: 2025-10-14T15:20:35Z
title: "Install Drupal with DDEV"
description:
  A quick and minimal guide to set up a Drupal site locally using DDEV, Composer, and Drush.
tags:
  - Drupal
  - DDEV
  - PHP
  - Composer
  - Drush
  - Local Development
cover:
  src: './images/install_drupal_with_DDEV/cover.png'
  alt: 'Drupal Installation with DDEV'
---

A quick and minimal guide to set up a Drupal site locally using DDEV.

## 1. Create a new Drupal project

This command downloads the latest stable Drupal version with all recommended settings.

```bash
composer create-project drupal/recommended-project drupal
```

Requirements:
Composer must be installed globally on your system.
PHP (minimum 8.1) must be available in your terminal.
Git is required for dependency management.

This creates a new folder named drupal with the core structure, composer.json, and dependencies.

## 2. Configure and start DDEV

Run the setup for your DDEV project. You’ll be asked for the project name and docroot (usually web).

```bash
ddev config
ddev start
```

ddev config initializes the configuration files (.ddev/config.yaml) and ddev start launches the containers.

## 3. Add Drush

Install Drush (Drupal Shell) inside your project for easier site management.

```bash
ddev composer require --dev drush/drush
```

This adds Drush as a local development dependency, accessible through ddev drush.

## 4. Install Drupal locally

Run the Drupal installation using Drush inside DDEV.

```bash
ddev drush site:install standard --account-name=admin --account-pass=admin -y
```

- --account-name sets the admin username
- --account-pass sets the admin password
- -y automatically confirms prompts

After installation, visit your local site.
