---
title: Debugging MDX Errors
description: Struggling with MDX errors? This guide explains the most common MDX parsing issues, how to avoid them, and how to fix them fast.
---
When you’re writing content in Flowershow, most of the time Markdown “just works.” But if you start using **MDX** — which lets you include JSX blocks, e.g. Flowershow components like `<List>` — you might run into error messages like this one:

```
Unexpected character `'` in attribute name
```

Don’t worry — you didn’t break anything.

It just means MDX needs a clearer hint about what you’re trying to do.

This guide walks you through what the most common MDX errors actually mean — in **plain language** — and how to fix them.

---

## Why does MDX error sometimes?

Markdown treats everything as text.

MDX is Markdown **plus** the ability to write JSX inside your content.

So when MDX sees:

```
<Something>
```

it assumes you’re trying to use a component — just like you would in React.

That’s powerful, but it also means MDX needs to interpret things more strictly than Markdown. Sometimes it gets confused and needs us to be explicit.

## Most common errors

### "Unexpected character 'x' in attribute name"

**Plain English explanation:**

You probably used `<` in your writing as a normal character — for math, notation, or emphasis — but MDX thought you were trying to create a component.

Example — you meant to write math or notation:

```
The set <a, b> has two members
```

But MDX sees `<a` and thinks:

> “Oh, the user is trying to create a JSX component called `<a`…
> but `,` or other symbols appeared before a valid attribute name.”

So it panics and shows this error.

**✅ Fix: escape literal angle brackets**

If you’re not trying to use a component, escape `<` and `>`:

```mdx
The set \<a, b\>; has two members
```

or like this:
```mdx
The set &lt;a, b&gt; has two members
```

or add some spaces:
```mdx
The set < a, b > has two members
```

or wrap the entire expression in backticks:
```mdx
The set `<a, b>` has two members
```

Both tell MDX: _“Relax, it’s just text.”_

### “Expected closing tag” / “Unterminated tag”

**Plain English explanation:**

MDX saw something like `<div>` and expected you to eventually write `</div>`, but never saw it.

Or you meant to make it self-closing but forgot `/>`.

For example:
```mdx
<div className="text-red">
This is useful information
```

MDX keeps scanning the file waiting for `</div>` — and never finds it.

**Fix**

Close the tag:
```mdx
<div className="text-red">
This is useful information
</div>
```

Or if it’s just a standalone component:
```mdx
<List />
```

### “xyz is not defined”

**Plain English explanation:**

Anything inside `{…}` in MDX is treated as **JavaScript**, not text.

So if MDX sees `{word}`, it tries to evaluate it — and errors if it’s not valid JS (e.g. `word` variable is not defined).

This often happens when you’re trying to literally show something in braces, like set notation:
```mdx
{a, b, c}
```

MDX thinks you’re trying to run JavaScript and says:

> “I don’t know what a is!”

**Fix**

Tell MDX it’s **not code**, just text:

Option A — wrap in backticks:
```mdx
`{a, b, c}`
```

Option B — escape braces:
```
&#123;a, b, c&#125;
```

## Disabling MDX rendering

Flowershow is designed to feel like writing in a modern digital notebook — where you can write normal Markdown and, when you want, sprinkle in JSX blocks styled with Tailwind or add interactive components like:

```mdx
<List dir="blog" />
```

That’s why **Flowershow parses all files as MDX by default**.

It means you can always use components without having to rename files or remember a special syntax.

But here’s the good news:

If you’re writing simple Markdown (like a blog or notes), and MDX feels extra or confusing, you can tell Flowershow to **skip MDX entirely** and treat everything as plain Markdown.

Just update your `config.json`:
```json
{
  "markdownRenderer": "md"
}
```

Now your site behaves just like a classic Markdown blog — no MDX parsing, no JSX rules, no angle bracket surprises.

**Want the best of both worlds?**

If you _sometimes_ want MDX but also want regular `.md` files to stay simple, use:
```json
{
  "markdownRenderer": "auto"
}
```

This means `.md` files will be parsed as plain Markdown, but `.mdx` files will be parsed as MDX. So you can choose per file, naturally.

**Summary**

| **Mode**        | **Meaning**                        | **Best for**                        |
| --------------- | ---------------------------------- | ----------------------------------- |
| mdx _(default)_ | All files support MDX components   | Advanced users, interactive content |
| md              | No MDX at all, plain Markdown only | Writers, note-takers, simple blogs  |
| auto            | .md → Markdown, .mdx → MDX         | Mixed content / gradual learning    |
