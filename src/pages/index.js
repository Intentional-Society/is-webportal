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
        <p style={{marginLeft:"1vw"}}>become your best self,</p>
        <p style={{marginLeft:"4vw"}}>awareness acceptance integrity</p>
        <p style={{marginLeft:"-1vw"}}>cultivate next-level culture,</p>
        <p style={{marginLeft:"2vw"}}>thriving humans and humanity</p><br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;
      </Typography>
    </div>
    <div style={{margin: "-9vh auto 0", minWidth: "300px", maxWidth: "960px", padding: "0 50px"}}>
      <div style={{margin: "0 auto", minWidth: "300px", maxWidth: "max-content", padding: "0"}}>
        <p>We are:<br/>
          Those who together are becoming<br/>
          the people we want to be<br/>
          and doing what we value<br/>
          in growing integrity relating to<br/>
          each other, ourselves, and the world</p>
      </div>
          
      <p>Intentional Society is made of people, practices, and culture held  
         in awareness and intention. We are&hellip;<br/>
      (I:) &hellip;a place to grow and develop yourself in a warm, supportive community.<br/>
      (We:) &hellip;a living probe into stabilizing and spreading self-transforming collective culture.<br/>
      (World:) &hellip;a future society that better supports the thriving of humans and humanity.</p>
      
      <IsHr />
      <a className={GlobalCSS.anchorOffset} id="s14"></a>
      <Typography variant="h3">Happening now: IS Season 16 (Q4 2024)</Typography>

      <p>Our 16<sup>th</sup> seasonal/quarterly cycle runs October through December 2024. Intentional 
        Society currently has three main spaces/places with varying levels of openness and commitment. 
        Whoever and wherever you are, you are invited to draw closer in connection with the people 
        and purposes of IS.</p>

      <Typography variant="h4">Practice Dojo (public offerings)</Typography>

      <Typography variant="h5">Being With It All</Typography>

      <p>There's a lot going on in the world and in our lives! How do you want to be, when tough news surprises you?</p>

      <p>We can find choice and freedom in the space between stimulus and response. In this series, 
        we will practice a way-of-being that welcomes reality as it is without giving up our care or 
        agency. We'll face some challenging topics like war/violence, elections/politics, relationship 
        stress, etc and support each other in becoming better able to Be With It All - expanding our 
        capacity to hold grief and gratitude, acceptance and desire, powerlessness and agency, without 
        losing ourselves in the torrent of stimulus in modern life.</p>

      <p>The series is now complete!</p>
      
      <ul>
        <li><s>October 19th</s></li>
        <li><s>November 2nd</s></li>
        <li><s>November 16th</s></li>
        <li><s>November 30th</s></li>
        <li><s>December 14th</s></li>
      </ul>
      <p>All sessions are on Saturdays starting at 1pm Pacific for 90 minutes. </p>

      <p><BlurbPractice /></p>

      <Typography variant="h4">IS Community (members collective)</Typography>

      <p>Community members gather on Sundays for weekly calls, and/or support one another in relational "pods", 
        while forming and deepening relationships with other community members. We play together in a relational 
        sandbox of practices, explorations, creativity, and leadership development as we cultivate the kind of 
        collective culture that supports us in our "being who we want to be" into the whole of our lives.</p>
      
      <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSebSp8vQsfRINQhHGw83Z-AEL3CtDtdcB5Edyc4kdCAq03XEg/viewform">Read 
        more and apply here.</a> Membership is free (always has been), and the 
        light application-and-agreements membrane that defines membership exists to let us 
        create openness and safety in our private cozyweb and manage our private data sharing. 
        You're invited to attend an <Link to="/get-involved#office-hours">Office Hours</Link> call 
        for orientation purposes, yet if you've been to at least one Practice Dojo session previously, y
        ou probably have enough of the vibe to dive in if you prefer.</p>

      <Typography variant="h4">Intentional Ventures (private experiment)</Typography>

      <p>We unlock successful economics for meaningful livelihoods through relational support.</p>

      <p>After two quarters in incubation with the founding team of ten, IV has established 
        key structures and principles, and intends to invite new members from the waitlist in Q4. 
        To be added to the waitlist, come chat about it at <Link to="/get-involved#office-hours">Office Hours</Link>.</p>

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