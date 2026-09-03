import React from 'react';
import { Link } from 'gatsby';
import {
  MUTED, bodyP, sectionHeading, linkStyle,
  Head2026, HeaderBand, PhotoCredit, Page2026, Article2026, Divider,
} from '../components/design2026/chrome';
import { StaticImage } from 'gatsby-plugin-image';

// 2026 redesign of the About page — self-contained page ported from the
// "About v2" Claude Design mockup: no <Layout>/MUI theme, shared 2026
// chrome from components/design2026/chrome.js, images in static/design2026/.

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
      image="crescent-butterflyweed.jpg" credit="Bill"
      width="820px"
      titleSize="large"
      title={PAGE.title}
      description={PAGE.description}
    />

    {/* ======== Article body ======== */}
    <Article2026>

      {/* Who we are */}
      <h2 style={aboutHeading}>Who we are</h2>
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

      <Divider />

      <figure className="credit-host" style={{ margin: '0 0 2.5rem', position: 'relative' }}>
        <PhotoCredit name="Bill" />
        <StaticImage src="../images/photos/sand-dunes.jpg" alt="Beach grass planted in rows across open dunes behind a weathered sand fence"
          layout="constrained" width={820} aspectRatio={1.7778} placeholder="blurred" formats={['auto', 'webp', 'avif']}
          style={{ width: '100%', borderRadius: '5px 3px 6px 4px', display: 'block' }} />
      </figure>

      {/* Regarding membership */}
      <h2 style={aboutHeading}>Regarding membership</h2>
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

      <Divider />

      {/* What we do */}
      <h2 style={aboutHeading}>What we do</h2>
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

      <figure className="credit-host" style={{ margin: '2.5rem 0 0', position: 'relative' }}>
        <PhotoCredit name="Bill" />
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
    </Article2026>
  </Page2026>
);

export default NamedDefault;

export const Head = () => (
  <Head2026 {...PAGE} />
);
