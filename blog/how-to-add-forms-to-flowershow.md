---
title: How to Add Newsletter and Other Subscription Forms
description: Learn how to integrate newsletter signup forms, contact forms, and surveys into your Flowershow site
date: 2025-06-12
authors:
  - olayway
---

Forms are essential for engaging with your audience - whether you're collecting newsletter signups, gathering feedback, or creating contact forms. In this guide, we'll walk through how to add forms to your Flowershow site.

There are two main approaches to embedding forms, depending on the complexity of the embed code provided by your form service:

## Simple `iframe` Embeds

If your form provider gives you a single `<iframe>` tag (with no extra `<script>` or wrapper elements), you can embed it directly in your markdown:

1. **Copy the `<iframe>` tag** from your form provider
2. **Paste it** into your Flowershow markdown page
3. **Adjust for JSX** in markdown pages:
   - camelCase multiword attributes (e.g. `frameborder` -> `frameBorder`)
   - Change `class` to `className`
   - Convert any inline `style` attributes to JavaScript objects

### Brevo Forms

After creating your form in Brevo, follow these steps:

1. **Get the embed code**
   - In the form editor go to "Share"
   - Select "Iframe"
2. **Copy the `<iframe>` tag**
3. **Paste the `<iframe>` tag** into your Flowershow markdown page.
4. **Adjust for JSX** in markdown pages:
   - camelCase multiword attributes (e.g. `frameborder` -> `frameBorder`)
   - Change `class` to `className`.
   - Convert any inline `style` attributes to JavaScript objects, or simply remove them if not needed.

**Example**:
```jsx
<iframe
  src="https://my.brevo.com/form/embed/1/your-form-id"
  width="100%"
  height="400"
  frameBorder="0"
  scrolling="no"
  title="Contact form"
  style={{
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '100%',
  }}>
</iframe>
```

## Complex Embeds

For forms that require additional elements like `<script>` tags, wrapper `<div>`s, or custom CSS (common with providers like Mailchimp, Tally, TypeForm, etc.):

1. **Get the full embed code** from your form provider
2. **Use the `CustomHtml` component** in your markdown
3. **Pass the raw HTML** as a template string to the `html` prop

### Tally Forms

Once you've created your form in [Tally](http://tally.so/), follow these steps:

1. **Get the embed code**
   - Click "Share" in your form editor
   - Select "Standard" option under "Embeded Form"
   - Click "Get the code"
2. **Copy the `<iframe>` tag** (skip any `<script>` tags).
3. **Paste the `<iframe>` tag** into your Flowershow markdown page.
4. **Adjust for JSX** in markdown pages:
   - camelCase multiword attributes (e.g. `frameborder` -> `frameBorder`)

**Example:**
```jsx
<iframe
  data-tally-src="https://tally.so/embed/your-form-id?your-form-configs"
  loading="lazy"
  width="100%"
  height="157"
  frameBorder="0"
  marginHeight="0"
  marginWidth="0"
  title="Your form title">
</iframe>
```

### Mailchimp Forms

After creating your form in Mailchimp, follow these steps:

1. **Get the embed code**
   - In the form editor, after you've set it up, click on "Continue"
2. **Copy the whole Embedded Form Code**
3. In your Flowershow markdown page add `CustomHtml` component, pasting the copied form embed in the `html` property.

**Example**:
```jsx
<CustomHtml html={`<div id="mc_embed_shell">
<link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
<style type="text/css">
#mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
    ...
`}/>
```

> [!important]
> ### Why JSX Adjustments Are Needed
> Flowershow uses React under the hood, which means any HTML in your markdown files is actually processed as JSX (React's template syntax). JSX has slightly different requirements than standard HTML:
> - Attributes with multiple words must use camelCase (e.g., `frameborder` becomes `frameBorder`)
> - The `class` attribute must be written as `className`
> - Style attributes must be JavaScript objects with camelCase properties
> 
> These adjustments ensure your embedded forms work correctly within React's rendering system. For complex embeds where these adjustments would be tedious, use the `CustomHtml` component which bypasses JSX processing entirely.