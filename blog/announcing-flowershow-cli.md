---
title: Introducing the Flowershow CLI
description: Publish markdown files directly from your terminal with the new Flowershow CLI.
date: 2026-01-14
authors:
  - abeelha
image: [[cli-launch.png]]
---

We are releasing the **Flowershow CLI**.

https://youtu.be/_3DWycEpq2E

This tool enables you to publish your Obsidian vault or standard Markdown notes directly from your terminal. It simplifies the deployment process by removing the need for CI/CD pipelines or manual file uploads.

## Why the CLI?

A lot of people who write in Markdown already live close to the terminal. Their notes, docs, blogs, and READMEs are just files in folders or repos. Adding a web UI on top of that often feels like unnecessary friction.

A CLI keeps things simple. Publishing becomes just another small step in the same flow as writing, editing, and committing—rather than a separate process you have to think about. It also makes automation easy.

## Get Started in 3 Steps

It's really this simple:

### 1. Install

```bash
npm i -g flowershow-publish
```

### 2. Login

```bash
publish auth login
```

### 3. Publish

```bash
publish ./my-folder
```

And that's it! 🌺 Your site will be live and ready to share with the world.

## Keep it Fresh

Made some changes? Sync your content with this command:

```bash
publish sync ./my-folder
```

The CLI intelligently detects changed files and only uploads what's new.
## Try it Today

The Flowershow CLI is currently in Beta, and we can't wait for you to try it. Give it a spin and let us know what you think!

Check out the full [CLI Documentation](/docs/cli) for more advanced usage and options.

Happy Publishing!
