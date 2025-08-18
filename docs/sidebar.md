---
title: Sidebar Configuration
description: Enable sidebar navigation that displays your site's structure and links to all pages.
---

## Enabling the sidebar globally

To enable the sidebar navigation, add the `showSidebar` property to your `config.json` file in the root of your repository:

```json
{
  "showSidebar": true
}
```

The sidebar will automatically generate the navigation structure based on your content directory structure.

## Disabling the sidebar on a page

You can hide the sidebar on some page (e.g. the landing page) by adding this to the frontmatter:

```md
---
showSidebar: false
---
```
