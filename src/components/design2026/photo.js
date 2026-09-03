import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Full-bleed photo layer for the 2026 header bands, hero, and section
// interstitials. These used to be CSS `background: url(...)` on the section,
// which meant the images bypassed Gatsby's image pipeline entirely (no
// resizing, no WebP/AVIF, no lazy-loading, no blur-up). This component renders
// the same photo as a GatsbyImage positioned absolutely behind the section's
// content, so the full-res originals in src/images/bands/ flow through
// gatsby-plugin-image and ship as responsive, modern-format derivatives.
//
// Usage: put position:'relative' + overflow:'hidden' on the section, render
// <FullBleedPhoto image="moss-roots.jpg" focus="center 40%" /> as its first
// child, then the veil/overlay and content above it (higher zIndex).
//
//   image  base filename in src/images/bands (a leading path is tolerated and
//          stripped, so "/design2026/moss-roots.jpg" also resolves)
//   focus  object-position for the cover crop, same syntax as the old CSS
//          background-position ('center', 'center 40%', …)
//   alt    almost always '' — these are decorative; the section's heading
//          carries the meaning

// One static query, shared by every FullBleedPhoto instance, scoped to the
// bands directory so only genuinely full-bleed images get FULL_WIDTH
// derivatives generated (cards and inline figures are handled elsewhere with
// smaller, constrained sizes).
const useBandImages = () => {
  const data = useStaticQuery(graphql`
    query BandImages {
      # JPEGs only. FullBleedPhoto lays a blur-up placeholder behind the
      # image, which shows through any transparency — fine for opaque photos,
      # wrong for a PNG with an alpha channel. The one transparent band asset
      # (ice-torn.png) is rendered separately via StaticImage with
      # placeholder="none", so it's deliberately excluded here; that also
      # avoids generating an unused FULL_WIDTH derivative set for it.
      allFile(
        filter: {
          relativeDirectory: { eq: "images/bands" }
          extension: { in: ["jpg", "jpeg"] }
        }
      ) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 82
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);
  return React.useMemo(() => {
    const map = {};
    data.allFile.nodes.forEach(node => {
      map[node.base] = getImage(node.childImageSharp);
    });
    return map;
  }, [data]);
};

export const FullBleedPhoto = ({ image, focus = 'center', alt = '', className }) => {
  const images = useBandImages();
  const key = image.split('/').pop();
  const gatsbyImage = images[key];
  if (!gatsbyImage) {
    // A missing key almost always means a filename typo or an image that
    // wasn't placed in src/images/bands. Fail loud in dev, quiet in prod.
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(`FullBleedPhoto: no image found for "${image}" (looked up "${key}") in src/images/bands`);
    }
    return null;
  }
  return (
    <GatsbyImage
      image={gatsbyImage}
      alt={alt}
      className={className}
      objectFit="cover"
      objectPosition={focus}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
    />
  );
};
