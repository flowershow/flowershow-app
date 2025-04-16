---
title: Navbar Configuration
---

The navigation bar in Flowershow Cloud can be customized through the `config.json` file in your site's root directory. This guide covers all available configuration options for customizing your site's navigation bar.

## Configuration Structure

The navigation bar configuration is defined under the `nav` object in your `config.json`:

```json
{
  "nav": {
    "logo": "string",
    "title": "string",
    "links": Array<Link>,
    "social": Array<SocialLink>
  }
}
```

## Logo and Title

Configure your site's branding with a logo and title:

```json
{
  "nav": {
    "logo": "logo.jpeg",
    "title": "My Digital Garden"
  }
}
```

- `logo`: Path to your logo file (relative to site root) or external URL
- `title`: Text displayed as your site title

## Navigation Links

Add navigation links using the `links` array. Each link requires:

```json
{
  "nav": {
    "links": [
      {
        "href": "/blog",
        "name": "Blog"
      },
      {
        "href": "/about",
        "name": "About"
      }
    ]
  }
}
```

Properties:
- `href`: URL or path the link points to
- `name`: Display text for the link

## Social Media Links

Add social media links using the `social` array. Each social link requires:

```json
{
  "nav": {
    "social": [
      {
        "label": "github",
        "name": "GitHub Profile",
        "href": "https://github.com/yourusername"
      },
      {
        "label": "twitter",
        "name": "Follow me on Twitter",
        "href": "https://twitter.com/yourusername"
      }
    ]
  }
}
```

Properties:
- `label`: Platform identifier (see supported platforms below)
- `name`: Text label (used in sidebar mode)
- `href`: Your social media profile URL

Supported Platform Labels:
- `github`
- `discord`
- `linkedin`
- `twitter`
- `x`
- `facebook`
- `instagram`
- `youtube`

## Complete Example

Here's a comprehensive configuration example:

```json
{
  "nav": {
    "logo": "logo.jpeg",
    "title": "My Digital Garden",
    "links": [
      {
        "href": "/blog",
        "name": "Blog"
      },
      {
        "href": "/about",
        "name": "About"
      }
    ],
    "social": [
      {
        "label": "github",
        "name": "GitHub Profile",
        "href": "https://github.com/yourusername"
      },
      {
        "label": "twitter",
        "name": "Follow me on Twitter",
        "href": "https://twitter.com/yourusername"
      }
    ]
  }
}
```

## Troubleshooting

Common issues and solutions:

1. **Logo Not Displaying**
   - Verify the logo path is correct relative to your site's root directory
   - Ensure the image file exists at the specified path

2. **Social Icons Not Showing**
   - Confirm you're using supported platform labels
   - Check that the `label` value matches exactly (case-sensitive)

For a detailed guide including examples and step-by-step instructions, check out our [[how-to-configure-navigation-bar|this blog post]].