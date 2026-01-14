---
title: Introducing the Flowershow CLI
description: Publish your digital garden directly from your terminal with the new Flowershow CLI.
date: 2026-01-14
authors:
  - Theo
  - "[[abeelha]]"
image: /assets/cli-launch.png
---

We are thrilled to announce the launch of the **Flowershow CLI**! 🚀

Publishing your Obsidian vault or standard Markdown notes to the web just got a whole lot easier. No more complex CI/CD pipelines or manual drag-and-drop. With the Flowershow CLI, you can ship your content directly from your terminal in seconds.

## Why the CLI?

We built the CLI to streamline your publishing workflow. Whether you're a developer who lives in the terminal or a writer looking for a quick "deploy" button, the Flowershow CLI is designed for you.

- **Fast**: Direct upload to our edge storage.
- **Secure**: OAuth-based authentication.
- **Simple**: Commands that make sense.

## Get Started in 3 Steps

It's really this simple:

### 1. Install

```bash
npm install -g flowershow
```

### 2. Login

```bash
flowershow auth login
```

### 3. Publish

```bash
flowershow publish ./my-vault
```

And that's it! 🌺 Your site will be live and ready to share with the world.

## Keep it Fresh

Made some changes? Just accept them and sync:

```bash
flowershow sync ./my-vault
```

The CLI intelligently detects changed files and only uploads what's new, making updates lightning fast.

## Try it Today

The Flowershow CLI is currently in Alpha, and we can't wait for you to try it. Give it a spin and let us know what you think!

Check out the full [CLI Documentation](/docs/cli-reference) for more advanced usage and options.

Happy Publishing!
