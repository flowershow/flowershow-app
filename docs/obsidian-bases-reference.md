---
title: Obsidian Bases Syntax
description: Detailed reference for Obsidian Bases syntax, including filters, formulas, and view types.
---

## Supported Features

### Core Sections

- ✅ **Filters** - Define conditions to narrow down your dataset with `and`, `or`, and `not` logic
- ✅ **Formulas** - Create computed properties using arithmetic operators and built-in functions
- ✅ **Properties** - Configure display names for your properties
- ✅ **Views** - Display your data in multiple layouts (List, Table, and Cards views)

### Properties

- ✅ **Note Properties** - Access frontmatter properties from your Markdown files
- 🚧 **File Properties** - Limited support for file metadata:
  - `file.name`, `file.path`, `file.folder`, `file.ext`, `file.size`
  - `file.hasProperty()`, `file.inFolder()`

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
- ✅ **Date** - All fields (`year`, `month`, `day`, `hour`, `minute`, `second`, `millisecond`) and functions (`format()`, `relative()`, `time()`, `date()`, `isEmpty()`)
- ✅ **String** - Complete support for all string operations (`contains()`, `lower()`, `replace()`, `split()`, `trim()`, etc.)
- ✅ **Number** - All numeric functions (`abs()`, `ceil()`, `floor()`, `round()`, `toFixed()`, `isEmpty()`)
- ✅ **List** - Full support (`map()`, `filter()`, `reduce()`, `sort()`, `contains()`, `join()`, etc.)
- ✅ **Object** - `isEmpty()`, `keys()`, `values()`
- ✅ **Regular Expression** - Pattern matching with `matches()`

### View Types

- ✅ **Table View** - Display files as rows with property columns
  - ✅ Built-in summaries (Average, Sum, Min, Max, Median, Stddev, Range)
  - ✅ Date summaries (Earliest, Latest, Range)
  - ✅ Checkbox summaries (Checked, Unchecked)
  - ✅ Generic summaries (Empty, Filled, Unique)

- ✅ **Cards View** - Gallery-like grid layout
  - ✅ Card size configuration
  - ✅ Image properties (local attachments and URLs)
  - ✅ Image fit options (Cover/Contain)
  - ✅ Image aspect ratio control
  - ✅ Use hex color codes as card backgrounds

- ✅ **List View** - Bulleted or numbered list display

## Upcoming Features

The following features are planned for future releases:

### Core Functionality
- ❌ **Custom Summaries** - Define your own summary formulas
- ❌ **Date Arithmetic** - Add/subtract durations from dates
- ❌ **`this` Context** - Access properties of the embedding file

### File Properties
- ❌ `file.ctime`, `file.mtime` - File creation and modification times
- ❌ `file.links`, `file.embeds`, `file.tags` - File content metadata
- ❌ `file.backlinks`, `file.properties` - Advanced file metadata

### Functions
- ❌ `duration()` - Parse duration strings
- ❌ `file()` - Get file objects from paths
- ❌ `link()` - Create link objects programmatically
- ❌ File functions: `hasLink()`, `hasTag()`, `asLink()`
- ❌ Link functions: `asFile()`, `linksTo()`

### View Features
- ❌ **Map View** - Display files as pins on interactive maps
- ❌ **Row Height Control** - Customize table row heights
