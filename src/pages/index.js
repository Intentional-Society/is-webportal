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
      <p>Intentional Society consists of people, practices, and culture held  
         in awareness and intention.<br/>
      It's a place to grow and develop yourself in a warm, supportive community.<br/>
      It's a future society that supports the ways we want to inhabit our best selves.<br/>
      It's a living probe into self-transforming collective culture.</p>
      <IsHr />
      <a className={GlobalCSS.anchorOffset} id="practice-program"></a>
      <Typography variant="h4">Practice Program Q1 2024</Typography>

      <p>We practice together over video to become our best and biggest selves — to practice being 
        the people we want to be, more consistently, with more ease and freedom. In  
        doing so, we also then increase our capacity to love and serve both ourselves and humanity.</p>

      <p>For the first time, Intentional Society has assembled all its best practices
        into a public 9-week program designed to support post-conventional personal development. 
        Every week utilizes a different relational practice, from the well-known (IFS, Circling, 
        Case Clinic) to the home-grown.
      </p>
      <p>No membership required — if you resonate with this invitation, you may attend any 
        and all weeks. Sessions will occur the first three weeks of each of 
        January (7/14/21st), February (4/11/18th), and March (3/10/17th) 2024, 
        all starting 1pm Sunday Pacific Time.
      </p>
      <BlurbPractice />

      <IsHr />
      <p>We've been exploring and relating together for three years now, 
        with <Link to="/history">more than 140 weekly sessions</Link> under our belts.</p>
      <p>
        TODO: Moderate updates of <Link to="/who-we-are">who we 
        are</Link> and <Link to="/what-we-do">what we do</Link> pages.
        TODO: Quick update  
        to <Link to="/get-involved">get involved</Link> if and when you feel so called.
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