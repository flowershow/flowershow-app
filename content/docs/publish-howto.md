---
title: Self publish your digital garden with Obsidian Flowershow plugin
description: Learn how to create and publish your first Flowershow website with Obsidian Flowershow plugin 🌷
layout: blog
date: 2023-08-03
authors: [Ola Rubaj]
---

## Prerequisites

- [GitHub account](https://github.com/signup)
- [Vercel account](https://vercel.com/signup) (recommended)
- [Obsidian](https://obsidian.md/) installed on your computer

## Prepare the content

First, you'll need some Obsidian vault. If you don't have one yet, you can create it by opening Obsidian desktop app and selecting "Create new vault" option.

> [!note]
> If you already have a folder with some markdown files you'd like to publish, you can open it in Obsidian and use it as your vault, by choosing "Open folder as vault" option.

![[obsidian_start_window.png]]

You can create as many subfolders within your vault as you want. Its directory tree will be reflected in url paths on the published website, e.g.: `my-digital-garden/blog/hello.md` file content will be available under `<base-url-of-your-published-website>/blog/hello`.

Each folder can have it's own `index.md` file, which will be available under it's parent directory path, e.g. `my-content/blog/index.md` will be available under `<base-url-of-your-published-website>/blog`.

In order to embed files (e.g. images or pdfs) in your markdown files, you will also need to create a dedicated folder for them in the root of your digital garden directory, and name it `assets`.

> [!tip]
> To make Obsidian automatically save any images to the `/assets` folder when you paste them in your notes, set this folder as an attachments folder, by right-clicking on it in the sidebar on the left hand side and selecting option "Set as attachments folder".

## Copy Flowershow repository to your GitHub account and setup continuous deployment

In order to publish your digital garden, you will need to copy [the Flowershow repository](https://github.com/datopian/flowershow) to your GitHub account and setup continuous deployment, so that each time the Flowershow plugin pushes your notes to that repository, the site gets automatically rebuilt to reflect the latest version of your notes.

The easiest way to do it, is to use [the "Deploy" button](https://github.com/datopian/flowershow#quick-clone-and-deploy) available in the README to the Flowershow repository. It will use Vercel to both copy the repository to your GitHub account and setup continuous deployment for you. You will be asked to login to your GitHub and Vercel accounts (unless you're already logged in), and then you will be able to choose your GitHub account as a scope and give a name to your Flowershow site's repository.

![[vercel_new_repo.png]]

Click on "Create" and wait for your GitHub repository to be created and deployed on Vercel.

![[vercel_deploy_success.png]]

You can now click on the site preview to visit it.

## Install and configure the Flowershow plugin

Once you have the Flowershow repository copied and your site deployed, you can install and configure the Flowershow plugin in Obsidian.

Open Obsidian settings by clicking on the ⚙️ icon in the Obsidian ribbon (the leftmost vertical part of the sidebar on the left) and open "Community plugins" tab. (You may need to enable community plugins to follow the next steps.)

![[community_plugins.png]]

Click on browse and find the "Flowershow" plugin. Then, install and enable it.

![[flowershow_plugin.png]]

To give the plugin access to your Flowershow repository, you'll need a GitHub personal access token. You can create one by going to your GitHub account settings, selecting "Developer settings" and then "Personal access tokens". Then, click on "Generate new token" button (or use [this link](https://github.com/settings/tokens/new)). Give your token a name and select "repo" scope.

![[gh_pat.png]]

Copy the generated token and paste it in the Flowershow plugin settings in Obsidian, along with your GitHub user name and the name of your Flowershow site's repository.

![[flowershow_plugin_settings.png]]

Great! Now the Flowershow plugin is bound with your Flowershow site's repository and is ready to publish your notes!

## Publish your notes

There are two ways you can publish your notes with the Flowershow plugin.

### Using Flowershow commands available in Obsidian commands palette

Click on `>_` icon in Obsidian ribbon to open Obsidian command palette, and search for commands starting with `Flowershow` keyword.

![[flowershow_plugin_commands.png]]

This gives you two options:

1. Flowershow: Publish all notes - wich will publish all your notes as the name suggests.
2. Flowershow: Publish single note - which will only publish the currently opened and active note.

### Using Flowershow Publish Status modal

Click on 🌱 icon in Obsidian ribbon (the leftmost vertical part of the sidebar on the left). This will open the Flowershow Publish Status modal showing you all the published, published but changed, and not yet published notes, as well as notes that has been deleted from the vault but are still published.

![[publish_status.png]]

You can use the buttons next to each category to update, publish and delete notes from your site.

![[plugin_publish_success.png]]

## See your notes live on your Flowershow website! 🚀

After you publish your notes in Obsidian, the plugin will push them to your GitHub repository. This will trigger the build of your site, which may take up to a few minutes, depending on how big you digital garden is.

And that's it!

## 🚧 (Coming soon) Customise your website in Flowershow plugin settings

Currently there is no way to customise your Flowershow website in Obsidian. However, we're working on it and it will be available soon! 🚧

As a workaround, you can customise your Flowershow website by editing the `config.js` file in your Flowershow repository. You can find it in the `/content` folder of your Flowershow site's repository. You can edit it directly on GitHub.
