import React, { useState } from 'react';
import { Link } from 'gatsby';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';
import FullHeightContent from '../components/full-height-content';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    }).then(() => setSubmitted(true));
  };

  return (
    <Layout>
      <FullHeightContent>
        <div style={{ height: '30px' }}></div>
        <CenteredColumn>
          {submitted ? (
            <>
              <Typography variant="h2">Thank You</Typography>
              <p>Your message has been sent. We'll get back to you soon!</p>
            </>
          ) : (
            <>
              <Typography variant="h2">Contact Us</Typography>
              <p>Have a question or want to get in touch with Intentional Society? Fill out the form below and we'll get back to you.</p>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px' }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: 'none' }}>
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <TextField
                  label="Name"
                  name="name"
                  required
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  required
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="Message"
                  name="message"
                  required
                  fullWidth
                  multiline
                  rows={5}
                  variant="outlined"
                />
                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{ fontWeight: 'bold', padding: '10px 32px', textTransform: 'none' }}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </>
          )}
        </CenteredColumn>
        <div style={{ flex: 1 }}></div>
        <CenteredColumn>
          <div style={{textAlign: 'right', marginBottom: '-25px'}}>
            <Link to="/">Back to home page</Link>
          </div>
        </CenteredColumn>
      </FullHeightContent>
    </Layout>
  );
};

export default ContactPage;
