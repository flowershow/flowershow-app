# Image Optimization

## Situation

Today in Flowershow:
- Markdown page content renders images as plain `<img>` tags pointing at R2 (via redirects from "natural" paths). These have no `srcset` and no `sizes` -> every user downloads the same original file size regardless of device/layout.
- Layout-level images (hero, header, etc.) use `next/image` with `fill` attribute (fill available space), but without `sizes` the browser assumes `100vw` is needed, which can cause unnecessarily large downloads (and Next may generate an unhelpful candidate set).

## Complication

Performance suffers because:
- Without `srcset`/`sizes`, the browser can’t pick an appropriately sized image for the user’s viewport/DPR -> oversized downloads, worse LCP, higher bandwidth.
- With `next/image` `fill` but no `sizes`, the browser assumes 100vw -> can still select overly large candidates.
- We’re paying extra bytes either way (user bandwidth + CDN egress), and if you later add transforms you’ll want a predictable, bounded set of variants (to avoid cache fragmentation).


## Solution

### Prerequisite

We have two separate rendering pipelines - Markdown and MDX. To improve things consistently, we must ensure all content images that currently use `img` tag, get replaced with `<Image />` in both pipelines.

### Option 1 (quick v1): Use next/image default optimizer & just add `sizes`

Implementation outline
1. Set good default `sizes` per context:
- Md/MDX (content) images: e.g. "(max-width: 768px) 100vw, 700px" (or our content max width)
- App layout components (hero, logo, blog featured image, logo etc.): e.g. "(max-width: 768px) 100vw, 1200px"
2. Tune `next.config.js`:
- Optionally reduce `deviceSizes` to a tighter set to limit variants

How it works
- Transform happens in: Next.js image optimizer (app runtime; used by default).
- Caching: optimized variants are cached by Vercel. Repeated requests for the same variant URL hit cache.
- `srcset` generation:
  - With `sizes` present Next emits width-based `srcset` (bucketed widths from deviceSizes/imageSizes).
  - Result: real resized variants exist behind the `srcset` URLs (/_next/image?...w=...) and the browser picks one based on sizes.

Benefits
- Big win quickly and easily: smaller downloads + better LCP/CLS (if we also ensure width/height or stable layout).
- No Cloudflare image pipeline needed to start getting real responsive images.

Cons / trade-offs
- We pay compute in app runtime for first-hit transforms (CPU + latency) and we’ll feel it if we have many cold variants.
- Ccost and pressure shifted to Vercel runtime.

### Option 2 (better v2): Custom loader + Cloudflare image transformations

Implementation outline
1. Implement a custom loader and use it in `next/image` (will replace the default Next.js Optimizer):
- Takes `{ src, width, quality }`
- Returns a Cloudflare-transform URL pointing at the R2 asset
- Ensures widths come only from allowed buckets
2. Enable/configure Cloudflare Image Resizing:
- Confirm caching TTLs and cache keys are sane (width, format, quality)

See for reference:
- https://developers.cloudflare.com/images/transform-images/integrate-with-frameworks/

How it works
- Transform happens: at Cloudflare edge (Image Resizing / transformations), not in our app runtime.
- Caching: cached at Cloudflare edge; variants are reused globally with high hit rates.
- `srcset` generation:
  - Next `<Image />` still generates `srcset` widths (based on our width buckets).
  - Our custom loader maps each requested width to a Cloudflare-transform URL (e.g. ...?width=828&format=auto&quality=75).
  - Result: browser requests one candidate; Cloudflare serves a resized/modern-format image from cache or generates it once at the edge.

Benefits
- Offloads CPU from app runtime -> less Vercel/Node/Edge pressure.
- Great caching characteristics (edge-local, scalable). (???? isn't Vercel cache also edge?)
- Potentially faster TTFB for images after warmup; often better global performance.


## Rabbit Holes

- Need to ensure variant bucketing stays bounded. Don’t allow arbitrary widths to prevent "variant explosion" (cache fragmentation and lots of unique variants.).
- We must be careful about multi-tenant/security boundaries (only transform allowed assets).

## Notes

### How srcset and sizes work (and why they matter)

Modern browsers can choose between multiple image variants if you tell them what options exist and how big the image will be on the page. That’s exactly what `srcset` and `sizes` do.

#### `srcset`: the available options

`srcset` lists multiple versions of the same image, each at a different resolution OR width.
The browser never downloads all of them — it picks one.

There are two common ways to describe candidates:

1) DPR-based candidates (1x, 2x)

Used when the image has a fixed display size (`width` and `height`).

Example:
```
image.png 1x
image@2x.png 2x
```

This tells the browser:

“This image is always rendered at the same CSS size. Pick a higher-resolution file on high-DPR screens.”

2) Width-based candidates (640w, 1024w)

Used for responsive layouts.

Example:
```
image-640.jpg 640w
image-1024.jpg 1024w
image-1600.jpg 1600w
```

This tells the browser:

“This image may be rendered at different sizes. Here are width options.”

#### `sizes`: how big the image will actually be

`sizes` describes the rendered width of the image in CSS pixels, depending on viewport conditions.

Example:
```
sizes="(max-width: 768px) 100vw, 700px"
```

Meaning:
- On small screens the image is full width
- On larger screens the image never exceeds 700px

The browser uses sizes to:
1. Compute the expected rendered width
2. Multiply by device pixel ratio (DPR)
3. Pick the smallest sufficient candidate from srcset

Without sizes, the browser must assume the image is 100vw.

#### DPR vs width-based sizing (why both exist)

DPR-based (1x, 2x)
- Best for fixed-size images
- Example: avatars, icons, thumbnails
- The browser only needs to know screen pixel density

Width-based (640w, 1024w)
- Required for responsive layouts
- Example: content images, hero images
- The browser needs to know layout width - this is what sizes provides

#### How Next.js Image uses this information

**Fixed `width` + `height`**

```
<Image src="/img.jpg" width={300} height={200} />
```

- Image has a known rendered size
- Next.js generates a DPR-based srcset (1x, 2x)
- `sizes` is unnecessary

**`fill` (or responsive layouts) + `sizes`**

```
<Image src="/img.jpg" fill sizes="(max-width: 768px) 100vw, 700px" />
```

- Image size depends on layout
- Next.js generates a width-based `srcset`

Good for:
- Content images where dimensions are unknown
- Hero images
- Cards and responsive components

**What happens if `sizes` is missing**

If an image is responsive and `sizes` is not provided:
- Next.js generates a DPR-based `srcset` (1x, 2x)
- The browser assumes the image may be 100% of the viewport width
- It selects a larger candidate than necessary
- This often results in:
  - Excessive bandwidth
  - Worse LCP
  - Lower cache efficiency

This is why `sizes` should be considered mandatory for responsive images.