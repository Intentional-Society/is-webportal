import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT, ACCENT_DARK, INK, BODY_TEXT, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026, HeaderBand,
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

const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

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
    <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

      <Grain2026 />
      <Nav2026 />

      {/* ======== Header band ======== */}
      <HeaderBand
        image="/design2026/crystals-header.jpg" focus="center 45%" credit="Bill"
        title={PAGE.title}
        description={PAGE.description}
      />

      {/* ======== Article body ======== */}
      <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
        <article style={{ maxWidth: '720px', margin: '0 auto' }}>

          {submitted ? (
            <>
              <h2 style={{
                fontFamily: serif, fontWeight: 300, lineHeight: 1.2,
                fontSize: 'clamp(1.7rem,3vw,2.3rem)', color: '#5C4A3A', margin: '0 0 1.4rem',
              }}>Thank you</h2>
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

          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(42,42,36,0.08)' }}>
            <Link to="/" style={{
              fontFamily: sans, fontSize: '16px', fontWeight: 500, color: ACCENT_DARK, textDecoration: 'none',
              borderBottom: '1px solid rgba(26,66,50,0.3)',
            }}>← Back to home</Link>
          </div>

        </article>
      </main>

      <Footer2026 />
    </div>
  );
};

export default NamedDefault;

export const Head = () => (
  <Head2026
    {...PAGE}
  />
);
