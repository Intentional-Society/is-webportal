import React from 'react';
import { Link } from 'gatsby';
import {
  sans, INK, bodyP, bodyUl, bodyLi, sectionHeading, linkStyle,
  Head2026, HeaderBand, Page2026, Article2026, Divider,
} from '../components/design2026/chrome';

// The IS Web page — the relational web, its programs, and what membership
// asks. Self-links stay internal <Link>s, not intentionalsociety.org URLs.

// This page's own words, read by both the header band and the document head.
// The tab keeps the plain "The IS Web" label people actually search for,
// while the band's title carries the fuller descriptive phrase.
const PAGE = {
  title: 'A distributed village, held by trust',
  metaTitle: 'The IS Web',
  metaDescription: "The relational web of trust and collaboration around Intentional Society: what's inside it, and what membership asks of you.",
};

const subHeading = {
  fontFamily: sans, fontWeight: 500, fontSize: '1.5rem',
  color: INK, margin: '0 0 0.7rem',
};

// These three items each run to a couple of lines, so they want more air
// between them than a one-line bullet does.
const wideLi = { ...bodyLi, marginBottom: '0.6rem' };

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
  <Page2026 active="/web">

    {/* ======== Header band ======== */}
    <HeaderBand
      image="crystals-header.jpg" focus="center 45%" credit="Bill Claff"
      title={PAGE.title}
    />

    {/* ======== Article body ======== */}
    <Article2026>

      <p style={bodyP}>
        This is the network of humans associated with Intentional Society — a distributed
        village, spanning an ecosystem of people and care. What brings this network
        together? This web is aligned around the intersection of inner development, wise
        action, and human connection.
      </p>

      <ul style={bodyUl}>
        <li style={wideLi}>
          <strong style={{ fontWeight: 500 }}>Inner development:</strong> We are those who practice
          awareness, acceptance, and integrity in growing toward being who we want to be.
        </li>
        <li style={wideLi}>
          <strong style={{ fontWeight: 500 }}>Wise action:</strong> We are those whose lives form a
          living vow in service of what is good, true, and beautiful, integrated from
          personal to planetary.
        </li>
        <li style={wideLi}>
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

      <Divider />

      <h2 style={sectionHeading}>What's inside the web?</h2>

      {inside.map(item => (
        <div key={item.title} style={{ marginBottom: '2rem' }}>
          <h3 style={subHeading}>{item.title}</h3>
          <p style={{ ...bodyP, margin: 0 }}>{item.body}</p>
        </div>
      ))}

      <Divider />

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

    </Article2026>
  </Page2026>
);

export default NamedDefault;

export const Head = ({ location }) => (
  <Head2026 {...PAGE} pathname={location.pathname} />
);
