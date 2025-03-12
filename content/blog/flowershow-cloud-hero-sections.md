---
title: "Tutorial: Adding Hero Sections to Your Flowershow Pages"
description: A step-by-step guide to enhancing your pages with beautiful hero sections
date: 2025-03-12
authors:
  - olayway
tags:
  - flowershow-cloud
  - tutorial
---

In this tutorial, we'll walk through the process of adding beautiful hero sections to your Flowershow pages. We'll start with a basic page and gradually enhance it with different hero section features.

## What is a Hero Section?

A hero section is a prominent banner at the top of your page that can include:
- A compelling title
- A descriptive subtitle
- Optional calls to action (buttons)
- An optional background image
- Professional styling that draws readers in

Let's see how to add one step by step!

## Step 1: Create a Basic Page

Start with a simple page that has just a title and description in the frontmatter:

```yaml
---
title: "Welcome to My Garden"
description: "A digital garden where ideas bloom"
---

This is the content of my digital garden...
```

At this point, your page will display with the default Flowershow styling - a simple header with the title.

## Step 2: Enable the Hero Section

Now, let's transform this basic header into a hero section by adding `showHero: true` to the frontmatter:

```yaml
---
title: "Welcome to My Garden"
description: "A digital garden where ideas bloom"
showHero: true
---

This is the content of my digital garden...
```

This simple change will replace the header with a full-width hero section at the top of the page.

## Step 3: Add a Background Image

Let's make the hero section more visually appealing by adding a background image:

```yaml
---
title: "Welcome to My Garden"
description: "A digital garden where ideas bloom"
image: "/content/assets/garden.jpg"
showHero: true
---

This is the content of my digital garden...
```

## Step 4: Add Call-to-Action Buttons

For the final touch, let's add some call-to-action buttons to your hero section:

```yaml
---
title: "Welcome to My Garden"
description: "A digital garden where ideas bloom"
image: "/content/assets/garden.jpg"
showHero: true
ctas:
  - text: "Start Reading"
    url: "/blog"
  - text: "About Me"
    url: "/about"
    variant: "outline" # Creates an outlined button
---

This is the content of my digital garden...
```

The CTA buttons will be centered below your description.

## Site-Wide Hero Sections (Optional)

If you love how your hero sections look and want them on all pages, you can enable them site-wide. Add this to your `config.json`:

```json
{
  "title": "My Digital Garden",
  "description": "Where ideas grow and thoughts flourish",
  "image": "/content/assets/default-hero.jpg",
  "showHero": true
}
```

This will:
- Enable hero sections across your site
- Set default values for all pages
- Still allow individual pages to override these settings

> [!tip]
> Even with site-wide heroes enabled, you can disable them on specific pages using `showHero: false` in the page's frontmatter.

## Troubleshooting

If your hero section isn't appearing:

1. Double-check your frontmatter syntax (proper indentation is important)
2. Verify image paths are correct
3. Ensure `showHero` is set to `true`

Remember to sync your site after making changes to see them live!

---

Need help with hero sections? Have ideas for improvements? We'd love to hear from you! Submit an issue [here](https://github.com/flowershow/flowershow/issues) or start a discussion [here](https://github.com/flowershow/flowershow/discussions). 🌷