---
title: How to Create Content Catalogs with the List Component
description: Learn how to organize and display your content collections using Flowershow's List component, perfect for blog posts, tutorials, recipes, and more.
date: 2025-03-25
authors:
  - olayway
tags:
  - flowershow-cloud
---

Whether you're managing a blog, documentation, recipes, or any other collection of markdown files, the List component makes it easy to display them in a clean, organized way.

## Using the List Component

The List component is a simple yet powerful way to display a list of markdown files from any directory in your site. Here's how to use it:

```markdown
<List dir="/blog"/>
```

That's it! This single line will create an elegantly formatted list of all markdown files in your `/blog` directory, displaying each file's:
- Title
- Description
- Publication date (`date` frontmatter field; if provided)

![[Pasted image 20250325124121.png]]

## How It Works

The List component:
- Takes an absolute path to a directory as its `dir` prop
- Scans the specified directory for markdown files
- Automatically ignores `README.md` and `index.md` files
- Displays files in a clean, organized layout
- Is non-recursive (only shows files in the specified directory, not subdirectories)

## Example Implementation

```markdown
---
title: Welcome to My Blog
description: Welcome to my collection of thoughts and ideas
---

Here are all my blog posts:

<List dir="/blog"/>
```

## Important Notes

- The `dir` prop must be an absolute path
- The component won't display `README.md` or `index.md` files
- Files are sorted by date (newest first) if dates are provided in frontmatter, otherwise they are sorted by title
- The component is not recursive - it won't show files in subdirectories

By using the List component effectively, you can create organized, easy-to-navigate content collections that your readers will love. It's a simple yet powerful way to showcase your markdown content in a professional and user-friendly manner.