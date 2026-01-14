---
title: Introducing the Flowershow CLI
description: Publish your digital garden directly from your terminal with the new Flowershow CLI.
date: 2026-01-14
authors:
  - Theo
  - abeelha
image: [[cli-launch.png]]
---

We are releasing the **Flowershow CLI**.

Check our Demo video! [Demo](https://youtu.be/_3DWycEpq2E)

This tool enables you to publish your Obsidian vault or standard Markdown notes directly from your terminal. It simplifies the deployment process by removing the need for CI/CD pipelines or manual file uploads.

## Why the CLI?

We built the CLI to streamline your publishing workflow. Whether you're a developer who lives in the terminal or a writer looking for a quick "deploy" button, the Flowershow CLI is designed for you.

- **Fast**: Direct upload to our edge storage.
- **Secure**: OAuth-based authentication.
- **Simple**: Commands that make sense.

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
publish ./my-vault
```

And that's it! 🌺 Your site will be live and ready to share with the world.

## Keep it Fresh

Made some changes? Sync your content with this command:

```bash
publish sync ./my-vault
```

The CLI intelligently detects changed files and only uploads what's new.
## Try it Today

The Flowershow CLI is currently in Beta, and we can't wait for you to try it. Give it a spin and let us know what you think!

Check out the full [CLI Documentation](/docs/cli-reference) for more advanced usage and options.

Happy Publishing!
