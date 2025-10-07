---
title: How to Set Up a Blog
description: A comprehensive guide to setting up a blog on your Flowershow site — from creating a blog section to configuring the List component, adding authors, navigation, and themes.
date: 2025-06-24
authors:
  - olayway
image: /assets/blog-showcase.png
---

This guide walks you through the process of adding a **blog** to your Flowershow site.  
You’ll learn how to create a dedicated blog section, set up a landing page that lists your posts, attribute content to authors, manage drafts, embed a subscription form, and apply a custom theme.

> [!note] Prerequisites
> Before you begin, make sure you have a Flowershow site set up.  
> In the video tutorial, I’m using **Obsidian** connected to GitHub via the **Enveloppe plugin**, and the site is already published with **Flowershow**.  
> However, you can use **any markdown editor**, or even edit files directly in the **GitHub web interface** — Flowershow works the same way.

🎥 **Watch the full video tutorial:**
https://youtu.be/ZbQRlNm2dww

## Step 1: Create a Blog Directory

While you can name and place your blog content anywhere in your site's structure, this guide uses a `/blog` directory in the root folder as an example. The key is to keep your blog posts organized in a dedicated location.

1. Choose a location for your blog content. Common options include: `/blog`, `/posts` or `/articles`.

This folder will contain:
  - Individual blog post files (e.g., `my-first-post.md`)
  - A landing page (`README.md` or `index.md`)
  - Optional subdirectories for organization

> [!tip] Organizing Blog Posts
> You can use subdirectories to organize your posts by:
> - Categories (e.g., `/blog/tutorials`, `/blog/news`)
> - Status (e.g., `/blog/drafts`, `/blog/archive`)
> - Date (e.g., `/blog/2025/06` for June 2025 posts)
>
> The List component will automatically include posts from all subdirectories.

## Step 2: Add Your First Blog Post

1. Create a new markdown file in the chosen blog directory, for example: `/blog/my-first-blog-post.md`.

2. Add frontmatter at the top of the file. The frontmatter sets structured metadata of the page, and controls how your post appears in the List component (see next steps) and page headers:

```markdown
---
title: My First Blog Post
description: A brief description of your post
date: 2025-06-24
image: /path/to/optional/featured-image.jpg
---

Your blog post content goes here...
```

![[Pasted image 20250624182613.png]]
The frontmatter fields explained:
- `title`: The post's title
- `description`: A brief summary
- `date`: Publication date in YYYY-MM-DD format (used for sorting)
- `image`: Featured image path (relative to site root) or URL

> [!info] Learn about different options to set a page title
> You don't have to use `title` frontmatter field to set the page title. To learn about other options, see [Three Ways to Set a Page Title](/blog/how-to-set-page-title).

## Step 3: Create the Blog Landing Page

The landing page serves as the main entry point for your blog section. You can create it using either `README.md` or `index.md` in your blog directory.

1. Inside your blog directory, create the landing page file:
   - Option 1: `README.md` (recommended)
   - Option 2: `index.md`

2. Add the following content to create a landing page that lists all blog posts:

```markdown
---
title: Blog
description: A collection of blog posts
---

<List 
  dir="/blog" 
  slots={{
    headline: "title",
    summary: "description",
    eyebrow: "date",
    media: "image"
  }}
/>
```

The List component automatically scans the directory specified in the dir property (in our case /blog) and displays all markdown files inside.

The slots tell Flowershow which frontmatter fields to display in each part of the list item:
- headline: the main title (title field)
- summary: short description (description field)
- eyebrow: smaller text above the title (often the date)
- media: the featured image (image field)
- footnote: optional small text below the summary (for example, authors)

💡 You can freely adjust which frontmatter fields are connected to which slots — or omit slots you don’t need.

![[Pasted image 20250624183244.png]]
>[!info] `List` Component Options
> Learn how to customize the List component in the [List Component Docs](/docs/list-component).

The List component will:
- Sort posts by date (newest first) if available, otherwise by title
- Paginate posts (10 per page by default)
- Include files from subdirectories (useful for organizing posts by year/month)
- Ignore README.md and index.md files

## Step 4: Set Up Author Pages

Author pages allow you to create dedicated profiles for your content creators and attribute blog posts to their authors. While this guide uses a `/team` directory in the root folder, you can store author profiles anywhere in your site's structure. (What matters is that file names need to match authors listed in the `authors` frontmatter field, as described below.)

To attribute blog posts to authors:

1. Add an `authors` field to your blog post frontmatter with an array of author names that exactly match their profile page filenames (without the .md extension):

```markdown
---
title: My First Blog Post
description: A brief description of your post
date: 2025-06-24
authors:
  - jane-smith
---
```

1. Choose a location for author profiles. For example: `/team`, `/authors` or `/people`.

2. Create profile pages for your authors. For example, if using the `team` directory:
   ```
   team/
   ├── jane-smith.md
   └── README.md  # Optional index page listing all authors
   ```

3. Create an author profile, e.g., `team/jane-smith.md`:
```markdown
---
title: Jane Elizabeth Smith
description: Technical writer and open-source enthusiast
avatar: /assets/jane-avatar.jpg
---

Jane is a passionate technical writer with over 5 years of experience...
```

The author pages support:
- `title`: Author's full name (displayed in page headers)
- `description`: Brief bio or role
- `avatar`: Profile picture displayed in page headers (local path or external URL)

When an author page exists, the author's name in blog posts will automatically link to their profile page and display its content.

![[Pasted image 20250624183741.png]]

> [!tip] Author Page Names
> Use simple, URL-friendly names for author page files (e.g., `jane-smith.md`) and set the full name in the `title` field. Then use the simple name in blog post frontmatter (e.g., `authors: [jane-smith]`).

> [!info] Learn more about author pages
> For more details about author pages, profile customization, and avatars, see [How to Show Authors of Your Content in Page Headers](/blog/how-to-create-author-pages).

## Step 5: Add Blog to Navigation

1. Open or create `config.json` in your site's root directory
2. Add a blog link to the navigation:

```json
{
  "nav": {
    "links": [
      {
        "href": "/blog",
        "name": "Blog"
      }
    ]
  }
}
```

> [!info] Learn more about navigation configuration
> For more details about customizing your navigation bar, including adding logos and social links, see [How to Configure the Navigation Bar](/blog/how-to-configure-navigation-bar).

## Step 6: Control What Gets Published

You can control which blog posts get published using either site-wide settings or page-level control:

### Using site-wide settings

Add `contentExclude` to your `config.json` to exclude entire directories:

```json
{
  "contentExclude": [
    "/blog/drafts",
    "/blog/archive"
  ]
}
```

### Using page-level control

Add `publish: false` to a post's frontmatter to prevent it from being published:

```markdown
---
title: Draft Post
description: Work in progress
publish: false
---
```

This is useful for:
- Keeping draft posts private
- Archiving old content
- Managing work-in-progress posts

> [!info] Learn more about content filtering
> For more details about controlling which files get published, including advanced configuration options, see [How to Exclude Files from Publishing](/blog/how-to-exclude-files-from-publishing).
