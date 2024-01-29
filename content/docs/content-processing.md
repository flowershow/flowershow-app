---
title: preProcess function
---

If you wish to modify the content of markdown files within the `content` folder in the Flowershow project, you can achieve this by adding a function to the `config.mjs` file located in the `content` folder.

For instance, let's say you want to replace instances of `=>` in markdown files with `⟹`. You can do this easily by adding the following code to `content/config.mjs`:

```javascript
// content/config.mjs
export default {
    preProcess: (content) => {
        return content.replaceAll(/=>/g, '⟹');
    }
}
```
> [!info] Notice
> This function, which converts `=>` to `⟹`, is applied by default in the Flowershow configuration.

For additional configuration options, please visit [Flowershow Documentation](https://flowershow.app/docs/config).
