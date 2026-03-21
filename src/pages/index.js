import React, { useState } from 'react';
import { Link } from 'gatsby';
import Typography from '@mui/material/Typography';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import ButtondownSignup from '../components/buttondownsignup';
import IsHr from '../components/is-hr';
import CenteredColumn from '../components/centered-column';
import * as styles from '../styles/homepage.module.css';

const intentionCards = [
  {
    id: 'grow', label: '...grow myself',
    links: [
      { text: 'Relational Dojo', href: 'https://relationaldojo.org', external: true },
      { text: 'Developmental Practice Series', to: '/developmental-practice-series' },
    ],
  },
  {
    id: 'people', label: '...find the others',
    links: [
      { text: 'Community', to: '/community' },
      { text: 'Relational Web', to: '/web' },
      { text: 'Friends', to: '/friends' },
      { text: 'Connection Call', to: '/get-involved#connection-calls' },
    ],
  },
  {
    id: 'work', label: '...work with purpose',
    links: [
      { text: 'Relational Web', to: '/web' },
      { text: 'Intentional Ventures', to: '/iv' },
    ],
  },
  {
    id: 'learn', label: '...learn about IS',
    links: [
      { text: 'Connection Call', to: '/get-involved#connection-calls' },
      { text: 'Newsletter', href: '#newsletter' },
      { text: 'News', to: '/news' },
    ],
  },
];

const NamedDefault = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggle = id => setActiveCard(prev => (prev === id ? null : id));

  return (
    <Layout>
      {/* Hero */}
      <StaticImage src="../../static/images/bg/E7EFEBbg.png" layout="fullWidth" alt="" loading="eager"
                  style={{ height: '60vh', zIndex: -1, position: 'absolute',
                          top: '0px', left: '0px', right: '0px'}}
                  imgStyle={{objectFit: 'fill'}}/>
      <div style={{ textAlign: 'center', margin: '0 auto', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '1.5rem' }}>
        {['inner development', 'wise action', 'human connection'].map(line => (
          <Typography key={line} variant="h3" style={{
            color: '#FFFFFF',
            fontSize: 'clamp(1.8rem, 7vw, 3rem)',
            fontWeight: 300,
            letterSpacing: '0.04em',
            lineHeight: 1.5,
            margin: 0,
          }}>
            {line}
          </Typography>
        ))}
      </div>

      <CenteredColumn>
        {/* Identity paragraph */}
        <p style={{fontSize: '1.15em', textAlign: 'center', marginTop: '1.5em'}}>
          Intentional Society is an ecosystem of people and purposes —
          being who we want to be, flowing into action with integrity, catalyzing with relational connection.
        </p>

        {/* Embodied invitation */}
        <Typography variant="h3" style={{textAlign: 'center', marginTop: '1.5em', marginBottom: '0.3em'}}>
          What is <i>your</i> intention?
        </Typography>
        <p className={styles.invitation}>
          Pause for a moment. Take one conscious breath.<br />
          Check in with yourself — what matters to you?
        </p>

        <div className={styles.iWantTo}>I want to...</div>
        <svg className={styles.arrows} viewBox="-5 -3 1010 56" preserveAspectRatio="xMidYMid meet">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
              markerWidth="6" markerHeight="6" orient="auto-start-reverse" fill="#24818E">
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
          </defs>
          <line x1="500" y1="0" x2="120" y2="48" stroke="#24818E" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <line x1="500" y1="0" x2="373" y2="48" stroke="#24818E" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <line x1="500" y1="0" x2="627" y2="48" stroke="#24818E" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <line x1="500" y1="0" x2="880" y2="48" stroke="#24818E" strokeWidth="1.5" markerEnd="url(#arrow)" />
        </svg>

        {/* Intention cards */}
        <div className={styles.cardRow}>
          {intentionCards.map(card => (
            <div key={card.id} className={styles.cardWrap}>
              <div
                className={activeCard === card.id ? styles.cardActive : activeCard ? styles.cardDimmed : styles.card}
                onClick={() => toggle(card.id)}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') toggle(card.id) }}
                role="button"
                tabIndex={0}
                aria-pressed={activeCard === card.id}
              >
                {card.label}
              </div>
            </div>
          ))}
        </div>

        {/* Link panel — constant height, content appears when a card is active */}
        <div className={styles.linkPanelWrap}>
          {activeCard && (
            <div className={styles.linkPanel}>
              {intentionCards.find(c => c.id === activeCard).links.map((link, i) => (
                <span key={i} className={styles.linkPanelItem}>
                  {link.external
                    ? <a href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
                    : link.to
                      ? <Link to={link.to}>{link.text}</Link>
                      : <a href={link.href}>{link.text}</a>
                  }
                </span>
              ))}
            </div>
          )}
        </div>

        <IsHr />

        {/* Newsletter signup */}
        <a id="newsletter" style={{display: 'block', position: 'relative', top: '-74px', visibility: 'hidden'}}></a>
        <p>Want to follow along with what we're doing and learning?
          Subscribe to our Weekly Update newsletter:</p>
        <ButtondownSignup />

        <br />
        <div className={styles.footerNav}>
          Next page: <Link to="/get-involved">Get Involved</Link>
        </div>
      </CenteredColumn>
    </Layout>
  );
};
export default NamedDefault;
