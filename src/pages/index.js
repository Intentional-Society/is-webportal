import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import ButtondownSignup from "../components/buttondownsignup"
import IsHr from "../components/is-hr"
import BlurbPractice from "../components/blurb-practice"
import CenteredColumn from "../components/centered-column"
import * as GlobalCSS from "../styles/global.module.css"
import { Grid } from "@material-ui/core";

const imageList = [
  "/images/second-renaissance.jpg",
  "/images/life-itself.jpg",
  "/images/enspiral.png",
  "/images/microsolidarity.jpg",
  "/images/building-belonging.png",
  "/images/starters-culture.png",
  
];


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
    <CenteredColumn>
      <div style={{fontSize: "1.25em"}}>

          <p>We are a congregation of friends devoted to growing ourselves 
          and our society toward better futures. The complexity of our world 
          is calling us to become&hellip;</p>

        <div style={{margin: "0 auto 0 100px"}}>
          <p>&hellip;<b>sensitive</b> enough to <b>see</b> clearly</p>
          <p>&hellip;<b>flexible</b> enough to <b>be with</b> anything</p>
          <p>&hellip;and <b>wise</b> enough to wield our <b>power</b></p>
        </div>
        <IsHr />
        <p>Being who we want to be is an ever-unfolding process, and we do it by practicing together. 
          We consciously cultivate a post-conventional culture among us that shifts our seeing, 
          supports our becoming, flows into our doing.</p>
        <p>If you’ve been seeking the intersection of inner development and systems change, we 
          invite you to join us in growth and friendship as we
          practice awareness, acceptance, and integrity in a dance of transformation and service to life.</p>
        <p>See how you can <Link to="/get-involved">get involved</Link>, or 
          learn more <Link to="/who-we-are">about us</Link>.</p>
        </div>

      <IsHr />
      <p>Deeper inside IS, you'll find three spaces.</p>
      <div style={{ width: "fit-content", margin: "0 auto"}}>
        <StaticImage src="../../static/images/s17-3spaces.jpg" loading="eager" width="480"
          alt="three spaces of IS: practice dojo, community hub, intentional ventures"/>
      </div>
      <p>Our <Link to="/dojo">Practice Dojo</Link> is open to the public for developmental-relational skill-building.</p>
      <p>Our <Link to="/hub">Community Hub</Link> is a supportive space of friendship and exploration.</p>
      <p><Link to="/iv">Intentional Ventures</Link> is pioneering an ecosystem of aligned livelihood</p>
      <p>We'd also love to introduce you to our <Link to="/friends">friends</Link>, and align ourselves with 
        the <a href="https://secondrenaissance.net">Second Renaissance</a> movement.</p>
      <Grid container spacing={0} justifyContent="center">
  {imageList.map((image, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <img src={image} alt={`Image ${index + 1}`} style={{ width: "40%", height: "auto", borderRadius: "10px" }} />
    </Grid>
  ))}
</Grid>
    <IsHr />
      <p>The heart of IS has been beating for four years now, 
        with <Link to="/history">more than 200 community sessions</Link> under our belts.</p>
      <p>Want to follow along with what we're doing and learning? 
      Enter your email here to subscribe to our Weekly Update newsletter:</p>
      <ButtondownSignup></ButtondownSignup>
      <p>You can also follow us <a href="https://twitter.com/IntentionalSoc">on Twitter</a>.</p>
      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/who-we-are">Who We Are</Link>
      </div>
    </CenteredColumn>
  </Layout>
</>
export default NamedDefault;