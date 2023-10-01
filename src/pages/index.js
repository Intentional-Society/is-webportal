import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import ButtondownSignup from "../components/buttondownsignup"
import IsHr from "../components/is-hr"
import ZoomlinkOrientation from "../components/zoomlink-orientation"

const NamedDefault = ({ data }) => <>
  <Layout>
    <StaticImage src="../../static/images/bg/E7EFEBbg.png" layout="fullWidth" alt="" loading="eager"
                style={{ height: "60vh", zIndex: -1, position: "absolute", 
                        top: "0px", left: "0px", right: "0px"}}
                imgStyle={{objectFit: "fill"}}/>
    <div style={{  minWidth: "350px", maxWidth: "400px", width: "fit-content", margin: "0 auto" }}>
      <Typography variant="h5" style={{ color: "#FFFFFF"}}>
        <p style={{marginLeft:"1vw"}}>become your biggest self</p>
        <p style={{marginLeft:"4vw"}}>awareness, acceptance, integrity</p>
        <p style={{marginLeft:"-1vw"}}>grow a collective culture</p>
        <p style={{marginLeft:"2vw"}}>intention in service of life</p><br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;
      </Typography>
    </div>
    <div style={{margin: "-10vh auto 0", minWidth: "300px", maxWidth: "960px", padding: "0 50px"}}>
      <p>Intentional Society is people bringing awareness to intention in 
         becoming, belonging, and doing together.<br/>
      It is a place to grow and develop oneself in a warm, supportive community.<br/>
      It is a future society that supports the ways we want to inhabit our best selves.<br/>
      It is a living probe into self-transforming collective culture.</p>
      <IsHr />
      <p>We meet frequently over video to become our best and biggest selves — to practice being 
        the people we want to be, more consistently, with more ease and freedom. In  
        doing so, we also then increase our capacity to love and serve both ourselves and humanity.</p>

      <p>Intentional Society is currently (late 2023) undergoing metamorphosis!
        In this season of change, our website has not yet been updated to reflect 
        the uncertainty and possibility of how we are shifting and expanding. 
        You can still read previous versions of <Link to="/who-we-are">who we 
        are</Link> and <Link to="/what-we-do">what we do</Link>, and find how 
        to <Link to="/get-involved">get involved</Link> if and when you feel so called.
      </p>
      <IsHr />
      <p>We've been exploring and relating together since January 2021, 
        with <Link to="/history">more than 130 weekly sessions</Link> under our belts. 
       Our 12<sup>th</sup> quarterly season runs October through December of 2023.<br />
      <ZoomlinkOrientation /></p>
      <IsHr />
      <p>Want to follow along with what we're doing and learning? 
      Enter your email here to subscribe to our Intentional Society Weekly Updates newsletter:</p>
      <ButtondownSignup></ButtondownSignup>
      <p>You can also follow us <a href="https://twitter.com/IntentionalSoc">on Twitter</a>.</p>
      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/who-we-are">Who We Are</Link>
      </div>
    </div>
  </Layout>
</>
export default NamedDefault;