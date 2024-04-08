import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import ButtondownSignup from "../components/buttondownsignup"
import IsHr from "../components/is-hr"
import BlurbPractice from "../components/blurb-practice"
import * as GlobalCSS from "../styles/global.module.css"

const NamedDefault = ({ data }) => <>
  <Layout>
    <StaticImage src="../../static/images/bg/E7EFEBbg.png" layout="fullWidth" alt="" loading="eager"
                style={{ height: "60vh", zIndex: -1, position: "absolute", 
                        top: "0px", left: "0px", right: "0px"}}
                imgStyle={{objectFit: "fill"}}/>
    <div style={{  minWidth: "350px", maxWidth: "400px", width: "fit-content", margin: "0 auto" }}>
      <Typography variant="h5" style={{ color: "#FFFFFF"}}>
        <p style={{marginLeft:"1vw"}}>grow your better self</p>
        <p style={{marginLeft:"4vw"}}>awareness, acceptance, integrity</p>
        <p style={{marginLeft:"-1vw"}}>grow our next culture</p>
        <p style={{marginLeft:"2vw"}}>thriving humans and humanity</p><br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;
      </Typography>
    </div>
    <div style={{margin: "-9vh auto 0", minWidth: "300px", maxWidth: "960px", padding: "0 50px"}}>
      <p>Intentional Society is made of people, practices, and culture held  
         in awareness and intention.<br/>
      It's a place to grow and develop yourself in a warm, supportive community.<br/>
      It's a living probe into stabilizing and spreading self-transforming collective culture.<br/>
      It's a future society that better supports the thriving of humans and humanity.</p>
      <IsHr />
      <a className={GlobalCSS.anchorOffset} id="s14"></a>
      <Typography variant="h3">Season 14 Update</Typography>

      <p>Our 14th quarterly/seasonal cycle runs April through June 2024.</p>

      <Typography variant="h4">Practice Dojo: Exploratory Practice Series</Typography>
      <p>With open front doors, the Practice Dojo welcomes novices and experts alike 
        to train in the varied arts of relational-developmental practices.
        This season, we welcome six guest teachers to guide us in
        exploring new-to-us awareness, relating, and embodiment tools.</p>

      <p>The Exploratory Practice Series meets on the 2nd and 4th Saturdays of April, May, and June. 
        All sessions start at 1pm Pacific Time (4pm Eastern, 8pm UTC), and usually last for 90 minutes.<br />
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScft8sEI3FuL-faqRU7w8Hp5gTrj0zePg6-bhKJM_gwXaVqVg/viewform">Sign 
        up for access here.</a></p>

      <p>
        The practice/topic lineup is: 
        <ul>
          <li>April 13 — <b>Growth as Object</b> with James Baker</li>
          <li>April 27 — <b>Dialogos</b> with Romeck van Zeijl</li>
          <li>May 11 — <b>Alexander Technique</b> with Michael Ashcroft</li>
          <li>May 25 — <b>Feldenkrais Method - Awareness through Movement</b> with Seth Dellinger</li>
          <li>June 8 — <b>Metta Meditation</b> with Tasshin Fogleman</li>
          <li>June 22 — <b>Gendlin Focusing</b> with Jessica Fan</li>
        </ul>
      </p>

      <Typography variant="h4">Core Collective</Typography>
      <p>C is for core, commons, communitas, collective, communion, culture — whatever it's called, 
        this is a space of relationship-building, belonging, acceptance, play, and exploration. 
        It is emergent, messy, and full of laughter and tenderness. We will once again 
        be meeting weekly on <b>Sundays</b> (also starting 1pm Pacific): a clear consistent heartbeat 
        of connection. Yes, we do practices here also, utilizing a living-room vibe of trust and 
        safety to go deeper than the average Practice Dojo experience. Members also lead a variety of 
        events and small in this leader-ful open-space playground collective.</p>
      
      <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSebSp8vQsfRINQhHGw83Z-AEL3CtDtdcB5Edyc4kdCAq03XEg/viewform">Read 
        more and apply here.</a> Membership is free (always has been), and the 
        light application-and-agreements membrane that defines membership exists to let us 
        create openness and safety in our private cozyweb and manage our private data sharing. If you 
        haven't been to at least one Practice Dojo session previously, please plan to attend 
        an <Link to="/get-involved#office-hours">Office Hours</Link> call for orientation purposes.</p>

      <Typography variant="h4">Intentional Ventures</Typography>
      <p>New! We intend to grow a thriving economic ecosystem that supports our material security,
        in ways that align with our values and purposes, leveraging a crucial foundation 
        of professional, relational, and developmental skills. Intentional Ventures is in 
        early-stage formation with an invite-only founding team. Inquire
        at <Link to="/get-involved#office-hours">Office Hours</Link> if you're curious.
      </p>

      <StaticImage src="../../static/images/s14-3spaces.png"
        alt="diagram of three parts labeled Practice Dojo, Core, and Ventures" loading="eager"/>

      <br />
      <IsHr />
      <p>Since Jan 2021 we've been exploring and relating together weekly, 
        with <Link to="/history">more than 150 sessions</Link> under our belts.</p>
      <p>
        You can read more about <Link to="/who-we-are">who we 
        are</Link> and <Link to="/what-we-do">what we do</Link>, and find a few 
        different inroads to <Link to="/get-involved">get involved</Link> if and when you feel so called.
      </p>
      <p>Want to follow along with what we're doing and learning? 
      Enter your email here to subscribe to our Weekly Update newsletter:</p>
      <ButtondownSignup></ButtondownSignup>
      <p>You can also follow us <a href="https://twitter.com/IntentionalSoc">on Twitter</a>.</p>
      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/who-we-are">Who We Are</Link>
      </div>
    </div>
  </Layout>
</>
export default NamedDefault;