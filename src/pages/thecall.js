import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT_DARK, INK, BODY_TEXT, PAPER, headerKicker,
  Grain2026, Nav2026, Footer2026, Head2026, PhotoCredit,
} from '../components/design2026/chrome';

// 2026 redesign of "The Call" — the founding letter, December 2020. Split
// back out from /news into its own page (matching funding-announcement-
// 20260315.js) so the existing #the-call inbound links keep working, via
// the shared 2026 chrome (components/design2026/).

const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 active="/news" />

    {/* ======== Header band ======== */}
    <header className="credit-host" style={{
      position: 'relative', marginTop: '77px', minHeight: '340px', display: 'flex',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden',
      background: 'url(/design2026/willow.jpg) center 35%/cover, #1c2730',
    }}>
      <PhotoCredit name="Bill" />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(14,18,22,0.6) 0%, rgba(14,18,22,0.5) 50%, rgba(14,18,22,0.66) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', padding: '3.5rem 2rem' }}>
        <div style={headerKicker}>News · December 2020</div>
        <h1 style={{
          fontFamily: serif, fontWeight: 500, lineHeight: 1.25, fontSize: 'clamp(1.8rem,3.4vw,2.6rem)',
          color: '#FAF8F3', textShadow: '0 2px 24px rgba(8,12,16,0.8)', margin: 0,
        }}>The Call</h1>
      </div>
    </header>

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <p style={bodyP}>
          Hi there. I'm James of December 2020, and this is my story of how we could grow
          bigger than our problems. Which problems? Well, I see three types: societal,
          relational, and personal.
        </p>
        <p style={bodyP}>
          Societal: our crumbling political norms and abysmal epidemic response have shown
          how little capability we have for large-scale coordination or sensemaking. We are
          gripped in culture war power struggle, with existential threats looming — inequity,
          authoritarianism, climate change, and the relentless progress of AI, nano-, bio-, and
          other technological power becoming more widely accessible.
        </p>
        <p style={bodyP}>
          Relational: our connections to physical tribes are gone or gutted. Church and
          traditional community connections are waning. We have fewer deep friendships,
          scattered more widely, strained by an age of algorithmically intermediated digital
          (dis-)connection and physical isolation. We crave belonging, connection, safety, and
          love.
        </p>
        <p style={bodyP}>
          Personal: we spend our lives in pursuit of happiness and find it elusive. Traumas
          large and small haunt us as we navigate adulting in a complex, rapidly changing
          world. The scripts of prior generations don't work for newer ones. We strive to fit
          in, to find ourselves, and to find meaning — then it's all overwhelming, so we cope
          by bingewatching shows while doomscrolling on our phones.
        </p>
        <p style={bodyP}>
          This whole complex system of you, I, we, and society must adapt by developing the
          capacity to survive and thrive at every level. None of us can beat the system alone,
          and there is no conventional solution. So what of a solution? More capable doing
          flows from being who we want to be, which starts with awareness and intention.
          Awareness is the means to pay attention to what's really happening — it breaks
          through the frames limiting our perspective. Intention is the will to cause something
          to change — it unlocks fluid, non-coercive motion through the paradox of accepting
          the world as it is alongside our desire to steer its future path.
        </p>
        <p style={bodyP}>
          Together they bring us the capacity to become our biggest selves and the capability
          to move through increasing complexity. This happens within our own selves, takes
          root in our relationships, and can then flow outward to grow a new system that can
          succeed the old one — personally, relationally, and societally.
        </p>
        <p style={bodyP}>
          Does this resonate with you? I was looking for allies: explorers and pioneers of
          co-creation, seeking to develop a kernel of inter-subjective practices supporting our
          growth in awareness and intentionality — particularly (but not exclusively) in
          mindfulness practices, human connection practices, adult development theory,
          cultural/societal evolution, and the future of work. We can find the way only by
          walking the path together.
        </p>
        <p style={bodyP}>
          Written by James, December 2020. Preserved here as a historical artifact of
          Intentional Society — the call that started it all.
        </p>

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(42,42,36,0.08)' }}>
          <Link to="/news" style={{
            fontFamily: sans, fontSize: '16px', fontWeight: 500, color: ACCENT_DARK, textDecoration: 'none',
            borderBottom: '1px solid rgba(26,66,50,0.3)',
          }}>← Back to News</Link>
        </div>

      </article>
    </main>

    <Footer2026 />
  </div>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    title="The Call — Intentional Society"
    description="The letter that started Intentional Society, December 2020."
  />
);
