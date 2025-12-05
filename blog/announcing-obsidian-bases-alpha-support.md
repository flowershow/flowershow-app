---
title: Announcing Obsidian Bases Support (Alpha)
description: Flowershow now supports Obsidian Bases in alpha, enabling dynamic, queryable views of your notes with filters, formulas, and multiple display layouts in your published sites.
image: "[[obsidian-bases.png]]"
authors:
  - "[[olayway]]"
date: 2025-12-04
---

We're excited to announce alpha support for Obsidian Bases in Flowershow! This powerful feature allows you to create dynamic, queryable views of your notes directly in your published sites.

## What are Obsidian Bases?

Obsidian Bases let you organize and display your vault's content in multiple ways using filters, formulas, and different view types. Think of them as dynamic databases for your notes that can be embedded anywhere in your content.

> [!info] Learn More
> - 📚 [Obsidian Bases Documentation](https://help.obsidian.md/bases) - Complete guide to Bases syntax and features
> - 🎯 [Flowershow Demo Site](https://demo.flowershow.app) - See Bases in action with live examples

## Supported Features

### Core Sections

- ✅ **Filters** - Define conditions to narrow down your dataset with `and`, `or`, and `not` logic
- ✅ **Formulas** - Create computed properties using arithmetic operators and built-in functions
- ✅ **Properties** - Configure display names for your properties
- ✅ **Views** - Display your data in multiple layouts (support for List, Table and Cards views)

### Properties

- ✅ **Note Properties** - Access frontmatter properties from your Markdown files
- ✅ **File Properties** - Use file metadata like name, path, extension, size, dates, and more

### Operators

- ✅ **Arithmetic Operators** - `+`, `-`, `*`, `/`, `%`, and parentheses
- ✅ **Comparison Operators** - `==`, `!=`, `>`, `<`, `>=`, `<=`
- ✅ **Boolean Operators** - `!`, `&&`, `||`

### Functions

#### Global Functions
- ✅ `escapeHTML()` - Escape special characters for HTML
- ✅ `date()` - Parse date strings
- ✅ `html()` - Render HTML snippets
- ✅ `if()` - Conditional logic
- ✅ `image()` - Display images
- ✅ `icon()` - Render Lucide icons
- ✅ `list()` - Create or wrap lists
- ✅ `max()` / `min()` - Find extremes
- ✅ `now()` / `today()` - Current date/time
- ✅ `number()` - Type conversion

#### Type-Specific Functions
- ✅ **Any** - `isTruthy()`, `toString()`
- ✅ **Date** - All fields and functions including `format()`, `relative()`, `time()`
- ✅ **String** - Complete support for all string operations
- ✅ **Number** - All numeric functions including `abs()`, `ceil()`, `floor()`, `round()`, `toFixed()`
- ✅ **List** - Full support including `map()`, `filter()`, `reduce()`, `sort()`, and more
- ✅ **Object** - `isEmpty()`, `keys()`, `values()`
- ✅ **Regular Expression** - Pattern matching with `matches()`

### View Types

- ✅ **Table View** - Display files as rows with property columns
  - ✅ Built-in summaries (Average, Sum, Min, Max, Median, etc.)
  - ✅ All property type summaries (Numbers, Dates, Checkboxes)
  
- ✅ **Cards View** - Gallery-like grid layout
  - ✅ Card size configuration
  - ✅ Image properties (local attachments and URLs)
  - ✅ Image fit options (Cover/Contain)
  - ✅ Image aspect ratio control

- ✅ **List View** - Bulleted or numbered list display

### File Property Support

All standard file properties are available:
- `file.name`, `file.path`, `file.folder`, `file.ext`
- `file.size`, `file.ctime`, `file.mtime`
- `file.links`, `file.embeds`, `file.tags`
- `file.hasProperty()`, `file.inFolder()`

## Upcoming Features

The following features are planned for future releases:

### Core Functionality
- ❌ **Custom Summaries** - Define your own summary formulas
- ❌ **Date Arithmetic** - Add/subtract durations from dates
- ❌ **`this` Context** - Access properties of the embedding file

### Functions
- ❌ `duration()` - Parse duration strings
- ❌ `file()` - Get file objects from paths
- ❌ `link()` - Create link objects programmatically
- ❌ File functions: `hasLink()`, `hasTag()`, `asLink()`
- ❌ Link functions: `asFile()`, `linksTo()`

### View Features
- ❌ **Map View** - Display files as pins on interactive maps
- ❌ **Row Height Control** - Customize table row heights
- ❌ **Hex Color Images** - Use color codes as card backgrounds

## Getting Started

To use Obsidian Bases in your Flowershow site:

1. Create a `.base` file in your vault with your desired configuration
2. Define your filters, formulas, and views using the supported syntax
3. Publish your site - Flowershow will automatically render your bases

Example base file:

```yaml
filters:
  or:
    - file.hasProperty("status")
    - file.inFolder("Projects")
formulas:
  days_old: "(now() - file.ctime) / (1000 * 60 * 60 * 24)"
properties:
  status:
    displayName: Status
  formula.days_old:
    displayName: "Age (days)"
views:
  - type: table
    name: "All Items"
    order:
      - file.name
      - status
      - formula.days_old
    summaries:
      formula.days_old: Average
```

## Feedback

This is an alpha release, and we're actively working on expanding support. If you encounter any issues or have feature requests, please let us know!

---

*Note: This feature requires Obsidian 1.9+ for full compatibility with the Bases syntax.*