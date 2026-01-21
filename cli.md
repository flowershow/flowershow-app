---
title: Flowershow Publish
description: Publish your files and folders directly from the terminal with the Flowershow CLI. No config, no UI, just ship.
showToc: false
showComments: false
showEditLink: false
layout: plain
---

▶️ **Watch the short demo video:**

https://www.youtube.com/watch?v=ou1bigOIlPk


# Turn local files into websites

Skip the repository. Skip the dashboard. Flowershow CLI lets you publish any folder of Markdown files directly from your terminal.

It's built for moments when you just want a URL, not a project.

Also great for automated publishing, with scripts or by your AI agent.

[Read the Docs](/docs/cli) • [Read the Announcement](/blog/announcing-flowershow-cli)

## Get started in 3 steps

You don't need a git repo or a build pipeline. You just need a folder/file.

### 1. Install

```bash
npm i -g @flowershow/publish
```
Get the global binary. Requires Node.js

### 2. Login

```bash
publish auth login
```
Authenticates via browser. You only do this once.

### 3. Publish

```bash
publish ./my-folder
# OR
# publish ./my-file.md
```
Publish your files and folders to the web.


## 4. Sync changes

```bash
publish sync ./folder-file
```

We diff your files and upload only what changed.

## Why use the CLI?

### 📄 Just Files
No `git init`. No config files. No "setting up a project". If you have a folder of Markdown on your computer, you can publish it.

### ⚡ Instant
No build pipelines. No waiting for a server to clone your repo. The CLI uploads your local files fast and diffs your files locally when you update them and uploads only what changed.

### 🤖 Automation Ready
Since it's just a command, it's perfect for scripts, cron jobs, or AI agents that need to publish content without a human clicking a UI.

### 🏃 Stay in Flow
Don't break your writing flow to switch to a browser. Write in your editor -> run `publish` -> share URL -> keep going.
