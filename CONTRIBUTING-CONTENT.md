# Content Contributor Guide

Welcome! This guide explains how to change content on the Intentional Society
website.

## Where content lives

Most pages keep their words directly in the page file, in `src/pages/`. The
page's URL matches its filename — `about.js` is the `/about` page,
`community.js` is `/community`, and so on. Those files are JavaScript, so
editing them means working around the code that surrounds the text. If you're
not comfortable with that, the easiest path is to send your wording to a
maintainer and let them place it.

The one exception is the **Relational Practices Catalog**. Its entries live in
`src/md/practices/` as markdown files — one per practice — because they're
maintained as documents rather than as page code. That catalog is still being
written and isn't published yet: the page carries an "Under Construction"
banner and isn't linked from the site's navigation.

So in practice: **if you're editing markdown, you're editing the practices
catalog.** Anything else is a page file.

## Markdown basics

Quick reference for the formatting the catalog uses:

### Headings

```
### Practice title
#### Section within a practice
```

The catalog starts at heading level 3 on purpose — the page itself supplies
the levels above it. Don't use `#` or `##`.

### Text formatting

```
**bold text**
*italic text*
```

### Bullet points

```
- First item
- Second item
```

### Links

```
[Link text](https://example.com)
```

### Quotes

```
> An epigraph, or a block of instructions to paste into Zoom chat.
```

For a multi-line quote, end each line except the last with `<br>`. Trailing
spaces get stripped by our tooling, so they won't hold the line breaks.

## Internal links

To link to another page on the site, use its path:

```
[About us](/about)
[Resources](/resources)
[Get involved](/get-involved)
```

Available paths: `/about`, `/web`, `/community`, `/dojo`, `/iv`, `/programs`,
`/resources`, `/friends`, `/news`, `/podcast`, `/get-involved`, `/contact`.

Link to our own pages this way rather than writing out a full
`https://www.intentionalsociety.org/...` address — a relative path works
correctly in preview builds, and a full address doesn't.

## Images

1. Put the image file in `static/images/`
2. Reference it from markdown:

```
![Description of the image](/images/your-image-name.png)
```

Always write a real description in the square brackets — it's what someone
using a screen reader hears in place of the picture. If the image is a quote or
a poster, put its words there.

Name files in lowercase with hyphens instead of spaces: `team-photo.png`, not
`Team Photo.png`.

## How to contribute

### Option 1: Edit on GitHub (easiest)

1. Navigate to the file on GitHub
2. Click the pencil (edit) icon
3. Make your changes
4. Add a brief description of what you changed
5. Click "Propose changes", then "Create pull request"

### Option 2: Edit locally

1. Clone the repository
2. Edit the files with any text editor
3. Commit and push your changes
4. Open a pull request on GitHub

## Preview your changes

When you open a pull request, Netlify builds a preview of the site with your
changes. Look for a comment on the pull request with the preview link, and
check your wording there before asking for a review.

---

Questions? Reach out to the maintainers for help.
