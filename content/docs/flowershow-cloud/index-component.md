---
title: Index Component
tags:
  - flowershow-cloud
---

The Index component allows you to create organized catalogs of your markdown content by automatically listing files from a specified directory.

## Usage

Add the Index component to your markdown file:

```markdown
<Index dir="/blog"/>
```

The component will display:
- Title (from frontmatter or filename)
- Description (from frontmatter)
- Publication date (from frontmatter)

>[!note]
>Files are sorted by date (newest first) if dates are provided in frontmatter, otherwise they are sorted by title.

## Configuration

The Index component accepts one required prop:

```markdown
dir: string       # Absolute path to directory (must start with '/')
```

For example:
```markdown
<Index dir="/blog"/>        # Lists files from blog directory
<Index dir="/tutorials"/>   # Lists files from tutorials directory
<Index dir="/recipes"/>     # Lists files from recipes directory
```

## Behavior

The Index component:
- Lists markdown files from the specified directory
- Ignores `README.md` and `index.md` files
- Is non-recursive (doesn't show files in subdirectories)
- Sorts by date if available, otherwise by title
- Displays each file's title, description, and date (if provided)

For more details practices, see our [[flowershow-cloud-index-component|blog post]].