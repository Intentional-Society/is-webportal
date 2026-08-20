import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT_DARK, INK, BODY_TEXT, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026, HeaderBand,
} from '../components/design2026/chrome';

// 2026 redesign of the IS Web page — previously an old-theme, markdown-driven
// page (src/md/web.md) rendered inside <Layout>. Now self-contained in the
// shared 2026 chrome (components/design2026/), matching the other interior
// pages. Absolute self-links in the old markdown (intentionalsociety.org/...)
// are internal <Link>s here.

const linkStyle = { color: ACCENT_DARK };

const sectionHeading = {
  fontFamily: serif, fontWeight: 300, lineHeight: 1.2,
  fontSize: 'clamp(1.5rem,2.6vw,2rem)', color: '#5C4A3A', margin: '0 0 1.4rem',
};

const subHeading = {
  fontFamily: sans, fontWeight: 500, fontSize: '1.5rem',
  color: INK, margin: '0 0 0.7rem',
};

const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

const listStyle = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.4rem 1.4rem', padding: 0 };

const divider = <hr style={{ border: 'none', borderTop: '1px solid rgba(42,42,36,0.12)', margin: '3rem auto', width: '120px' }} />;

// The five things membership actually gets you, in the order the old page had them.
const inside = [
  {
    title: 'Quarterly Convening',
    body: <>
      Once a quarter, we gather the whole network for a full assembly. Hear "what's alive?"
      from folks across the web, call and coordinate crews, update shared strategies.
      It's a party and a catalyst.
    </>,
  },
  {
    title: 'IS Web App',
    body: <>
      Members can sign in at <a href="https://app.intentionalsociety.org" target="_blank" rel="noopener noreferrer" style={linkStyle}>app.intentionalsociety.org</a>.
      This app supports us in seeing each other and how we're connected: the member
      directory holds our profiles and contact info, and the relational map of the IS Web
      charts our trust relationships and our collaborations in a node-link diagram.
    </>,
  },
  {
    title: 'Relational Programs',
    body: <>
      Gumball Machine, Presence Pods, Casework Pods, Thematic Crews, Arts in IS, and more.
      See the full <Link to="/programs" style={linkStyle}>Relational Programs</Link> page.
    </>,
  },
  {
    title: 'Weekly Community Calls',
    body: <>
      Running for 5+ years as the heartbeat of mutual support in this ecosystem, community
      members gather each Sunday for developmental-relational practices and growth-edge
      explorations. Growth, belonging, companionship, solidarity, all rooted in "being who
      we want to be". More info on the <Link to="/community" style={linkStyle}>Community</Link> page.
    </>,
  },
  {
    title: '(Future) Mesh Access',
    body: <>
      Around us in "liminal" space are other communities and entities with similar
      worldviews and principles. We dream of "densifying" a mesh of allies — connecting our
      maps to their maps and navigating trust ramps into larger-scale coordination and
      coalitions. We want to dance and play with what's already emerging in the field —
      just as our own web has sprouted over the past five years.
    </>,
  },
];

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 active="/web" />

    {/* ======== Header band ======== */}
    <HeaderBand
      image="/design2026/fungus-trunk.jpg" focus="center 45%" credit="Bill"
      kicker="The IS Web" title="Join the IS Web"
    />

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <p style={{
          fontFamily: serif, fontSize: 'clamp(1.2rem,2.2vw,1.5rem)', fontStyle: 'italic', fontWeight: 400,
          color: '#5C4A3A', margin: '0 0 2.5rem', lineHeight: 1.6,
        }}>
          This is a relational web of trust and collaboration.
        </p>

        <p style={bodyP}>
          This is the network of humans associated with Intentional Society — a distributed
          village, spanning an ecosystem of people and care. What brings this network
          together? This web is aligned around the intersection of inner development, wise
          action, and human connection.
        </p>

        <ul style={listStyle}>
          <li style={{ marginBottom: '0.6rem' }}>
            <strong style={{ fontWeight: 500 }}>Inner development:</strong> We are those who practice
            awareness, acceptance, and integrity in growing toward being who we want to be.
          </li>
          <li style={{ marginBottom: '0.6rem' }}>
            <strong style={{ fontWeight: 500 }}>Wise action:</strong> We are those whose lives form a
            living vow in service of what is good, true, and beautiful, integrated from
            personal to planetary.
          </li>
          <li style={{ marginBottom: '0.6rem' }}>
            <strong style={{ fontWeight: 500 }}>Human connection:</strong> We are connected to, and
            caring for, <em>these particular humans</em> in this web, an island of coherence
            and support.
          </li>
        </ul>

        <p style={bodyP}>
          Joining requires a referral from one existing member. If you have no connection to
          IS folks, come meet some at a <Link to="/get-involved#connection-calls" style={linkStyle}>Connection
          Call</Link>. We're happy to continue diversifying our web and/or introduce you to our
          friends across the field. We're part of a developmental collaborative culture
          "scenius" spanning the globe — and this is our little part, our collection of
          friends, which cultivates this culture and supports all its members.
        </p>

        {divider}

        <h2 style={sectionHeading}>What's inside the web?</h2>

        {inside.map(item => (
          <div key={item.title} style={{ marginBottom: '2rem' }}>
            <h3 style={subHeading}>{item.title}</h3>
            <p style={{ ...bodyP, margin: 0 }}>{item.body}</p>
          </div>
        ))}

        {divider}

        <h2 style={sectionHeading}>Requirements</h2>

        <p style={bodyP}>
          Membership is lightweight and non-exclusive — we encourage you to belong to other
          webs of mutual support both physically and virtually. But it does consist of
          intentionality: to grow your own perspective, to be in service to something greater
          than yourself, and to be in relationship with others (not everyone!) as catalyst to
          both inner and outer development.
        </p>

        <p style={{ ...bodyP, marginBottom: '2rem' }}>
          Minimum activity expectations consist of a couple hours per quarter: roughly imagine
          a 90 minute Convening, 20 minutes clicking/updating, maybe 10 minutes writing. That
          satisfies the light touch seasonal rhythm for our full-system awareness. In smaller
          scopes, our congregations, programs, and crews have more frequent rhythms that fit a
          variety of depths.
        </p>

        <div style={{ textAlign: 'right' }}>
          <Link to="/dojo" style={{
            fontFamily: sans, fontSize: '16px', fontWeight: 500, color: ACCENT_DARK, textDecoration: 'none',
            borderBottom: '1px solid rgba(26,66,50,0.3)',
          }}>Next page: Dojo →</Link>
        </div>

      </article>
    </main>

    <Footer2026 />
  </div>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    title="Join the IS Web — Intentional Society"
    description="The relational web of trust and collaboration around Intentional Society: what's inside it, and what membership asks of you."
  />
);
