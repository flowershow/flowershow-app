---
title: How to Add Forms to Your Flowershow Site
description: Learn how to integrate newsletter signup forms, contact forms, and surveys into your Flowershow site
date: 2025-05-26
authors:
  - olayway
---

Forms are essential for engaging with your audience - whether you're collecting newsletter signups, gathering feedback, or creating contact forms. In this guide, we'll walk through setting up Tally and Brevo forms in your Flowershow site.

## Tally Forms

Once you've created your form in Tally, follow these steps:

1. **Get the embed code**
   - Click "Share" in your form editor
   - Select "Standard" option under "Embeded Form"
2. **Copy the `<iframe>` tag** (skip any `<script>` tags).
3. **Paste the `<iframe>` tag** into your Flowershow markdown page.
4. **Adjust for JSX** in markdown pages:
   - camelCase multiword attributes (e.g. `frameborder` -> `frameBorder`)

> [!note]
> Flowershow automatically loads the Tally embed script, so you don't need to include it manually.


**Example:**
```markdown
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

## Brevo Forms

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

## Mailchimp Forms

After creating your form in Brevo, follow these steps:

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


## Other Forms

Depending on how your form provider generates its embed code, choose one of the following approaches:

1. **Standalone `<iframe>` Embeds**  
   If you receive a single `<iframe>` tag (with no extra `<script>` or wrapper elements), treat it like a Brevo form:
   - Copy the `<iframe>` tag into your Flowershow markdown page.
   - Adjust attributes for JSX

2. **Complex Embeds (Multiple Tags or Scripts)**  
   If the provider’s snippet includes wrapper `<div>`s, `<script>` tags, or inline CSS/JS:
   - Wrap the full embed snippet in Flowershow’s `<CustomHtml>` component.
   - Pass the raw HTML as a template string to the `html` prop:
   ```jsx
   <CustomHtml html={`<div id="embed-container">…full embed code…</div><script src="…"></script>`} />
   ```
   - This ensures Flowershow injects the code exactly as provided, without JSX conflicts.