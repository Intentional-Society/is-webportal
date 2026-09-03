import React from 'react';
import { Link, navigate } from 'gatsby';
import {
  serif, sans, ACCENT, INK, MUTED, BODY_TEXT, HEADING, NAV_OFFSET,
  bodyP as baseBodyP, sectionHeading, linkStyle,
  Head2026, HeaderBand, Page2026, Article2026, Divider,
} from '../components/design2026/chrome';

// 2026 redesign of the Resources page — merges the old standalone FAQ page
// (src/pages/questions.js, now retired — see netlify.toml redirect) into this
// one, and drops the Media Appearances list (moved to /news). Both the
// practices list and the FAQ render as collapsed <details> for compactness;
// each practice keeps its original anchor id so old newsletter links
// (resources#empathy-circling etc.) keep working — browsers auto-open a
// closed <details> when navigating to a fragment inside it.

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Practices we use, and answers to common questions',
  metaTitle: 'Resources',
  metaDescription: 'Relational practices we use, and answers to common questions about Intentional Society.',
};

// Deep-link targets have to clear the fixed nav — old newsletter links point
// at individual practice ids. Derived from NAV_OFFSET rather than hand-tuned.
const anchorTarget = { scrollMarginTop: `calc(${NAV_OFFSET} + 1.5rem)` };

// Body copy inside a collapsed <details> sits tighter than an article
// paragraph: the links line follows it immediately, and the disclosure's own
// padding supplies the rest of the gap.
const bodyP = { ...baseBodyP, margin: '0 0 0.6rem' };
const linksLine = { fontSize: '16px', fontWeight: 500, color: MUTED, margin: 0, lineHeight: 1.7 };

const practiceSummary = { fontFamily: serif, fontWeight: 500, fontSize: '1.4rem', color: INK };
const faqSummary = { fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: '1.4rem', color: HEADING };

const practices = [
  {
    id: 'empathy-circling',
    title: 'Empathy Circling',
    body: <>
      <p style={bodyP}>This practice is, very simply, listening to someone and reflecting back their
        thoughts. The sweet spot is a balance of maintaining accuracy and fidelity to their original
        expression while also using one's own representations (rather than parroting back word-for-word).</p>
      <p style={linksLine}>
        <a href="http://www.empathycircle.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Website</a> · <a href="http://bit.ly/EmpathyCirclePDFv2" target="_blank" rel="noopener noreferrer" style={linkStyle}>How-To</a> · <a href="https://buttondown.email/intentionalsociety/archive/intentional-society-reflecting-and-empathy/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Our experience report</a>
      </p>
    </>,
  },
  {
    id: 'authentic-relating',
    title: 'Authentic Relating',
    body: <>
      <p style={bodyP}>This is a large collection of games/practices, best represented by the manual
        assembled by Sara Ness. We've used the Noticing game, Hotseat, and others as building blocks
        of culture and communication.</p>
      <p style={linksLine}>
        <a href="https://www.authrev.org/what-is-authentic-relating" target="_blank" rel="noopener noreferrer" style={linkStyle}>Authentic Revolution's</a> <a href="https://authrev.gumroad.com/l/AR-Games" target="_blank" rel="noopener noreferrer" style={linkStyle}>Games Manual</a> · <a href="https://authenticrelating.co/" target="_blank" rel="noopener noreferrer" style={linkStyle}>ART International's</a> <a href="https://authenticrelating.co/five-practices/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Five Practices of Authentic Relating</a> · <a href="https://buttondown.email/intentionalsociety/archive/intentional-society-i-notice-you-seem/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Our experience report</a>
      </p>
    </>,
  },
  {
    id: 'circling',
    title: 'Circling',
    body: <>
      <p style={bodyP}>Circling is a present-moment practice of noticing our sensations in relationship
        with one another and being curious about another's experience. It has grown rather popular and
        has <a href="https://integralcentered.com/3-schools-circling/" target="_blank" rel="noopener noreferrer" style={linkStyle}>three major schools</a> of
        practice, plus stylistic variations that fix (birthday) or flow (organic) the focus of attention.</p>
      <p style={linksLine}>
        <a href="https://tasshin.com/blog/what-is-circling/" target="_blank" rel="noopener noreferrer" style={linkStyle}>What is Circling?</a> · <a href="https://buttondown.email/intentionalsociety/archive/intentional-society-circling-experience-report/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Our experience report</a>
      </p>
    </>,
  },
  {
    id: 'collective-presencing',
    title: 'Collective Presencing',
    body: <>
      <p style={bodyP}>A circle practice of group sense-making, developed by Ria Baeck. Exploring the
        space of a preselected open question, participants bring their observations "to the center" of
        the circle, where deep listening weaves reflections together in a super-mind-ish phenomenon.</p>
      <p style={linksLine}>
        <a href="https://www.collectivepresencing.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Website (with full book)</a> · <a href="https://buttondown.email/intentionalsociety/archive/intentional-society-unfolding-the-collective/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Our experience report</a>
      </p>
    </>,
  },
  {
    id: 'inquiry-spiraling',
    title: 'Inquiry Spiraling',
    body: <>
      <p style={bodyP}>Closely related to Collective Presencing, this practice circles around exploring
        the question space itself, weaving together a simultaneous mix of diverging and converging
        questions while staying in curiosity. Designed as question-finding, it can be paired with
        another question-answering/exploring practice.</p>
      <p style={linksLine}>
        <a href="https://www.intentionalsociety.org/files/Inquiry_Spiraling.pdf" target="_blank" rel="noopener noreferrer" style={linkStyle}>Instructions</a> · <a href="https://buttondown.email/intentionalsociety/archive/intentional-society-staying-in-curiosity-with-inquiry-spiraling/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Our experience report</a>
      </p>
    </>,
  },
  {
    id: 'case-work',
    title: 'Case Work',
    body: <>
      <p style={bodyP}>By case work, we mean the examination of developmental challenges that are
        working us. A case giver shares the story of their situation, and is supported by a small group
        in taking perspective on that thing and their relationship to it. The word "case" comes from
        Presencing Institute's (a.k.a. Theory U) Case Clinic practice, and we have developed our own
        combination practice called Edge Case.</p>
      <p style={linksLine}>
        <a href="https://www.intentionalsociety.org/practices/EdgeCasePractice.pdf" target="_blank" rel="noopener noreferrer" style={linkStyle}>Edge Case Instructions</a> · <a href="https://irp.cdn-website.com/53007095/files/uploaded/pi_tool_caseclinic.pdf" target="_blank" rel="noopener noreferrer" style={linkStyle}>Case Clinic Instructions</a> · <a href="https://buttondown.email/intentionalsociety/archive/intentional-society-new-practice-edge-case/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Our experience report</a>
      </p>
    </>,
  },
  {
    id: 'peer-coaching',
    title: 'Peer Coaching',
    body: <>
      <p style={bodyP}>Taken as a general concept, this practice is "pure" coaching, defined by the
        stance that the coachee already holds in themselves everything that's necessary to resolve
        their own challenge(s). The act of coaching, rather than advising or consulting, is to ask
        questions that merely help direct the coachee's awareness to notice possible blind spots or
        unrealized connections — sparking the click of insight or integration that's waiting there for
        them. This can be done with a question bank of "clean" questions, or we've used a fixed script
        of a question sequence.</p>
      <p style={linksLine}>
        <a href="https://buttondown.email/intentionalsociety/archive/intentional-society-looking-towards-what-we-avoid/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Our experience report</a>
      </p>
    </>,
  },
  {
    id: 't-group',
    title: 'T-group',
    body: <>
      <p style={bodyP}>Adopted via our friends at <a href="https://www.startercultures.us/creative-offerings/communication-dojo" target="_blank" rel="noopener noreferrer" style={linkStyle}>Communication
        Dojo</a>, this is the granddaddy (dating back to the 1950s) practice of expressing one's
        present moment experience in a group setting.</p>
      <p style={linksLine}>
        <a href="https://en.wikipedia.org/wiki/T-groups" target="_blank" rel="noopener noreferrer" style={linkStyle}>Reference</a> · <a href="https://infed.org/kurt-lewin-groups-experiential-learning-and-action-research/#tgroups" target="_blank" rel="noopener noreferrer" style={linkStyle}>Links</a> · <a href="https://buttondown.email/intentionalsociety/archive/intentional-society-t-group-practice/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Our experience report</a>
      </p>
    </>,
  },
  {
    id: 'glass-bead-game',
    title: 'Glass Bead Game',
    body: <>
      <p style={bodyP}>Inspired by <a href="https://en.wikipedia.org/wiki/The_Glass_Bead_Game" target="_blank" rel="noopener noreferrer" style={linkStyle}>a
        novel</a>, this is a (usually) two-player game in which players take turns riffing off a
        concept and each other in a kind of improv philosophy jam.</p>
      <p style={linksLine}>
        <a href="https://buttondown.email/intentionalsociety/archive/intentional-society-improv-philosophy/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Our experience report</a>
      </p>
    </>,
  },
  {
    id: 'agile-retrospectives',
    title: 'Agile Retrospectives',
    body: <>
      <p style={bodyP}>Widespread in agile software development and elsewhere, literally "learning
        from looking back" as a group. This can take many forms, from simple rubrics like "start stop
        continue" or "rose thorn bud" to timeline reconstruction to structural tension analysis. It's a
        fundamental learning move to "go meta" and many books and guides have been written exploring
        the domain.</p>
      <p style={linksLine}>
        <a href="https://pragprog.com/titles/dlret/agile-retrospectives/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Book by Esther Derby and Diana Larsen</a>
      </p>
    </>,
  },
  {
    id: 'ifs',
    title: 'Internal Family Systems (IFS)',
    body: <>
      <p style={bodyP}>Internal Family Systems (commonly abbreviated as IFS) is a (self-)therapeutic
        model that embraces looking at the "parts" of ourselves, listening to them, welcoming them, and
        working with them. Opinions can vary on how neurologically accurate the correspondence is, but
        even as imaginal-oracular exercises, attempting "parts work" can bring us interesting
        perspectives on what motivations are driving our feelings and behaviors.</p>
      <p style={linksLine}>
        <a href="https://ifs-institute.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>IFS Institute</a> · Our <a href="https://buttondown.email/intentionalsociety/archive/intentional-society-parts-introduction/" target="_blank" rel="noopener noreferrer" style={linkStyle}>intro</a> and <a href="https://buttondown.email/intentionalsociety/archive/intentional-society-why-ifs-works/" target="_blank" rel="noopener noreferrer" style={linkStyle}>analysis</a>
      </p>
    </>,
  },
];

const faqGroups = [
  {
    label: 'Curious newcomer',
    qas: [
      {
        q: 'What would you say that you actually do here?',
        a: 'Mostly we get on video calls with each other, face-to-face, and spend very little time writing at each other. We make friends, support each other, and weave bits of our hearts and lives together. A lot of it is "inner work," in contrast to a conventional culture so focused on external accomplishments.',
      },
      {
        q: "I'm unsure, nervous, or introverted — is this relational stuff a fit for me?",
        a: <>Only you really know. Try one <Link to="/get-involved#connection-calls" style={linkStyle}>Connection Call</Link> and see how it feels. Some of us are highly adept in relational attunement, others come to improve their interpersonal skills — really we're all relating all the time already, to ourselves, others, and the world around us.</>,
      },
      {
        q: "Will I offend anyone if I join, don't like it, and then leave?",
        a: 'On the contrary, we\'ll count that as a success — you learned something and navigated tension. We celebrate arrivals, departures, and boundary-setting with equanimity.',
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
        a: 'Only a problem if it feels like one to you. Be clear with yourself and others about your capacity and energy as it changes; we support people doing as they feel called.',
      },
      {
        q: 'Do I need any tech savvy to fit in here?',
        a: 'Managing your mute button is the most crucial tech skill of the 2020s. Besides Zoom and email, we require very little.',
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
        a: 'No, membership is free. We never want a financial barrier in front of participation in our relational web. Our norm is mostly gift culture.',
      },
      {
        q: 'Who pays the bills, then?',
        a: 'IS has a sustainable funding commitment through 2035 from a small family foundation, which we use to operate lean internal infrastructure and support other field-builders.',
      },
      {
        q: 'Is this therapy, or a substitute for it?',
        a: 'No. No one in IS is your therapist. If you\'re experiencing something that needs professional care, we encourage you to seek it — every individual holds ultimate responsibility for their own safety and needs.',
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
        a: 'We strive for natural, contextual, fluid power dynamics rather than rigid hierarchy or "everyone has equal power" egalitarianism. James, as founder, still holds significant source-keeper influence and the legal "keys" (domains, assets, LLC), with a stated aim to keep distributing leadership.',
      },
      {
        q: "Can I trust power won't be hoarded or abused down the road?",
        a: 'No system replaces the need for virtue in humans. We draw on Sociocratic decision-making, Teal/Deliberately Developmental culture, Metasystematic mindset, and Agile feedback loops to help us evolve responsibly.',
      },
      {
        q: 'What is the legal structure behind IS?',
        a: 'An unincorporated association for about five years; an LLC was created in late 2025 to administer contractor agreements as the Workteam formed.',
      },
      {
        q: 'Is this yet another playground for privileged people?',
        a: 'We have a fairly broad range of socioeconomic experience among members, though having the time and slack to dedicate to this kind of work isn\'t available to everyone.',
      },
    ],
  },
  {
    label: 'Vision & philosophy',
    qas: [
      {
        q: 'What makes IS unique?',
        a: 'Integrating adult development with relational practices plus cultural evolution is a useful tuning fork — but also, "we\'re just these particular people."',
      },
      {
        q: "Are y'all utopians who think you'll save the world?",
        a: '"Saving the world" is explicitly a non-goal. We long for a wiser, weller world and want to play our part — while staying connected to our bodies, families, and daily lives rather than chasing a savior complex.',
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

const NamedDefault = () => {
  // Media Appearances moved to /news — send anyone with the old #media
  // bookmark there instead of leaving them stranded at the top of this page.
  React.useEffect(() => {
    if (window.location.hash === '#media') navigate('/news');
  }, []);

  return (
    <Page2026 active="/resources">

      <style>{`
        .rsc-item summary { list-style: none; cursor: pointer; display: flex; align-items: baseline; gap: 0.6rem; }
        .rsc-item summary::-webkit-details-marker { display: none; }
        .rsc-item summary::before { content: '›'; display: inline-block; color: ${ACCENT}; font-size: 1.1em; line-height: 1.4; transition: transform 0.15s; flex-shrink: 0; }
        .rsc-item[open] summary::before { transform: rotate(90deg); }
        .rsc-item { border-bottom: 1px solid rgba(42,42,36,0.08); padding: 0.9rem 0; scroll-margin-top: calc(${NAV_OFFSET} + 1.5rem); }
      `}</style>

      {/* ======== Header band ======== */}
      <HeaderBand
        image="rockfield.jpg" focus="center 65%" credit="Bill"
        title={PAGE.title}
      />

      {/* ======== Article body ======== */}
      <Article2026>

        <h2 id="relational-practices" style={{ ...sectionHeading, ...anchorTarget }}>Relational Practices List</h2>
        <p style={{ ...bodyP, marginBottom: '0.5rem' }}>We have tried and enjoyed the following practices:</p>
        {practices.map(p => (
          <details key={p.id} id={p.id} className="rsc-item">
            <summary style={practiceSummary}>{p.title}</summary>
            <div style={{ marginTop: '0.7rem', paddingLeft: '1.5rem' }}>{p.body}</div>
          </details>
        ))}

        <Divider />

        <h2 id="faq" style={{ ...sectionHeading, ...anchorTarget }}>FAQ</h2>
        {faqGroups.map(group => (
          <div key={group.label} style={{ marginBottom: '1.6rem' }}>
            <div style={{
              fontFamily: sans, fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase',
              fontWeight: 600, color: '#5C8770', margin: '0 0 0.4rem',
            }}>{group.label}</div>
            {group.qas.map(qa => (
              <details key={qa.q} className="rsc-item">
                <summary style={faqSummary}>{qa.q}</summary>
                <p style={{ fontSize: '19px', fontWeight: 500, color: BODY_TEXT, margin: '0.7rem 0 0 1.5rem', lineHeight: 1.7 }}>{qa.a}</p>
              </details>
            ))}
          </div>
        ))}

      </Article2026>
    </Page2026>
  );
};

export default NamedDefault;

export const Head = ({ location }) => (
  <Head2026 {...PAGE} pathname={location.pathname} />
);
