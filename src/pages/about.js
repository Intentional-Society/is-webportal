import React from 'react';
import { Link } from 'gatsby';
import {
  bodyP, bodyUl, bodyLi, sectionHeading, linkStyle,
  Head2026, HeaderBand, PhotoCredit, Page2026, Article2026, Divider,
} from '../components/design2026/chrome';
import { StaticImage } from 'gatsby-plugin-image';

// 2026 redesign of the About page, ported from the "About v2" Claude Design
// mockup. Band photo from src/images/bands/, inline figures from
// src/images/photos/ — both through the image pipeline, neither from static/.

// This page's own words, read by both the header band and the document head.
// The head shortens the title to a tab label and carries its own sentence,
// since the band's description is a fragment that only reads under the title.
const PAGE = {
  title: 'About Intentional Society',
  description: 'and our journey of unfolding into what we are today',
  metaTitle: 'About',
  metaDescription: 'Who we are, what we do, and how membership works at Intentional Society.',
};

// About's sections run a step larger than the shared heading — it's the
// flagship page, and its band title is `large` for the same reason.
const aboutHeading = { ...sectionHeading, fontSize: 'clamp(1.7rem,3vw,2.3rem)' };

const NamedDefault = () => (
  <Page2026 active="/about">

    {/* ======== Header band ======== */}
    <HeaderBand
      image="crescent-butterflyweed.jpg" credit="Bill Claff"
      width="820px"
      titleSize="large"
      title={PAGE.title}
      description={PAGE.description}
    />

    {/* ======== Article body ======== */}
    <Article2026>

      <h2 style={aboutHeading}>Why we're here</h2>
      <p style={bodyP}>
        Why? The complexity of the evolving world calls us to be wise enough to handle our
        power. As humans and humanity, our technological evolution is racing our cultural
        evolution, and the impact of our power-held-foolishly is growing large enough to
        threaten the whole infinite game. The world is changing fast and continues to
        accelerate, creating a huge amount of unintentional suffering and impact already. We
        seek a future where we and our descendants can both survive and thrive, which requires
        the capacity to hold the complexity and wisely choose paths of goodness and love.
      </p>

      <h2 style={aboutHeading}>About the name</h2>
      <p style={bodyP}>
        The name "Intentional Society" is a pointer. It's a finger pointing to the moon,
        pointing to a future of human flourishing. To be intentional is to see clearly, move
        freely, and choose wisely. IS (we say the letters aloud, like "eye ess") is thus an
        idea, a set of people who share a story, and an ecosystem of groups and activities. We
        are both "the society for intentionality" and "those intentionally evolving society"
        — the inner and outer dimensions of unfolding into more beautiful futures.
      </p>

      <Divider />
      <h2 style={aboutHeading}>About how</h2>

      <h2 style={aboutHeading}>The three mental moves of growth</h2>
      <p style={bodyP}>Our big claim: We know how to grow.</p>
      <ul style={bodyUl}>
        <li style={bodyLi}><strong>Awareness (noun) / Noticing (verb)</strong></li>
        <li style={bodyLi}><strong>Acceptance (noun) / Welcoming (verb)</strong></li>
        <li style={bodyLi}><strong>Integrity (noun) / Cohering (verb)</strong></li>
      </ul>
      <p style={bodyP}>
        We start with inner development (aka Adult Development), and have realized a "three
        moves" mantra for the mechanics of personal growth. First, we become aware of the shape
        of something we were formerly lost inside of. Then, we accept the truth of what already
        is, and welcome it to be as it already is, freeing us to choose how we relate to it.
        Finally, we are free to choose how we show up in the world as our best and biggest self.
      </p>

      <h2 style={aboutHeading}>Three scopes and strategies for flourishing</h2>
      <ul style={bodyUl}>
        <li style={bodyLi}><strong>I — Inner development</strong></li>
        <li style={bodyLi}><strong>We — Relational culture</strong></li>
        <li style={bodyLi}><strong>World — Wise action</strong></li>
      </ul>
      <p style={bodyP}>
        Zooming out, we see three scopes in which we are growing: an "I, We, World" fractal
        that starts inside ourselves, spreads between us, and out into contact with systems and
        the world at large. These are co-equal and interdependent components of flourishing.
        Relational culture is our primary "theory of change", the catalyst for both inner and
        outer work. Yet inner development is our primary equipping focus, as everything we do
        flows from who and how we are. And action in the world is where we connect with meaning
        and purpose, as well as where we are called into new challenges and further growth.
      </p>

      <figure className="credit-host" style={{ margin: '0 0 2.5rem', position: 'relative' }}>
        <PhotoCredit name="Bill Claff" variant="corner" />
        <StaticImage src="../images/photos/sand-dunes.jpg" alt="Beach grass planted in rows across open dunes behind a weathered sand fence"
          layout="constrained" width={820} aspectRatio={1.7778} placeholder="blurred" formats={['auto', 'webp', 'avif']}
          style={{ width: '100%', borderRadius: '5px 3px 6px 4px', display: 'block' }} />
      </figure>


      <h2 style={aboutHeading}>About the spaces</h2>
      <p style={bodyP}>
        Intentional Society is an ecosystem of capacity-building spaces, not a single place,
        practice, or people. These spaces range from public to friends to by-application, and
        all of them are free of charge to participate.
      </p>
      <p style={bodyP}>
        If you're interested in training through developmental-relational practices, we
        recommend <Link to="/dojo" style={linkStyle}>Relational Dojo</Link>, an open learning
        space with multiple practice groups.
      </p>
      <p style={bodyP}>
        The path to entry is through our open <Link to="/get-involved#connection-calls" style={linkStyle}>Connection
        Calls</Link>, and/or existing relationships.
      </p>
      <p style={bodyP}>
        As of 2026, you can be a member of the <Link to="/web" style={linkStyle}>IS Web
        network</Link> to be intentionally connected and affiliated with the IS ecosystem —
        there's an app for that, and we gather the web together once per season.
      </p>

      <p style={bodyP}>
        Within the Web, you have access to our <Link to="/programs" style={linkStyle}>Relational
        Programs</Link> and <Link to="/community" style={linkStyle}>Community Calls</Link>, a
        neighborhood of kind adventurers engaging in practices and projects across an ecosystem
        of activity.
      </p>

      <p style={bodyP}>
        Intentional Ventures is a high-trust system of relational and financial support for livelihood
        generation and economic interweaving.
      </p>

      <h2 style={aboutHeading}>About the people</h2>
      <p style={bodyP}>
        We are a globally distributed constellation of friends with a penchant for connecting
        predominantly through face-to-face video calls. We generally identify as
        "post-conventional" in a developmental or perspectival sense, not feeling strong
        identification with conventional cultural tribes such as political parties or
        traditional religious groups. We relish our diversity across gender, generation, nation,
        ethnicity, religious (or non-) background, socioeconomic status, and other perspectives.
      </p>

      <h2 style={aboutHeading}>About the vibe</h2>
      <p style={bodyP}>
        The cornerstone of our culture is first and foremost that we are each
        on a path of growing and becoming, and that we value that for ourselves and each other.
        It also takes an attitude of openness, humility, and of respect toward every human and
        the things that we can learn from interacting with them. We don't teach each other as
        instructors or lecturers, but rather reflect our experience of being with each other.
        When reflected in an honest and compassionate way, we are able to self-teach with
        relationally-expanded perspective and insight. We generally have a fairly high degree
        of tolerance for nebulosity and uncertainty, and we're making up structures that serve
        us as we go. We love building and "builders", yet we resonate most with a
        "post-achiever" kind of ambition that isn't saving the world as a way to save themselves.
      </p>
      <p style={bodyP}>
        Having read that, if you're feeling any <a href="https://en.wikipedia.org/wiki/Impostor_syndrome" target="_blank" rel="noopener noreferrer" style={linkStyle}>imposter syndrome</a> or
        are worried about whether you're "enough"… please notice that fear, and know that we
        hope you can move past it! We care about where we're going, not what you've already
        achieved.
      </p>

      <h2 style={aboutHeading}>About time(s)</h2>
      <p style={bodyP}>
        "IS Time" for globally-targeted events is 1pm Pacific, which is 8pm or 9pm UTC
        depending on DST. This serves our primary time zones in the Americas, and secondarily
        includes Europe and Africa slightly more than AU+NZ. Small groups can of course meet
        whenever they prefer.
      </p>

      <figure className="credit-host" style={{ margin: '2.5rem 0 0', position: 'relative' }}>
        <PhotoCredit name="Bill Claff" variant="corner" />
        <StaticImage src="../images/photos/bee-spirea.jpg" alt="A honeybee approaching a cluster of spirea blossoms"
          layout="constrained" width={820} aspectRatio={1.7778} placeholder="blurred" formats={['auto', 'webp', 'avif']}
          style={{ width: '100%', borderRadius: '6px 3px 7px 4px', display: 'block' }} />
      </figure>

      <Divider />

      {/* Deliberately developmental details for geeks */}
      <h2 style={{ ...aboutHeading, fontSize: 'clamp(1.4rem,2.4vw,1.8rem)', fontStyle: 'italic' }}>
        Deliberately developmental details for geeks
      </h2>
      <p style={bodyP}>
        To use more precise but technical language, what we're doing together is <strong>authoring
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
        A lot of theory and thought has gone into what we do together. But it's also what people
        everywhere have known and done for millennia, in villages, tribes, and crews of belonging
        and support. There is wisdom in both science and woo, in the latest discoveries and in
        ancient traditions. We thrive as social, relational beings, growing in small groups of
        high trust — and even as we're faced with global challenges that demand coordination
        across humanity to meet, we think that any future of global unity must emerge fractally
        outward from interpersonal trust and cooperation at local scale.
      </p>
    </Article2026>
  </Page2026>
);

export default NamedDefault;

export const Head = ({ location }) => (
  <Head2026 {...PAGE} pathname={location.pathname} />
);
