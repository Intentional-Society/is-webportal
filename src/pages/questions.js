import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT_DARK, INK, BODY_TEXT, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026,
} from '../components/design2026/chrome';

// 2026 redesign of the FAQ page — self-contained page ported from the
// Claude Design mockup, using the shared 2026 chrome (components/design2026/).
// The Q&A copy is the condensed edit from the design pass.

const linkStyle = { color: ACCENT_DARK };

const groups = [
  {
    label: 'Curious newcomer',
    qas: [
      {
        q: 'What would you say that you actually do here?',
        a: `Mostly we get on video calls with each other, face-to-face, and spend very little time writing at each other. We make friends, support each other, and weave bits of our hearts and lives together. A lot of it is "inner work," in contrast to a conventional culture so focused on external accomplishments.`,
      },
      {
        q: "I'm unsure, nervous, or introverted — is this relational stuff a fit for me?",
        a: <>Only you really know. Try one <Link to="/get-involved#connection-calls" style={linkStyle}>Connection Call</Link> and see how it feels. Some of us are highly adept in relational attunement, others come to improve their interpersonal skills — really we're all relating all the time already, to ourselves, others, and the world around us.</>,
      },
      {
        q: "Will I offend anyone if I join, don't like it, and then leave?",
        a: `On the contrary, we'll count that as a success — you learned something and navigated tension. We celebrate arrivals, departures, and boundary-setting with equanimity.`,
      },
    ],
  },
  {
    label: 'Practical logistics',
    qas: [
      {
        q: 'Is there one best way to get started?',
        a: <>A <Link to="/get-involved#connection-calls" style={linkStyle}>Connection Call</Link>. From there we can point you to anything we know about inside and outside the IS web.</>,
      },
      {
        q: "My life is pretty busy already — what if I can't keep up?",
        a: `Only a problem if it feels like one to you. Be clear with yourself and others about your capacity and energy as it changes; we support people doing as they feel called.`,
      },
      {
        q: 'Do I need any tech savvy to fit in here?',
        a: `Managing your mute button is the most crucial tech skill of the 2020s. Besides Zoom and email, we require very little.`,
      },
      {
        q: 'What time zones does IS cater to?',
        a: 'Traditional "IS Time" is 4pm Eastern, reachable by early-bird Aussies & Kiwis and night-owl Africans and Europeans. Small-group activities can happen at any convenient time.',
      },
      {
        q: 'Is IS virtual only? Any physical meetups?',
        a: 'Yes, a distributed virtual village — our biggest meetup to date was 8 people. We know people in a remarkable number of cities and are interested in facilitating local connections as they arise.',
      },
      {
        q: 'How many people are in IS?',
        a: 'Total active membership is under 100; synchronous spaces fit a few dozen each, and most conversation happens in crew-sized breakouts of 3–6.',
      },
      {
        q: 'Does membership cost any money?',
        a: `No, membership is free. We never want a financial barrier in front of participation in our relational web. Our norm is mostly gift culture.`,
      },
      {
        q: 'Who pays the bills, then?',
        a: 'IS has a sustainable funding commitment through 2035 from a small family foundation, which we use to operate lean internal infrastructure and support other field-builders.',
      },
      {
        q: 'Is this therapy, or a substitute for it?',
        a: `No. No one in IS is your therapist. If you're experiencing something that needs professional care, we encourage you to seek it — every individual holds ultimate responsibility for their own safety and needs.`,
      },
      {
        q: 'Does IS promote any religion or spirituality?',
        a: 'No. IS maintains neutrality on whether "woo" exists in-the-world or in-the-observer, and holds space for both mystic and materialist lenses.',
      },
    ],
  },
  {
    label: 'Governance & structure',
    qas: [
      {
        q: 'Who founded this?',
        a: <>James — who wrote <Link to="/thecall" style={linkStyle}>"the call"</Link> that started Intentional Society after a developmental crisis following a conventionally successful early career.</>,
      },
      {
        q: 'Who holds the power? What happens in conflict?',
        a: `We strive for natural, contextual, fluid power dynamics rather than rigid hierarchy or "everyone has equal power" egalitarianism. James, as founder, still holds significant source-keeper influence and the legal "keys" (domains, assets, LLC), with a stated aim to keep distributing leadership.`,
      },
      {
        q: "Can I trust power won't be hoarded or abused down the road?",
        a: `No system replaces the need for virtue in humans. We draw on Sociocratic decision-making, Teal/Deliberately Developmental culture, Metasystematic mindset, and Agile feedback loops to help us evolve responsibly.`,
      },
      {
        q: 'What is the legal structure behind IS?',
        a: 'An unincorporated association for about five years; an LLC was created in late 2025 to administer contractor agreements as the Workteam formed.',
      },
      {
        q: 'Is this yet another playground for privileged people?',
        a: `We have a fairly broad range of socioeconomic experience among members, though having the time and slack to dedicate to this kind of work isn't available to everyone.`,
      },
    ],
  },
  {
    label: 'Vision & philosophy',
    qas: [
      {
        q: 'What makes IS unique?',
        a: `Integrating adult development with relational practices plus cultural evolution is a useful tuning fork — but also, "we're just these particular people."`,
      },
      {
        q: "Are y'all utopians who think you'll save the world?",
        a: `"Saving the world" is explicitly a non-goal. We long for a wiser, weller world and want to play our part — while staying connected to our bodies, families, and daily lives rather than chasing a savior complex.`,
      },
      {
        q: 'What does success look like?',
        a: 'Personal transformation rippling into high-trust communities, a network of cooperating virtual communities, member-owned co-ops, and rising developmental norms globally — but everything has to be worth it for its own sake along the way.',
      },
      {
        q: 'What does failure look like?',
        a: 'Turning away from connection out of discomfort, collapsing into despair, fooling ourselves collectively, or staying small out of fear — each a failure to stay in contact with reality and wield our power wisely.',
      },
    ],
  },
];

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 />

    {/* ======== Header band ======== */}
    <header style={{
      position: 'relative', marginTop: '77px', minHeight: '300px', display: 'flex',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden',
      background: 'url(/design2026/rockfield.jpg) center 65%/cover, #1c2730',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(14,18,22,0.62) 0%, rgba(14,18,22,0.55) 50%, rgba(14,18,22,0.68) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', padding: '4rem 2rem' }}>
        <div style={{
          fontFamily: sans, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
          fontWeight: 500, color: '#E8DFD0', opacity: 0.9, marginBottom: '1.2rem',
        }}>FAQ</div>
        <h1 style={{
          fontFamily: serif, fontWeight: 400, lineHeight: 1.25, fontSize: 'clamp(2rem,4vw,3rem)',
          color: '#FAF8F3', textShadow: '0 2px 24px rgba(8,12,16,0.8)', margin: 0,
        }}>
          Common questions
        </h1>
      </div>
    </header>

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        {groups.map(group => (
          <div key={group.label} style={{ marginBottom: '3rem' }}>
            <div style={{
              fontFamily: sans, fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase',
              fontWeight: 500, color: '#7A9E8A', marginBottom: '1.4rem',
            }}>{group.label}</div>
            {group.qas.map(qa => (
              <div key={qa.q} style={{ marginBottom: '1.8rem' }}>
                <h4 style={{ fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: '1.15rem', color: '#5C4A3A', margin: '0 0 0.5rem' }}>
                  {qa.q}
                </h4>
                <p style={{ fontSize: '15px', color: BODY_TEXT, margin: 0, lineHeight: 1.7 }}>{qa.a}</p>
              </div>
            ))}
          </div>
        ))}

        <div style={{ textAlign: 'right', marginTop: '2rem' }}>
          <Link to="/news" style={{
            fontFamily: sans, fontSize: '13px', color: ACCENT_DARK, textDecoration: 'none',
            borderBottom: '1px solid rgba(26,66,50,0.3)',
          }}>Next page: News →</Link>
        </div>

      </article>
    </main>

    <Footer2026 />
  </div>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    title="FAQ — Intentional Society"
    description="Common questions about Intentional Society — what we do, logistics, governance, and vision."
  />
);
