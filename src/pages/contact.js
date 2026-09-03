import React, { useState } from 'react';
import {
  sans, ACCENT, INK, bodyP, sectionHeading,
  Head2026, HeaderBand, Page2026, Article2026, BackLink,
} from '../components/design2026/chrome';

// The contact form. Its Netlify plumbing is load-bearing: name="contact",
// data-netlify, the honeypot, and the hidden form-name input all have to stay
// for submissions to reach Netlify.

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Contact Us',
  description: 'questions, introductions, anything else',
  metaDescription: 'Get in touch with Intentional Society — ask a question, say hello, or start a conversation.',
};

// The confirmation heading, matching About's larger section type.
const thanksHeading = { ...sectionHeading, fontSize: 'clamp(1.7rem,3vw,2.3rem)' };

const fieldLabel = {
  display: 'block', fontFamily: sans, fontSize: '14px', letterSpacing: '0.08em',
  textTransform: 'uppercase', fontWeight: 600, color: INK, marginBottom: '0.45rem',
};

const fieldInput = {
  width: '100%', fontFamily: sans, fontSize: '17px', fontWeight: 500, color: INK,
  padding: '0.75rem 0.9rem', background: '#FAF8F3',
  border: '1px solid rgba(42,42,36,0.2)', borderRadius: '3px',
};

const submitButton = {
  display: 'inline-block', padding: '0.8rem 2rem', background: ACCENT,
  color: '#fff', border: 'none', fontFamily: sans, fontSize: '16px',
  fontWeight: 500, letterSpacing: '0.03em', borderRadius: '3px', cursor: 'pointer',
};

const NamedDefault = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    }).then(() => setSubmitted(true));
  };

  return (
    <Page2026>

      {/* ======== Header band ======== */}
      <HeaderBand
        image="crystals-header.jpg" focus="center 45%" credit="Bill"
        title={PAGE.title}
        description={PAGE.description}
      />

      {/* ======== Article body ======== */}
      <Article2026>

        {submitted ? (
          <>
            <h2 style={thanksHeading}>Thank you</h2>
            <p style={bodyP}>Your message has been sent. We'll get back to you soon.</p>
          </>
        ) : (
          <>
            <p style={bodyP}>
              Have a question or want to get in touch with Intentional Society? Fill out
              the form below and we'll get back to you.
            </p>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', maxWidth: '600px', marginTop: '2rem' }}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: 'none' }}>
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>

              <div>
                <label htmlFor="contact-name" style={fieldLabel}>Name</label>
                <input id="contact-name" name="name" type="text" required style={fieldInput} />
              </div>

              <div>
                <label htmlFor="contact-email" style={fieldLabel}>Email</label>
                <input id="contact-email" name="email" type="email" required style={fieldInput} />
              </div>

              <div>
                <label htmlFor="contact-message" style={fieldLabel}>Message</label>
                <textarea id="contact-message" name="message" required rows={6}
                  style={{ ...fieldInput, resize: 'vertical' }} />
              </div>

              <div>
                <button type="submit" style={submitButton}>Send Message</button>
              </div>
            </form>
          </>
        )}

        <BackLink to="/">← Back to home</BackLink>

      </Article2026>
    </Page2026>
  );
};

export default NamedDefault;

export const Head = ({ location }) => (
  <Head2026 {...PAGE} pathname={location.pathname} />
);
