---
title: Choose Your Rendering Mode - Markdown or MDX
description: Flowershow now lets you choose how each page is rendered — Markdown for pure content, MDX for components and JSX.
date: 2025-11-03
authors:
  - olayway
---

Flowershow now gives you control over how your content is parsed: Markdown or MDX. Use Markdown for clean note-style pages (perfect for Obsidian users), or switch to MDX when you want to use JSX components like `<List>`.

## Configuration Options

### Global Configuration

Set the default rendering mode for your entire site in `config.json`:

```json
{
  "syntaxMode": "md"
}
```

Options:
- `"md"` - Use regular Markdown rendering for all pages
- `"mdx"` - Use MDX rendering for all pages (default)
- `"auto"` - Automatically decide based on file extension (`.md` vs `.mdx`)

### Per-Page Override

Override the global setting for individual pages using frontmatter:

```markdown
---
title: My Page
syntaxMode: md
---

Your content here...
```

Per-page frontmatter accepts:
- `"md"` - Render this page as regular Markdown
- `"mdx"` - Render this page as MDX

## Why This Matters

This feature is particularly useful if you're publishing content from Obsidian or other "normal" (non-MDX) Markdown editors. While MDX is powerful and allows you to use JSX components (like our [[how-to-create-content-catalogs|List component]]), it has stricter parsing rules than regular Markdown.

MDX has stricter parsing rules and may not handle certain syntax that works fine in plain Markdown, such as:
- HTML blocks (MDX expects JSX syntax instead of plain HTML, though some HTML may work)
- Special characters like `<` that aren't part of valid JSX
- Unescaped curly braces like `{a}` in regular text

If you've been authoring your content using plain Markdown (not MDX) and experience issues when publishing with Flowershow, try switching to `"md"` mode globally and use MDX only where you need it.

With syntax mode configuration, you can:
- Use regular Markdown rendering for content that includes HTML blocks or special characters
- Switch to MDX when you want to leverage Flowershow components or write [[enhance-markdown-with-styled-jsx-blocks|JSX blocks styled with Tailwind]]
- Mix both approaches across different pages in your site

## Publishing from Obsidian

If you're authoring your content in Obsidian (or some other Markdown editor) and have been using HTML blocks or special characters in your notes, set the global mode to Markdown:

```json
{
  "syntaxMode": "md"
}
```

Then, when you want to use Flowershow components (like the [[how-to-create-content-catalogs|List component]]) on specific pages, override it with frontmatter:

```markdown
---
title: My Catalog Page
syntaxMode: mdx
---

<List path="notes" />
```

## Summary

The new syntax mode configuration gives you the flexibility to:
- Work seamlessly with content from Obsidian and other Markdown editors
- Progressively enhance your site with JSX components
- Choose the right rendering mode for each page's needs
