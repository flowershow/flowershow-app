---
title: Publishing a local Markdown file shouldn’t feel like starting a project
description: Publish markdown files directly from your terminal with the new Flowershow CLI.
date: 2026-01-14
authors:
  - abeelha
image: "[[cli-launch.png]]"
---

Most of the things we write never become “projects”.

They’re notes. Drafts. Small explanations. Half-finished ideas. Files that live on our machine and are good enough to share, but not important enough (at least not yet!) to set up properly.

Until now, publishing usually meant committing to structure:
creating a repo, syncing content, logging into a dashboard, deciding where this thing belongs.

We built the Flowershow CLI for a simpler moment.

A moment where you already have a file, locally.
You want it on the web.
You don’t want a UI.
You don’t want to decide anything else.

With the CLI, publishing looks like this:
you install it, run `publish`, and your file gets a real URL.

That’s it.

https://www.youtube.com/watch?v=ou1bigOIlPk

---

**Get started in 3 steps**

1. Install
```bash
npm i -g flowershow-publish
```

2. Login
```bash
publish auth login
```

3. Publish
```bash
publish ./my-folder
```

And that’s it 💐
You'll get a URL that's ready to share.

---

This isn’t meant to replace the UI.

The CLI is for people who are already comfortable in the terminal and want publishing to feel lightweight, reversible, and fast. It’s currently in beta, requires a Node.js environment, and comes with a small learning curve if terminal tools are new to you.

But if you’ve ever thought “I just want this file on the web”, this exists for that exact moment.
