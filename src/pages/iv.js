import React from 'react';
import { Link } from 'gatsby';
import {
  bodyP, bodyUl, bodyLi, sectionHeading, linkStyle,
  Head2026, HeaderBand, PhotoCredit, Page2026, Article2026, Divider,
} from '../components/design2026/chrome';
import { StaticImage } from 'gatsby-plugin-image';

// 2026 redesign of the Ventures page — self-contained page ported from the
// Claude Design mockup, using the shared 2026 chrome (components/design2026/).

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Aligned livelihoods, woven into a relational economic web',
  metaTitle: 'Intentional Ventures',
  metaDescription: 'Aligned livelihoods, woven into a relational economic web.',
};

const NamedDefault = () => (
  <Page2026 active="/iv">

    {/* ======== Header band ======== */}
    <HeaderBand
      image="willow.jpg" focus="center 40%" credit="Bill Claff"
      title={PAGE.title}
    />

    {/* ======== Article body ======== */}
    <Article2026>

      <p style={bodyP}>
        The first goal of IV is to <strong style={{ fontWeight: 500 }}>catalyze aligned livelihoods</strong> for
        individuals in service to human thriving. The second goal of IV is to create
        a <strong style={{ fontWeight: 500 }}>relational economic web</strong> of abundance with
        clan / tribe / village-like bonds of support. These two goals are interdependent and
        equal in value. Livelihood is the more tangible individualized task, around which the
        more nebulous relational web layer hopes to cohere.
      </p>

      <p style={bodyP}>
        Intentional Ventures is by invitation only. We onboarded a new cohort in early 2026,
        and do not anticipate adding more participants for the near-to-medium-term future.
        However, we're still always interested in hearing from like-minded folks. You
        can <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWtrt_DBkpKHgujWzlxQJJiiW466NNU28s9dAe__ujVwS9_g/viewform?usp=sharing" target="_blank" rel="noopener noreferrer" style={linkStyle}>register
        your interest</a> or bring questions to an <Link to="/get-involved#connection-calls" style={linkStyle}>IS
        Connection Call</Link>.
      </p>

      <p style={bodyP}>IV heartbeat calls happen Fridays at 9am Pacific / Noon Eastern.</p>

      <p style={{ ...bodyP, marginBottom: '2rem' }}>
        The capital pool for IV investments intends to open to external donors in 2026.
      </p>

      <figure className="credit-host" style={{ margin: '0 0 3rem', position: 'relative' }}>
        <PhotoCredit name="Bill Claff" variant="corner" />
        <StaticImage src="../images/photos/monarch-goldenrod.jpg" alt="A monarch butterfly feeding on goldenrod"
          layout="constrained" width={820} aspectRatio={1.7778} placeholder="blurred" formats={['auto', 'webp', 'avif']}
          style={{ width: '100%', borderRadius: '3px 7px 4px 6px', display: 'block' }} />
      </figure>

      {/* The figure above already carries its own bottom gap, so the rule
          doesn't need a leading one. */}
      <Divider margin="0 auto 3rem" />

      <h2 style={sectionHeading}>History: the story so far</h2>

      <p style={bodyP}>Intentional Ventures began April 2024 with a founding team of about a dozen.</p>

      <p style={bodyP}>
        After three quarters with its founding team, at the end of 2024 IV had experimentally
        generated revenue, established key design principles, evolved a two-space structure,
        and added its first new (non-founding) participants.
      </p>

      <p style={{ ...bodyP, marginBottom: '0.8rem' }}>
        Inside Limicon 2025 (throughout March), some IV "exploration space" activities were
        shared in a four-part "Build-a-thon" series:
      </p>
      <ul style={bodyUl}>
        <li style={bodyLi}>Generative ideation</li>
        <li style={bodyLi}>Collaborative chemistry</li>
        <li style={bodyLi}>Venture assembly</li>
        <li style={bodyLi}>Storytelling practice</li>
      </ul>

      <p style={bodyP}>
        The functional alchemy of IV works via the management-and-integration of the polarity
        of inner work and outer work, all supported by relationality. In the inner dimension,
        IV provides psychological (inner) support via all members (via spotlights and other
        interactions), contributed from everyone's self-led time and energy. Broad relationality
        (to parts/I, group/we, system/world) supports our "three skills" of the
        rational-professional, interpersonal, and perspectival-developmental capabilities needed
        to "win at Game A while living Game B".
      </p>

      <p style={{ ...bodyP, marginBottom: '0.8rem' }}>
        Those "three skills" held as a baseline of Intentional Ventures participants are:
      </p>
      <ul style={bodyUl}>
        <li style={bodyLi}><strong style={{ fontWeight: 500 }}>Rational-professional skill</strong>: systematic thought, self-management, conventional professional skills</li>
        <li style={bodyLi}><strong style={{ fontWeight: 500 }}>Interpersonal skill</strong>: self-awareness, communication, robust emotional capacity and relational agility</li>
        <li style={bodyLi}><strong style={{ fontWeight: 500 }}>Perspectival-developmental skill</strong>: fluid perspective-taking, complexity lens, metasystematicity</li>
      </ul>

      <p style={{ ...bodyP, marginBottom: '2rem' }}>
        Inspirations include <a href="https://www.enspiral.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Enspiral</a>, <a href="https://www.coralus.world/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Coralus</a>, and
        the hypothetical <a href="https://laymanpascal.substack.com/p/the-metamodern-business-bureau-mmbb" target="_blank" rel="noopener noreferrer" style={linkStyle}>Metamodern
        Business Bureau</a>.
      </p>

    </Article2026>
  </Page2026>
);

export default NamedDefault;

export const Head = ({ location }) => (
  <Head2026 {...PAGE} pathname={location.pathname} />
);
