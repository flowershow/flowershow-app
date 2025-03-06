---
title: "Flowershow Cloud: Add Beautiful Hero Sections to Your Pages"
description: Learn how to enhance your pages with eye-catching hero sections using a simple configuration option
date: 2025-03-05
authors:
  - olayway
tags:
  - flowershow-cloud
isDraft: true
---

Flowershow now allows to set hero sections transform your page headers into elegant, full-width banners. Let's explore how to enable them!

## What is a Hero Section?

A hero section is a prominent area at the top of a page that typically includes:
- A compelling title
- A descriptive subtitle
- Optional calls to action (buttons with links)
- An optional featured image as a background
- Clean, professional styling that draws readers in

## Enabling Hero Sections

### For Individual Pages

To add a hero section to any page, simply add `showHero: true` to your frontmatter:

```yaml
---
showHero: true
---
```

The hero section will automatically use your:
- `title` as the main heading
- `description` as the subtitle
- `image` (if provided) as the background

Example of full frontmatter:

```yaml
---
title: My Amazing Page
description: An interesting description that will appear in the hero section
image: content/assets/hero-background.jpg
showHero: true
---
```

### Site-Wide Hero Configuration

Want hero sections on all your pages? You can enable them site-wide in your `config.json`:

```json
{
  "title": "My Awesome Site",
  "description": "A collection of interesting thoughts and ideas",
  "image": "/content/assets/default-hero.jpg",
  "showHero": true
}
```

This will:
1. Enable hero sections for all pages
2. Use these values as defaults
3. Allow individual pages to override any value

> [!important]
> When using site-wide configuration, individual page frontmatter takes precedence. This means you can:
> - Override the default hero content on specific pages
> - Disable the hero on specific pages with `showHero: false`

## Customizing Your Hero Content

You can mix and match which elements to include:

```yaml
---
# Minimal hero with just a title
title: Simple Page
showHero: true
---

# or

---
# Full hero with all elements
title: Featured Page
description: A compelling description that draws readers in
image: /content/assets/beautiful-hero.jpg
showHero: true
---
```

### Disable Hero for a Page

```yaml
---
title: "Simple Note"
showHero: false  # This page won't show a hero section
---
```

## Troubleshooting

If your hero section isn't appearing as expected:

1. Check your frontmatter syntax
2. Verify image paths are correct
3. Ensure `showHero` is set to `true`
4. Check for any console errors in your browser's developer tools

> [!tip]
> Remember to sync your site after making changes to see them live!

---

We 💙 feedback! If you have any questions about hero sections or ideas for improvements, please submit an issue [here](https://github.com/flowershow/flowershow/issues) or start a discussion [here](https://github.com/flowershow/flowershow/discussions). Thank you! 🌷