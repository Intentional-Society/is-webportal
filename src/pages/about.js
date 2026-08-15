import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT_DARK, INK, MUTED, BODY_TEXT, PAPER, headerKicker,
  Grain2026, Nav2026, Footer2026, Head2026,
} from '../components/design2026/chrome';

// 2026 redesign of the About page — self-contained page ported from the
// "About v2" Claude Design mockup: no <Layout>/MUI theme, shared 2026
// chrome from components/design2026/chrome.js, images in static/design2026/.

const linkStyle = { color: ACCENT_DARK };

const sectionHeading = {
  fontFamily: serif, fontWeight: 300, lineHeight: 1.2,
  fontSize: 'clamp(1.7rem,3vw,2.3rem)', color: '#5C4A3A', margin: '0 0 1.4rem',
};

const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

const divider = <hr style={{ border: 'none', borderTop: '1px solid rgba(42,42,36,0.12)', margin: '3rem auto', width: '120px' }} />;

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 active="/about" />

    {/* ======== Header band ======== */}
    <header style={{
      position: 'relative', marginTop: '77px', minHeight: '380px', display: 'flex',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden',
      background: 'url(/design2026/crystals-header.jpg) center/cover, #1c2730',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(14,18,22,0.6) 0%, rgba(14,18,22,0.55) 50%, rgba(14,18,22,0.68) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '820px', padding: '4rem 2rem' }}>
        <div style={headerKicker}>About Intentional Society</div>
        <h1 style={{
          fontFamily: serif, fontWeight: 500, lineHeight: 1.25, fontSize: 'clamp(2.2rem,3.8vw,3.4rem)',
          color: '#FAF8F3', margin: '0 0 1.2rem', textShadow: '0 2px 24px rgba(8,12,16,0.8)',
        }}>
          A society we are creating <em style={{ fontStyle: 'italic' }}>on purpose</em>
        </h1>
        <p style={{
          color: '#FAF8F3', fontSize: '1.3rem', fontWeight: 500, lineHeight: 1.6, margin: '0 auto',
          maxWidth: '600px', textShadow: '0 1px 12px rgba(8,12,16,0.8)',
        }}>
          Intentional Society is a community authoring itself as it goes — a developmental
          culture built week by week since 2020, by the people inside it. Not finished, and
          not meant to be.
        </p>
      </div>
    </header>

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        {/* Who we are */}
        <h2 style={sectionHeading}>Who we are</h2>
        <p style={bodyP}>
          We are a geographically distributed community of seekers and friends, connecting
          face-to-face via video calls. We connect and reflect together in relationship as a
          catalyst to self-development, increased awareness, greater integrity. We relish our
          diversity across gender, generation, nation, ethnicity, religious (or non-) background,
          socioeconomic status, and other perspectives. Some of us bring backgrounds in related
          fields or scenes: adult development psychology, relational practices (e.g. Authentic
          Relating, Circling, Collective Presencing), and the "sensemaking web" (e.g. Game B,
          Integral, Metamodernism). Regardless, all of us are united in one thing above all else:
          seeking to grow.
        </p>
        <p style={bodyP}>
          Our values orient around <em>awareness</em>, <em>acceptance</em>, and <em>integrity</em> as
          big themes. Awareness means consciousness and attention: taking the "balcony view"
          perspective on ourselves and on the people and systems we're interacting with. Acceptance
          means facing reality — being able to be with what is, as it is, without deceiving
          ourselves. From awareness and acceptance flow greater capacity for compassion, empathy,
          and our ability to hold our intentions as objects of reflection, in integrity with our
          layers of body-mind-self, our personal relationships, and our interfaces with the larger
          systems we're a part of.
        </p>
        <p style={{ fontSize: '18px', fontWeight: 500, color: MUTED, margin: '0 0 1.2rem', fontStyle: 'italic' }}>
          Other values we've named are: authenticity, honesty, adventure, perspective-taking,
          reflection, learning, seeking, earnestness, paradox, connection, friendliness, play,
          kindness, curiosity, goodwill, inclusion, drive, balance, desire.
        </p>

        {divider}

        {/* Regarding membership */}
        <h2 style={sectionHeading}>Regarding membership</h2>
        <p style={bodyP}>
          Who and what makes a good "fit" within Intentional Society? The cornerstone of our
          culture is first and foremost a desire to grow. It also takes an attitude of openness,
          humility, and of respect toward every human and the things that we can learn from
          interacting with them. We don't teach each other as instructors or lecturers, but rather
          reflect our experience of being with each other. When reflected in an honest and
          compassionate way, we are able to self-teach with socially-expanded insight.
        </p>
        <p style={bodyP}>
          Many new members thus far have come in with a high degree of emotional self-awareness
          and "cognitive de-fusion," having been on their own developmental journeys for some time
          already. This seems helpful but not essential, and we haven't established a concrete
          minimum age or maturity level for membership yet. If someone is looking for a bandwagon
          to just jump on, this isn't it. Some level of "self-authorship" — defining one's self
          and values independently of the social context in which one grew up — seems necessary to
          get traction on further development. We generally have a fairly high degree of tolerance
          for nebulosity and uncertainty, as we're making up our norms and structures as we go.
        </p>
        <p style={bodyP}>
          Inside the members-only spaces of Intentional Society, you'll find more focus on
          collective development (vs the individual focus of the practice program), on real
          relationship building, mutual support, and doing from the integrity of "post-achiever
          ambition."
        </p>
        <p style={bodyP}>
          If you're feeling any <a href="https://en.wikipedia.org/wiki/Impostor_syndrome" target="_blank" rel="noopener noreferrer" style={linkStyle}>imposter syndrome</a> or
          are worried about whether you're "enough"… please notice that fear, and know that we
          hope you can move past it! You <Link to="/get-involved" style={linkStyle}>get involved</Link> with
          Intentional Society through our practice program and/or informational calls.
        </p>

        {divider}

        {/* What we do */}
        <h2 style={sectionHeading}>What we do</h2>
        <p style={bodyP}>
          On the surface, the simple story is that we talk with one another on video calls. Most
          of these take the form of our publicly-accessible <strong style={{ fontWeight: 500 }}>practice program</strong>. These
          practice sessions are facilitated, structured calls that run 90 minutes (plus any casual
          hangout time afterwards). There is an ordered progression week-to-week, but every week is
          open to newcomers as new practices and skills are introduced each week.
        </p>
        <p style={bodyP}>
          These sessions start at "IS prime time": anchored to US time zones, 1pm Pacific and 4pm
          Eastern, mapping to 8 or 9pm UTC depending on Daylight Savings time shifts, or even
          two-hour shifts (e.g. 6am to 8am) for folks in AU and NZ.
        </p>
        <p style={bodyP}>
          There's a bunch more to Intentional Society beyond the practice program, inside the
          membership membrane. We form crews of various kinds, explore more collective-oriented
          and experimental explorations, practice omni-leadership, and support each other in
          perspective-taking, projects, and more.
        </p>

        {divider}

        {/* Deliberately developmental details for geeks */}
        <h2 style={{ ...sectionHeading, fontSize: 'clamp(1.4rem,2.4vw,1.8rem)', fontStyle: 'italic' }}>
          Deliberately developmental details for geeks
        </h2>
        <p style={bodyP}>
          At the deeper conceptual layer, what we're doing together is <strong style={{ fontWeight: 500 }}>authoring
          a developmental community of practice with a culture of expanded awareness</strong>. There's
          a conventional script for "becoming an adult" that goes something like "finish school,
          get a job, get married and have 2.5 kids, buy a house and then acquire more toys while
          climbing the corporate ladder." This also seems like a recipe for having a mid-life
          crisis of meaning. The conventional script sells us short: we can, and do, keep
          developing throughout our whole lives.
        </p>
        <p style={bodyP}>
          How does one practice development, or build a culture around it? We think a large part
          of the answer comes from <Link to="/resources" style={linkStyle}>relational practices</Link>. A
          recent renaissance in group practices illustrates how powerful the adoption of different
          norms and "rules" of interaction can be. From
          the <a href="https://en.wikipedia.org/wiki/T-groups" target="_blank" rel="noopener noreferrer" style={linkStyle}>T-groups</a> of
          the 1950s, to 21st
          century <a href="https://www.circlingeurope.com/what-is-circling" target="_blank" rel="noopener noreferrer" style={linkStyle}>Circling</a>, to
          the growth of <a href="https://www.authrev.org/what-is-authentic-relating" target="_blank" rel="noopener noreferrer" style={linkStyle}>Authentic
          Relating</a> and <a href="https://www.socialmeditation.guide/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Social
          Meditation</a> in the last decade, this movement has been growing rapidly. People around
          the world are discovering that it's actually fairly easy to bypass the usual "how's the
          weather" social scripts of general society with a bit of intentionality and shared
          agreements that create a space for deeper, more meaningful connection.
        </p>
        <p style={bodyP}>
          To go even deeper into the theoretical model, developmental <a href="https://en.wikipedia.org/wiki/Constructivism_(philosophy_of_education)" target="_blank" rel="noopener noreferrer" style={linkStyle}>constructivism</a> is
          a fancy way to say that we make meaning, inside ourselves, from our experiences. The
          field of <a href="https://en.wikipedia.org/wiki/Positive_adult_development" target="_blank" rel="noopener noreferrer" style={linkStyle}>adult
          development</a> has shown that we can — and do — keep developing throughout our whole
          lives. The stage models
          of <a href="https://en.wikipedia.org/wiki/Robert_Kegan" target="_blank" rel="noopener noreferrer" style={linkStyle}>Robert Kegan</a>, <a href="https://www.gla.global/the-glp/leadership-in-action/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Bill
          Torbert</a>, and <a href="http://www.cook-greuter.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Susanne
          Cook-Greuter</a> provide a coherent perspective on typical (Western-shaded) developmental
          progressions. Off to the collective side of this domain
          is <a href="https://en.wikipedia.org/wiki/Spiral_Dynamics" target="_blank" rel="noopener noreferrer" style={linkStyle}>Spiral Dynamics</a>, in
          a lineage from Graves to Beck and Cowan to Wilber, which helps us to see and make sense
          of the values of various political groups and social tribes in this polarized age.
        </p>
        <p style={bodyP}>
          In the spirit of "chop wood, carry water," the deepest summary of what we do is
          perhaps "<strong style={{ fontWeight: 500 }}>we practice being, together</strong>" — which does
          correspond with "talk with one another on video calls" and is also something quite
          profound. Being and doing are a polarity which, at least in the West, has been culturally
          tilted towards doing since the dominance of modernity. Intentional Society assumes an
          adult level of doing-competence, starts with the inner work of being, and expands into
          the interdependent learning spiral of being-and-doing at multiple levels of scale.
        </p>
        <p style={bodyP}>
          A lot of theory and thought has gone into what we do together. But it's also what people
          everywhere have known and done for millennia, in villages, tribes, and crews of belonging
          and support. There is wisdom in both science and woo, in the latest discoveries and in
          ancient traditions. We thrive as social, relational beings, growing in small groups of
          high trust — and even as we're faced with global challenges that demand coordination
          across humanity to meet, we think that any future of global unity must emerge fractally
          outward from interpersonal trust and cooperation at local scale.
        </p>
      </article>
    </main>

    <Footer2026 />
  </div>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    title="About — Intentional Society"
    description="A society we are creating on purpose — who we are, what we do, and how membership works at Intentional Society."
  />
);
