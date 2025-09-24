---
title: Media files in Flowershow
description: Learn how Flowershow handles media files (images, PDFs, videos, audio), what storage limits apply, and best practices for optimizing files to keep your site fast, reliable, and within plan limits.
---
Flowershow Cloud lets you publish not just notes, but also media files such as images, PDFs, and videos. Any file you add to your content repo will be processed and made available on your site.

Because media can impact **storage, performance, and user experience**, we recommend following the guidelines below.

---

## Storage limits

Each plan has a **soft storage limit** for all media and site files combined:
- **Free plan** → 100 MB
- **Premium plan** → 5 GB

You can upload files of any type up to GitHub’s own file size limits (50 MB warning, 100 MB hard limit per file). 

>[!warning]
>Very large files may also cause longer sync times and slow down your site.

## Images

Images often account for the largest share of site weight. Optimizing them improves page speed, saves storage space, and provides a smoother experience for your readers.

**We recommend to:**
- **Use these formats:** `.webp`, `.png`, `.jpg`, `.svg`
- **Compress before committing** → target **65–75% quality**
- **Resize to display size** → avoid multi-MB images when smaller versions are enough
- **Strip metadata** → removes GPS/device info and reduces file size

>[!tip] Tools for optimizing images
> - macOS → [ImageOptim](https://imageoptim.com/mac)
> - Windows → [FileOptimizer](https://nikkhokkho.sourceforge.io/static.php?page=FileOptimizer)
> - Linux → [Trimage](https://trimage.org/)
>   
> Target **65–75% quality**.

## PDFs

PDFs are convenient but can be storage-heavy and slow to render if not optimized.

**We recommend:**
- Use your PDF editor’s **compress/reduce file size** option.
- Remove unused images, layers, or fonts.
- Keep files small (ideally < **10 MB**) for faster loading and smoother embedding.

## Videos & audio

Flowershow Cloud supports hosting video and audio files, but large media can quickly use up your storage and slow down your site.

> [!info] 🚧 Embed widgets
> At the moment, Flowershow renders Obsidian embeds for video/audio files as links. Clicking these links opens a preview or download. Inline embed players will be added later.

**If you do want to host media directly:**
- **Supported formats:**
    - Video → `.mp4`, `.webm`
    - Audio → `.mp3`, `.aac`
- **Limitations:**
    - Files are served _as is_. No transcoding, compression, or adaptive streaming (like YouTube/Vimeo).
    - Large videos can quickly exceed quotas and degrade performance.
- **Recommendation:**
    - Use Flowershow for small clips or lightweight files.
    - Host long or high-resolution media on platforms like **YouTube, Vimeo, or SoundCloud**, then embed.

## Summary

- **Storage caps:** 100 MB (Free), 5 GB (Premium).
- **Images:** prefer WebP, optimize & resize before upload.
- **PDFs:** compress and keep under 10 MB.
- **Video/Audio:** supported, but limited — best to host large files externally.

---

👉 By following these tips, you’ll keep your Flowershow site fast, lightweight, and within limits — while still enjoying the convenience of simply dropping files into your repo.






















### ✅ Preferred formats

>[!tip] Rule of thumb
> Use **WebP** whenever possible, **PNG** for sharp/transparent graphics, **JPG** for photos, and **SVG** for logos/diagrams. Avoid legacy/heavy formats unless absolutely needed.

- **WebP**
    - Modern, widely supported (all major browsers).
    - Much smaller than PNG/JPG for the same visual quality.
    - Supports both lossy and lossless compression + transparency.
    - **Best default choice** for most images.
- **PNG**
    - Great for images with sharp edges, flat colors, or transparency (e.g. icons, logos, diagrams).
    - Lossless, but larger file sizes compared to WebP.
    - Still useful when you need perfect pixel fidelity.
- **JPG (JPEG)**
    - Best for photos or gradients when WebP isn’t available.
    - Smaller than PNG, but lossy compression can cause artifacts if over-compressed.
    - Legacy but still safe fallback.
- **SVG**
    - Vector format: infinitely scalable without losing quality.
    - Perfect for logos, icons, diagrams.
    - Super lightweight if optimized, but ⚠️ can embed scripts → must be sanitized before serving.

### 🚫 Formats to avoid

- **GIF** → Huge file sizes for animations. Better to use WebP (animated) or MP4 for motion.
- **BMP, TIFF** → Very large, not optimized for the web, poor browser support.
- **HEIC/HEIF** → High efficiency (Apple default), but not consistently supported on the web.

### Optimization

- **Compression**: compress images before committing (target 65–75% quality). Tools:
    - macOS → [ImageOptim](https://imageoptim.com/mac)
    - Windows → [FileOptimizer](https://nikkhokkho.sourceforge.io/static.php?page=FileOptimizer)
    - Linux → [Trimage](https://trimage.org/)
- **Resizing**: upload images at the actual display size; avoid multi-MB images when a smaller version will do.
- **Metadata**: stripping EXIF metadata reduces file size and avoids leaking GPS/device data.

