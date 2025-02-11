---
title: Customize Your Site with CSS
tags:
  - flowershow-cloud
---

You can customize the appearance of your Flowershow Cloud site by adding a `custom.css` file to your site's repository.

## File Location

Place the `custom.css` file in:
- The root directory of your repository, or
- The directory specified in your site's "Root Directory" setting (if you're publishing from a subfolder)

## Creating the File

1. Create a new file named `custom.css` in the appropriate location
2. Add your CSS rules to customize colors, fonts, layouts, and more
3. Commit and sync your site to apply the changes

> [!important]
> When using h1 tags in custom components, you must set `display: block !important;` in your CSS due to how page titles are handled internally.

For a detailed guide on styling your site, including examples and step-by-step instructions, check out our [[flowershow-cloud-custom-styles|tutorial]].
