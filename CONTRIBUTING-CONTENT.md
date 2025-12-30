# Content Contributor Guide

Welcome! This guide explains how to add or edit content on the Intentional Society website.

## Overview

The site uses markdown files for some content. Markdown is a simple way to format text using plain characters. When you save changes, the site automatically converts your markdown into web pages.

## File Locations

Markdown content files live in the `src/md/` directory.

## Basic Markdown Syntax

Quick reference for common formatting:

### Headings
```
### Heading Level 3
#### Heading Level 4
```

### Text Formatting
```
**bold text**
*italic text*
```

### Bullet Points
```
- First item
- Second item
- Third item
```

### Links
```
[Link text](https://example.com)
```

## Internal Links

To link to other pages on the site, use the page path starting with `/`:

```
[About us](/about)
[Our history](/history)
[Resources](/resources)
```

Available paths: `/about`, `/history`, `/resources`, `/dojo`, `/community`, `/spaces`, `/get-involved`

## Images

### Adding Images

1. Place your image file in the `/static/images/` folder
2. Reference it in your markdown:

```
![Description of the image](/images/your-image-name.png)
```

### Image Naming Guidelines

- Use lowercase letters
- Use hyphens instead of spaces: `team-photo.png` not `Team Photo.png`
- Choose descriptive filenames

## How to Contribute

### Option 1: Edit on GitHub (Easiest)

1. Navigate to the file on GitHub
2. Click the pencil icon (edit) in the top right
3. Make your changes
4. Add a brief description of what you changed
5. Click "Propose changes"
6. Click "Create pull request"

### Option 2: Edit Locally

1. Clone the repository
2. Edit markdown files with any text editor
3. Commit and push your changes
4. Open a pull request on GitHub

## Preview Your Changes

When you open a pull request, Netlify automatically creates a preview of the site with your changes. Look for a comment on your PR with a preview link.

---

Questions? Reach out to the maintainers for help.
