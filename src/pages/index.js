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
    <div style={{  minWidth: "350px", maxWidth: "500px", width: "fit-content", margin: "0 auto", height: "280px" }}>
      <Typography variant="h2" style={{ color: "#FFFFFF"}}>
        <p style={{margin:"1vw auto"}}>Intentional Society</p>
      </Typography>
      <Typography variant="h5" style={{ color: "#FFFFFF"}}>
        <p style={{marginLeft:"3vw"}}>starts with...</p>
      </Typography>
      <Typography variant="h4" style={{ color: "#FFFFFF"}}>
        <p style={{margin:"1vw auto 1vw 3vw"}}>being who we want to be</p>
      </Typography>
    </div>
    <div style={{margin: "0 auto", minWidth: "300px", maxWidth: "960px", padding: "0 50px"}}>
      <div style={{fontSize: "1.25em"}}>
        <div style={{margin: "0 auto", minWidth: "300px", maxWidth: "max-content", padding: "0"}}>
          <p>We are a congregation of friends devoted to growing ourselves 
          and our society toward better futures. The complexity of our world 
          is calling us to become…</p>
        </div>
        <div style={{margin: "0 auto", minWidth: "300px", maxWidth: "max-content", padding: "0"}}>
          <p>perceptive enough to see deeper</p>
          <p>big enough to be with anything</p>
          <p>wise enough to wield our power</p>
        </div>
        <IsHr />
        <p>Being who we want to be is an ever-unfolding process, and we do it by practicing together. 
          We consciously cultivate a post-conventional culture among us that shifts our seeing, 
          supports our becoming, flows into our doing.</p>
        <p>If you’ve been seeking the intersection of inner work and systems change, we 
          invite you to join us in the fractal dance of transformation and in the 
          friendship of collaborative service to life.</p>
        </div>

      <IsHr />

      <div style={{ width: "fit-content", margin: "0 auto"}}>
        <StaticImage src="../../static/images/s17-3spaces.jpg"
          loading="eager" alt="three spaces of IS: practice dojo, community hub, intentional ventures"
          width="480" style={{margin: "40px auto 10px auto"}}/>
      </div>

      <br />
      <IsHr />
      <p>For four years now we've been exploring and relating together weekly, 
        with <Link to="/history">more than 200 sessions</Link> under our belts.</p>
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