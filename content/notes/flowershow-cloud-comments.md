---
title: Enabling comments on your Flowershow Cloud site
date: 2025-01-23
authors: [olayway]
---

You can enable comments on your published sites using Giscus - a comments system powered by GitHub Discussions. This means your readers can now engage with your content directly on your pages, with all comments being stored in your GitHub repository's Discussions section.

## How to Enable Comments

1. **Enable GitHub Discussions in your repository:**
   - Go to your repository's Settings
   - Scroll down to the Features section
   - Check "Discussions" checkbox

2. **Install the Giscus GitHub App in your repository:**
   - Visit [github.com/apps/giscus](https://github.com/apps/giscus)
   - Click "Configure"
   - Select the repository where your site content is hosted and click on Save

3. **Configure comments in your site settings:**
   - Go to your site's Settings page in the Flowershow Cloud dashboard
   - Find the "Comments" section
   - Toggle the switch to enable comments
   - You'll need to provide two pieces of information (see point 4.):
     - Repository ID (starts with 'R_')
     - Category ID (starts with 'DIC_')

4. **Getting the required IDs:**
   - Visit [giscus.app](https://giscus.app)
   - Enter your repository name
   - Select your preferred discussion category
   - (Ignore any other settings as they are already pre-configured in Flowershow Cloud)
   - The Repository ID and Category ID will be shown in the configuration section at the bottom of the page
  
https://github.com/user-attachments/assets/2317ce89-4166-43d1-a359-1930bbd95db9

That's it! Once configured, a comments section will appear at the bottom of all your pages. Your readers can use their GitHub accounts to leave comments, which will be synced with your repository's Discussions section.

## Benefits

- **GitHub integration**: All comments are stored as GitHub Discussions in your repository
- **Markdown support**: Full markdown support for rich text formatting in comments
- **GitHub authentication**: Spam protection through GitHub authentication

Enable them today to start engaging with your readers!

---

We 💙 feedback! If you have any ideas for new features or if you’ve noticed any bugs, please submit an issue [here](https://github.com/flowershow/flowershow/issues) or start a discussion [here](https://github.com/flowershow/flowershow/discussions). Thank you! 🌷

[Join our Discord server!](https://discord.gg/vQ5Y2uUzt6)
