import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Layout from '../components/layout'
import CenteredColumn from '../components/centered-column'
import IsHr from '../components/is-hr'
import * as GlobalCSS from '../styles/global.module.css'

const NamedDefault = () => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <img
        src="/images/developmental/developmental-series-header.png"
        alt="IS Developmental Practice Series Header"
        style={{ width: "100%", marginBottom: "30px" }}
      />

      <Typography variant="h3" style={{ marginBottom: "20px" }}>
        IS Developmental Practice Series
      </Typography>

      <p>
        Skillful relating to inner and outer challenges. Liberation from stuckness and not-okay-ness. 
        Spacious ease and equanimity. These are learnable skills, freely available through interactive, 
        relational, intentional practice in a supportive environment.
      </p>

      <p>
        The key mechanism of psychological adult development is (roughly) perspective-expansion — our 
        ability to move from "being caught up in it" to "seeing, welcoming, and working with it". 
        Leveraging years of action-research experience from Intentional Society, the Developmental 
        Practice Series assembles a powerful sequence of practices supporting post-conventional 
        personal development.
      </p>

      <p>
        In plain words, we're building a bridge to "being who we want to be" beyond what society 
        typically offers us. This series is being run as a nine-week course on Thursdays starting 
        July 10<sup>th</sup>, 9:00am to 10:30am Pacific (Noon Eastern, 4pm UTC, 6pm CEST).
      </p>

      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfTKFx1wlprZ3dLVWdcwmggvQzeSoAbqLOaYpKFjAf_9XSFoQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "#1976d2",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "bold"
          }}
        >
          👉 Sign up here
        </a>
      </div>

      <IsHr />

      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        🗓️Schedule and Practices
      </Typography>

      <div style={{ marginBottom: "30px" }}>
        <Typography variant="h5" style={{ marginBottom: "10px" }}>
          Unit 1 (Awareness) July 10, July 17, July 24:
        </Typography>
        <ul>
          <li><strong>Empathy Circle</strong> – receptive listening and reflection</li>
          <li><strong>Parts Work (IFS)</strong> – listening to and being with parts-of-self</li>
          <li><strong>Interpersonal Gap</strong> – perspectival awareness and frame hygiene</li>
        </ul>

        <Typography variant="h5" style={{ marginBottom: "10px", marginTop: "20px" }}>
          Unit 2 (Acceptance) July 31, Aug 7, Aug 14:
        </Typography>
        <ul>
          <li><strong>T-Group</strong> – noticing and naming our experiences</li>
          <li><strong>Circling</strong> – welcoming everything in connection</li>
          <li><strong>Inquiry Spiraling</strong> – perspective weaving, collective dreaming</li>
        </ul>

        <Typography variant="h5" style={{ marginBottom: "10px", marginTop: "20px" }}>
          Unit 3 (Integrity) Aug 21, Aug 28, Sept 4:
        </Typography>
        <ul>
          <li><strong>Nine Whys</strong> – (re)connecting to desire, motivations, and purpose</li>
          <li><strong>Pure coaching + Clean language</strong> – clean (space-holding, not self-injecting) coaching basics</li>
          <li><strong>Case Clinic</strong> – developmental coaching in action</li>
        </ul>

        <p style={{ marginTop: "20px", fontStyle: "italic" }}>
          Optional bonus session Sept 11 - wrap-up and retrospective
        </p>
      </div>

      <p>
        After signing up, you'll receive a recurring calendar invite for all sessions. The skills 
        do stack together in later practices, so we ask that participants intend to make at least 
        6 out of the 9 weeks.
      </p>

      <IsHr />

      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Reflections from 2024 participants
      </Typography>

      <div style={{ 
        display: "flex", 
        gap: "20px", 
        marginBottom: "30px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        <img
          src="/images/developmental/reflections-2024-1.png"
          alt="2024 Participant Reflection 1"
          style={{ 
            flex: "1", 
            maxWidth: "300px", 
            minWidth: "250px",
            height: "auto"
          }}
        />
        <img
          src="/images/developmental/reflections-2024-2.png"
          alt="2024 Participant Reflection 2"
          style={{ 
            flex: "1", 
            maxWidth: "300px", 
            minWidth: "250px",
            height: "auto"
          }}
        />
        <img
          src="/images/developmental/reflections-2024-3.png"
          alt="2024 Participant Reflection 3"
          style={{ 
            flex: "1", 
            maxWidth: "300px", 
            minWidth: "250px",
            height: "auto"
          }}
        />
      </div>

      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfTKFx1wlprZ3dLVWdcwmggvQzeSoAbqLOaYpKFjAf_9XSFoQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "#1976d2",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "bold"
          }}
        >
          👉 Sign up here
        </a>
      </div>

      <IsHr />

      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        About the facilitator
      </Typography>

      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        <img
          src="/images/developmental/james-facilitator.png"
          alt="James Baker - Facilitator"
          style={{ 
            width: "150px", 
            height: "150px",
            objectFit: "cover",
            borderRadius: "4px"
          }}
        />
        <div style={{ flex: 1, minWidth: "300px", textAlign: "center" }}>
          <Typography variant="body1">
            James Baker has facilitated over 200 Intentional Society practice sessions since 2021. 
            He ran the first edition of this Developmental Practice Series in Q1 2024, and has also 
            hosted a corporate-focused version called Relational Agility.
          </Typography>
        </div>
      </div>

    </CenteredColumn>
  </Layout>
);

export default NamedDefault;