import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import TornEdge from '../components/torn-edge'
import ButtondownSignup from '../components/buttondownsignup'
import * as styles from '../styles/home2026.module.css'
import * as GlobalCSS from '../styles/global.module.css'

// Four "paths" — the site's existing intention cards, given the prototype's
// photo-card treatment. Titles/descriptions set the visitor's intention;
// the links are the real internal destinations.
const paths = [
  {
    title: 'Grow myself',
    img: 'macro-salvia.jpg',
    alt: 'A blue salvia bud beginning to open',
    desc: 'Inner development — awareness, acceptance, integrity — with companions to grow alongside.',
    links: [
      { text: 'Relational Dojo', href: 'https://relationaldojo.org', external: true },
      { text: 'Developmental Practice Series', to: '/developmental-practice-series' },
    ],
  },
  {
    title: 'Find the others',
    img: 'macro-hibiscus.jpg',
    alt: 'Hibiscus anthers gathered around a stigma',
    desc: 'People who share your values — connection across distance and difference.',
    links: [
      { text: 'Community', to: '/community' },
      { text: 'Relational Web', to: '/web' },
      { text: 'Friends', to: '/friends' },
      { text: 'Connection Call', to: '/get-involved#connection-calls' },
    ],
  },
  {
    title: 'Work with purpose',
    img: 'macro-stamen.jpg',
    alt: 'A frost-covered stamen against deep blue',
    desc: 'Develop a project or venture within a values-aligned community.',
    links: [
      { text: 'Relational Web', to: '/web' },
      { text: 'Intentional Ventures', to: '/iv' },
    ],
  },
  {
    title: 'Just curious',
    img: 'macro-crystal.jpg',
    alt: 'Crystals under polarized light, a kaleidoscope of colour',
    desc: 'Something here caught your attention. That’s enough — look around and see what resonates.',
    links: [
      { text: 'Connection Call', to: '/get-involved#connection-calls' },
      { text: 'Newsletter', href: '#newsletter' },
      { text: 'News', to: '/news' },
    ],
  },
]

const PathLink = ({ link }) =>
  link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
  ) : link.to ? (
    <Link to={link.to}>{link.text}</Link>
  ) : (
    <a href={link.href}>{link.text}</a>
  )

const NamedDefault = () => (
  <Layout fullBleed>
    {/* ======== Hero ======== */}
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <span className={`${GlobalCSS.label} ${styles.heroLabel}`}>
          inner development · wise action · human connection
        </span>
        <h1>What is <em>your</em> intention?</h1>
        <p className={styles.heroSub}>
          Intentional Society is an ecosystem of people and purposes — being who
          we want to be, flowing into action with integrity, catalyzing with
          relational connection.
        </p>
        <Link to="/get-involved" className={styles.heroCta}>Get Involved</Link>
      </div>
    </section>

    <TornEdge variant="a" />

    {/* ======== About ======== */}
    <section className={styles.about}>
      <div className={styles.aboutInner}>
        <span className={`${GlobalCSS.label}`} style={{ color: 'var(--is-teal)', marginBottom: '1rem' }}>
          Who we are
        </span>
        <h2>United in one thing above all else: seeking to grow</h2>
        <div className={styles.aboutLayout}>
          <figure className={styles.aboutPhoto}>
            <img
              src="/images/design2026/waterfall.jpg"
              alt="A small waterfall over dark rock in a quiet forest"
            />
            <figcaption>Photograph by Bill</figcaption>
          </figure>
          <div className={styles.aboutColumns}>
            <div className={styles.aboutCol}>
              <h3>Who we are</h3>
              <p>
                We are a geographically distributed community of seekers and
                friends, connecting face-to-face over video. We reflect together
                in relationship as a catalyst to self-development, greater
                awareness, and integrity — relishing our diversity across
                generation, nation, and background.
              </p>
            </div>
            <div className={styles.aboutCol}>
              <h3>What we do</h3>
              <p>
                On the surface, we talk with one another on video calls — most
                openly through our public practice program of facilitated,
                90-minute sessions. Beyond that, inside the membership, the
                deepest summary is simple: we practice being, together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TornEdge variant="b" />

    {/* ======== Nature / quote break ======== */}
    <section className={styles.natureBreak}>
      <div className={styles.natureBreakInner}>
        <span className={`${GlobalCSS.label} ${styles.natureBreakLabel}`}>A shared orientation</span>
        <p className={styles.natureBreakQuote}>
          We practice being, together — noticing and welcoming what is actually
          present, in ourselves and in each other.
        </p>
      </div>
    </section>

    <TornEdge variant="c" />

    {/* ======== Breath moment ======== */}
    <section className={styles.breath}>
      <div className={styles.breathInner}>
        <p>Pause.<br />Take one conscious breath.</p>
        <div className={styles.breathPrompt}>What brings you here?</div>
      </div>
    </section>

    {/* ======== Four paths ======== */}
    <section className={styles.paths}>
      <div className={styles.pathsInner}>
        <span className={`${GlobalCSS.label} ${styles.pathsLabel}`}>Where to begin</span>
        <div className={styles.pathsGrid}>
          {paths.map(path => (
            <div key={path.title} className={styles.pathCard}>
              <div className={styles.pathCardImg}>
                <img src={`/images/design2026/${path.img}`} alt={path.alt} />
              </div>
              <h3>{path.title}</h3>
              <p>{path.desc}</p>
              <div className={styles.pathLinks}>
                {path.links.map((link, i) => (
                  <PathLink key={i} link={link} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ======== Testimonials ========
         Member voices from the "Listening Into Us" survey.
         TODO: confirm consent to publish these names publicly before this
         goes to production. */}
    <section className={styles.testimonials}>
      <div className={styles.testimonialsInner}>
        <div className={styles.testimonialFeatured}>
          <blockquote>
            This space reminds me that there are other people living
            unconventional lives… it reminds me to not give up on aspiring to
            live fully.
          </blockquote>
          <div className={styles.testimonialAttr}>— fig</div>
        </div>
        <div className={styles.testimonialPair}>
          <div className={styles.testimonialSmall}>
            <blockquote>
              There is often a sense of “relaxation towards experimentation.” It
              is OK to express myself freely… a familiar frame that creates a
              sense of intimacy and openness.
            </blockquote>
            <div className={styles.testimonialAttr}>— Jochen</div>
          </div>
          <div className={styles.testimonialSmall}>
            <blockquote>
              People are joining to be challenged beyond the fabric of the
              regular relationship… experimenting with relating differently and
              growing into a version of myself I want to be.
            </blockquote>
            <div className={styles.testimonialAttr}>— Renee</div>
          </div>
        </div>
      </div>
    </section>

    {/* ======== Newsletter ======== */}
    <a id="newsletter" className={GlobalCSS.anchorOffset}></a>
    <section className={styles.newsletter}>
      <div className={styles.newsletterInner}>
        <h2>Follow along</h2>
        <p>
          Not ready to jump in? Our weekly update shares what we’re learning,
          thinking, and building. No pressure, no spam.
        </p>
        <div className={styles.newsletterForm}>
          <ButtondownSignup />
        </div>
      </div>
    </section>

    {/* ======== Stats ========
         TODO: confirm current figures (member count especially). */}
    <section className={styles.stats}>
      <div className={styles.statsInner}>
        <div className={styles.statItem}>
          <h3>5 years</h3>
          <p>of weekly practice</p>
        </div>
        <div className={styles.statItem}>
          <h3>250+</h3>
          <p>members worldwide</p>
        </div>
        <div className={styles.statItem}>
          <h3>30</h3>
          <p>countries represented</p>
        </div>
        <div className={styles.statItem}>
          <h3>Free</h3>
          <p>always has been</p>
        </div>
      </div>
    </section>

    <TornEdge variant="d" />

    {/* ======== Connection Call CTA ======== */}
    <section className={styles.connection}>
      <div className={styles.connectionInner}>
        <span className={`${GlobalCSS.label} ${styles.connectionLabel}`}>The best first step</span>
        <h2>Come sit with us for an hour</h2>
        <p>
          Our Connection Call is an open door — a low-key, no-commitment way to
          meet real people in the community and see if this is your kind of
          place.
        </p>
        <Link to="/get-involved#connection-calls" className={styles.connectionCta}>
          Join a Connection Call
        </Link>
      </div>
    </section>
  </Layout>
)

export default NamedDefault
