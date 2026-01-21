---
title: Flowershow Publish
description: Publish your files and folders directly from the terminal with the Flowershow CLI. No config, no UI, just ship.
showToc: false
showComments: false
showEditLink: false
---

# Publish from your terminal

Skip the dashboard. Flowershow CLI lets you deploy your files and folders directly to the web.
It's fast, and built for people who live in the command line.

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
publish ./folder-file
```
Publish your files and folders to the web.


## 4. Sync changes

```bash
publish sync ./folder-file
```
We diff your files and upload only what changed.

## Why use the CLI?

### ⚡ Speed
No more long processes of needing a repo/push/commit changes on files/foldersThe CLI is fast and efficient.


### 🧘 Simple
Publishing shouldn't be a project. It should be a single command. `publish`.

### 🌍 Global
Your content is distributed to the edge. Fast for everyone, everywhere, easy to share your ideas!
