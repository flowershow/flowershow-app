---
date: 2023-02-18
authors: [ "rufuspollock" ]
---

# Accessing Dataview API or database outside of Obsidian

**UPDATE: 2023-10-11: we ended up building a simple standalone (SQL-based) API for collections of markdown files called MarkdownDB - see https://markdowndb.com**

> [!note]
> Also posted in Obsidian Dataview discussion forum https://github.com/blacksmithgu/obsidian-dataview/discussions/1811

First, massive appreciation for the obsidian dataview plugin. 🙏

I'm trying to understand if one can use dataview indexing and database *outside* of Obsidian (more context below). Talking here about *reading* i.e. accessing the index and doing queries. *Not* about any rendering of dataview blocks etc..

Related to that, trying to understand a bit more about overall design/architecture of dataview and how it would support this or not.

Note: have done quite  a bit of digging around the code and the discussions before asking - apologies if we missed something obvious! 🙏

### Three main questions

1. Can you access dataview (and obsidian) API *outside* of the running obsidian app?
2. If there is no direct API access what about direct accessing the DB itself? That would  
3. Is there a way to reuse the *indexing* code itself outside of the plugin? i.e. could you use the dataview code *outside* of obsidian to index markdown files and build a database?

More specific related sub-questions are things like: 

- do you create your own index or write to obsidian main index?
- where is the structure of the index documented? (e.g. the "tables" and "columns" - of course, indexeddb is key/value not table based but you know what i mean).

Asides / Bonus

- Is there anyway to access an obsidian database *outside* of obsidian (I've looked at this before and not found an answer https://flowershow.app/notes/obsidian-database-research)

### Comments

We have done a bit of digging around the code. So far, our investigation suggests this is not possible e.g. core functions like [parsePage](https://github.com/blacksmithgu/obsidian-dataview/blob/245208aec9f8116ee3af351d52518637dee128d1/src/data-import/markdown-file.ts#L13) seem to depend on being passed items from obsidian core database e.g. `CachedMetadata`. Is that right?

### Our Context

To give context, we're working on [Flowershow](https://flowershow.app), which is an open source tool for publishing markdown and digital gardens especially obsidian. Our tool is React/NextJS based and renders to static content.

When rendering your digital garden to html we need to build an index of the content to prep for rendering.  

At the moment, we're having to "reinvent the wheel" in terms of creating our own "content layer" API over the markdown content.

Obviously, obsidian and especially this plugin already do an excellent job of indexing markdown content and extracting metadata including backlinks. We'd love to reuse that work rather than have to rewrite.

In a perfect world, we could reuse obsidian and dataview API *outside* of obsidian to directly access the indexed content and metadata.

Bonus: if we could access dataview somehow  we could even render dataview queries on publishing which would be awesome (see [our issue](https://github.com/flowershow/flowershow/issues/170)) 🚀
