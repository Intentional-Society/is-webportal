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
      <Typography variant="h3">What's Happening Now</Typography>

      <p>Our 15th seasonal/quarterly cycle runs July through September 2024.</p>

      <Typography variant="h4">Practice Dojo — Connection Lab</Typography>
      <p>Meets on Saturdays. Dates: <b>July 27th, August 17th, September 7th</b></p>
      <p>We'll be using a "Connection Lab" theme to meet each other, 
        human to human, and fine-tune our toolkit of practices for making connections and 
        bridging differences. The goal is that you'll be able to add these to *your* toolkit 
        of intentional relating, becoming more easily able to connect with anyone you choose to.</p>

      <BlurbPractice></BlurbPractice>

      <Typography variant="h4">Core Community Season 15</Typography>
      <p>Meets on Sundays. Season started July 7th, and remains open to new entrants.</p>
      
      <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSebSp8vQsfRINQhHGw83Z-AEL3CtDtdcB5Edyc4kdCAq03XEg/viewform">Read 
        more and apply here.</a> Membership is free (always has been), and the 
        light application-and-agreements membrane that defines membership exists to let us 
        create openness and safety in our private cozyweb and manage our private data sharing. If you 
        haven't been to at least one Practice Dojo session previously, please plan to attend 
        an <Link to="/get-involved#office-hours">Office Hours</Link> call for orientation purposes.</p>

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