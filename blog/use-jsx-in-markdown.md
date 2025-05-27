---
title: "Enhancing Markdown Pages with Styled JSX Blocks"
description: "Learn how to transform simple markdown content into beautiful, JSX components styled with Tailwind CSS. We'll walk through the complete process using a real-world example."
date: 2025-05-27
authors: ["olayway"]
---

In Flowershow you can seamlessly blend markdown content with JSX blocks. This allows you to start with simple, readable markdown draft and progressively enhance it into beautiful landing page without losing the simplicity of your content workflow.

In this tutorial, we'll walk through the complete process of transforming a simple markdown section into an elegant JSX component. As an example we'll use features list of a dummy tech product - 404Shield - that's currently part of a markdown draft of the products landing page.

We'll cover this transformation in five progressive steps:

1. **Start with markdown** - Clean, simple content and page structure draft in markdown
2. **Create a basic card** - Convert one feature to JSX block
3. **Add styling** - Make it look nice with Tailwind
4. **Add icons** - Enhance visual appeal with Material Design icons
5. **Create a grid of features** - Scale to multiple features

Let's dive in!

## Step 1: Start with Pure Markdown

Here's our original markdown section:

```markdown
## Why 404Shield?

### Instant Error Eradication
Our script intercepts 404 errors before they ever reach your visitors.

[Learn more ➝‬](https:://404shield.com/docs)

### Redirect to Random Meme
Because if you can’t find the page, at least make them laugh.

[Learn more ➝‬](https:://404shield.com/docs)

### Smart Redirects
Guess the intended page using our AI (Actually Imaginary) engine.

[Learn more ➝‬](https:://404shield.com/docs)

### Eternal Uptime
If every page exists, then none are ever missing. Think about it.

[Learn more ➝‬](https:://404shield.com/docs)
```

And currently it renders like this in Flowershow:

![[Pasted image 20250527145145.png]]

This is clean, readable, and perfectly functional. But we can make it much more engaging with some custom styling and layout.

## Step 2: Creating a Basic Card Component

Let's start by converting just one feature into a basic JSX card with no styling. We'll take the first feature and wrap it in a simple card structure:

```jsx
<div>
  <h3>Instant Error Eradication</h3>
  <p>Our script intercepts 404 errors before they ever reach your visitors.</p>
  <a href="https:://404shield.com/docs">Learn more →</a>
</div>
```

This gives us the foundation to work with. The content is the same, but now we have the flexibility to style and enhance it. If you now sync your site and preview it, you'll notice no (or almost no) changes, as we have perfectly mirrored how Flowershow renders it as HTML anyway.

## Step 3: Adding Tailwind Styling

Now let's make our card look nicer with some Tailwind CSS classes:

```jsx
<div className="not-prose flex flex-col rounded-lg shadow p-10 space-y-4">
  <h3 className="font-semibold">Instant Error Eradication</h3>
  <p className="flex-grow">Our script intercepts 404 errors before they ever reach your visitors.</p>
  <a href="https:://404shield.com/docs" className="text-sm font-semi-bold text-orange-600">Learn more →</a>
</div>
```

Here's what each class does:
- `not-prose` - Disables default Tailwind typography styling (more explanation in the callout below)
- `flex flex-col` - Creates a vertical flex layout
- `rounded-lg shadow` - Adds rounded corners and a subtle shadow
- `p-10 space-y-4` - Adds padding and vertical spacing between elements
- `font-semibold` - Makes the heading bold
- `flex-grow` - Allows the description to take up available space (vertical space in this case)
- `text-sm text-orange-600` - Makes link font smaller and adds color

Here is the result:

> [!hint]
> Flowershow supports **Tailwind CSS 3** so you can look up style classes in their [documentation](https://v3.tailwindcss.com/docs).

> [!important] Why `not-prose` is Essential
> The `not-prose` class is crucial when creating custom JSX components in Flowershow. By default, Flowershow applies Tailwind's typography plugin styles (prose classes) to all markdown content, which includes automatic styling for headings, paragraphs, links, and other elements.
>
> Without `not-prose`, your custom Tailwind classes might conflict with or be overridden by the default prose styling. For example, your custom `text-orange-600` link color might be ignored in favor of the default prose link styling.
>
> Adding `not-prose` to your JSX components ensures that only your intentional styling is applied, giving you complete control over the appearance.

## Step 5: Creating the Complete Grid Layout

Now that we have a perfect card, let's create the full grid with all features:

```jsx
<div>
  <h2 id="why" className="text-3xl text-center font-bold mb-12">Why 404Shield?</h2>
  <div className="grid lg:grid-cols-2 gap-4 text-base">
    <div className="flex flex-col rounded-lg shadow p-10 space-y-4">
      <h3 className="font-semibold">Instant Error Eradication</h3>
      <p className="flex-grow">Our script intercepts 404 errors before they ever reach your visitors.</p>
      <a href="https:://404shield.com/docs" className="text-sm font-semi-bold text-orange-600">Learn more →</a>
    </div>
    <div className="flex flex-col rounded-lg shadow p-10 space-y-4">
      <h3 className="font-semibold">Redirect to Random Meme</h3>
      <p className="flex-grow">Because if you can't find the page, at least make them laugh.</p>
      <a href="https:://404shield.com/docs" className="text-sm font-semi-bold text-orange-600">Learn more →</a>
    </div>
    <div className="flex flex-col rounded-lg shadow p-10 space-y-4">
      <h3 className="font-semibold">Smart Redirects</h3>
      <p className="flex-grow">Guess the intended page using our AI (Actually Imaginary) engine.</p>
      <a href="https:://404shield.com/docs" className="text-sm font-semi-bold text-orange-600">Learn more →</a>
    </div>
    <div className="flex flex-col rounded-lg shadow p-10 space-y-4">
      <h3 className="font-semibold">Eternal Uptime</h3>
      <p className="flex-grow">If every page exists, then none are ever missing. Think about it.</p>
      <a href="https:://404shield.com/docs" className="text-sm font-semi-bold text-orange-600">Learn more →</a>
    </div>
  </div>
</div>
```

Key layout classes:
- `text-3xl text-center font-bold mb-12` - Styles the main heading
- `grid lg:grid-cols-2 gap-4` - Creates a responsive 2-column grid

The result will look like this:

![[Pasted image 20250527184601.png]]

## Summary

We've transformed a simple markdown list into a neat features grid. The progression shows how you can start with content-first thinking and gradually enhance the presentation without losing the essence of your message.

## Best Practices for Component Development

### 1. Start with Content
Always begin with clean, well-structured markdown. This ensures your content is accessible and readable on Flowershow even without styling, so you can publish it quickly, and allows you to focus on what's most important-the message.

### 2. Progressive Enhancement
Build your components incrementally. Start simple and add complexity.

### 3. Responsive Design
Always consider how your components will look on different screen sizes. Use responsive prefixes like `lg:` to adapt layouts.

### 4. Semantic HTML
Even when using JSX, maintain semantic HTML structure for accessibility and SEO.

## Working with Flowershow

When developing with Flowershow Cloud, you can see your changes in real-time:

1. **Edit directly on GitHub** - Use GitHub's web editor for quick changes
2. **Sync your site** - Wait for the site to sync automatically (or sync it manually)
3. **Preview** - See your components live on your site
4. **Iterate quickly** - Make adjustments and see results


## Conclusion

The ability to seamlessly blend markdown with JSX components gives you the best of both worlds: the simplicity of markdown for content creation and the power of React components for styling.

By following this step-by-step approach, you can transform any markdown content into beautiful, functional components that enhance your site's user experience while maintaining the content-first workflow that makes markdown so appealing.

