import React from 'react';
import {
  bodyP,
  Head2026, HeaderBand, Page2026, Article2026, BackLink,
} from '../../components/design2026/chrome';

// The funding announcement, as a standalone article page matching thecall.js.
// /news links here rather than carrying the content itself.

// This page's own words, read by both the header band and the document head.
// siteName: false — the headline already names Intentional Society.
const PAGE = {
  title: 'Intentional Society Announces $1.8 Million, 10-Year Funding Commitment',
  metaTitle: 'Funding Announcement',
  metaDescription: 'A ten-year, $1.8 million commitment to keep Intentional Society free and peer-led.',
  ogType: 'article',
};

const NamedDefault = () => (
  <Page2026 active="/news">

    {/* ======== Header band ======== */}
    <HeaderBand
      image="luminaria-field.jpg" focus="center 40%" credit="Bill Claff" veil="news"
      width="720px"
      title={PAGE.title}
      dateLabel="March 15, 2026"
    />

    {/* ======== Article body ======== */}
    <Article2026>

      <p style={bodyP}>
        Intentional Society (IS), as stewarded by Intentional Society, LLC, today announced
        a $1.8 million funding commitment, spread over ten years, from a small private
        family foundation. The announcement was made at the organization's 5th anniversary
        event, subtitled "Launching a New Era," celebrating Intentional Society's journey
        from a small huddle into a network, organization, and ecosystem. This new era marks
        the evolution from an exploratory phase focused on inner and cultural development
        into a mature, integrated ecosystem encompassing economic impact, social action, and
        organizational capacity.
      </p>
      <p style={bodyP}>
        The funding will support three key areas: the IS Workteam, a contractor structure
        formed in December 2025 to increase operational capacity for the Intentional Society
        ecosystem; ongoing contributions to the Intentional Ventures system, which catalyzes
        values-aligned livelihoods; and relational grant streams to partners and allies in
        the broader liminal scene who are doing impactful work in the field. All 2026
        allocations have been determined at this time.
      </p>
      <p style={bodyP}>
        "Making this commitment public is a signal of sustainability and perseverance," said
        James Baker, founder of Intentional Society. "The ecosystem we've grown together over
        these first five years has deep roots, and this funding grounds our intention to
        keep on this journey for the long term. I don't know what the world will look like in
        10 years, but I'm confident that we're going to be supporting each other whatever
        happens."
      </p>
      <p style={bodyP}>For more information or media inquiries, please reach out to our team.</p>

      <BackLink to="/news">← Back to News</BackLink>

    </Article2026>
  </Page2026>
);

export default NamedDefault;

export const Head = ({ location }) => (
  <Head2026 {...PAGE} pathname={location.pathname} />
);
