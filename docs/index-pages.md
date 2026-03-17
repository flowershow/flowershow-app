---
title: Index & Root Pages
description: Learn how Flowershow resolves the main page for your site and its sub-directories.
---

When you visit a URL that corresponds to a directory (like the root of your site `/` or a folder like `/blog`), Flowershow needs to decide which file to display.

This guide explains the logic Flowershow uses to resolve these "index" pages.

## Resolution Logic

Flowershow looks for files in the following order of priority:

1.  **`README.md`**: If this file exists in the directory, it is served as the index page.
2.  **`index.md`**: If `README.md` is missing, Flowershow looks for `index.md`.
3.  **First file alphabetically**: If neither `README.md` nor `index.md` exists, Flowershow will serve the **first file in that directory** based on standard alphabetical sorting.

### Example: Site Root (`/`)

If a user visits your home page `https://mysite.com/`, Flowershow looks in your root content folder:

*   Does `README.md` exist? -> **Show it.**
*   No? Does `index.md` exist? -> **Show it.**
*   No? -> **Show the first file alphabetically** (e.g. `about.md`).

### Example: Sub-directory (`/blog`)

If a user visits `https://mysite.com/blog`, Flowershow looks in the `blog/` folder:

*   Does `blog/README.md` exist? -> **Show it.**
*   No? Does `blog/index.md` exist? -> **Show it.**
*   No? -> **Show the first file alphabetically** (e.g. `blog/announcement.md`).

> [!note] 404 Errors
> If a directory is completely empty, or contains no Markdown files, Flowershow will return a 404 error.

## Best Practices

For clarity and predictability, we recommend explicitly creating a `README.md` or `index.md` file for every directory you want to be accessible as a page.

Reliying on the alphabetical fallback can be confusing for visitors if the "first" file changes (e.g. you add `a-new-post.md` which sorts before `welcome.md`).
