---
title: List Component
---

The List component allows you to create organized catalogs of your markdown content by automatically listing files from a specified directory.

## Usage

Add the List component to your markdown file:

```markdown
<List dir="/blog"/>
```

The component will display:
- Title (from frontmatter or filename)
- Description (from frontmatter)
- Publication date (from frontmatter)

>[!note]
>Files are sorted by date (newest first) if dates are provided in frontmatter, otherwise they are sorted by title.

## Configuration

The List component accepts one required prop:

```markdown
dir: string       # Absolute path to directory (must start with '/')
```

For example:
```markdown
<List dir="/blog"/>        # Lists files from blog directory
<List dir="/tutorials"/>   # Lists files from tutorials directory
<List dir="/recipes"/>     # Lists files from recipes directory
```

## Behavior

The List component:
- Lists markdown files from the specified directory
- Ignores `README.md` and `index.md` files
- Is non-recursive (doesn't show files in subdirectories)
- Sorts by date if available, otherwise by title
- Displays each file's title, description, and date (if provided)

For a detailed guide including examples and step-by-step instructions, check out our [[how-to-create-content-catalogs|this blog post]].