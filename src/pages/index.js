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
        <p style={{marginLeft:"1vw"}}>becoming your biggest self</p>
        <p style={{marginLeft:"4vw"}}>awareness, acceptance, integrity</p>
        <p style={{marginLeft:"-1vw"}}>growing a collective culture</p>
        <p style={{marginLeft:"2vw"}}>intention in service of life</p><br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;
      </Typography>
    </div>
    <div style={{margin: "-10vh auto 0", minWidth: "300px", maxWidth: "960px", padding: "0 50px"}}>
      <p>Intentional Society consists of people together  
         becoming, belonging, being, and doing together.<br/>
      It's a place to grow and develop yourself in a warm, supportive community.<br/>
      It's a future society that supports the ways we want to inhabit our best selves.<br/>
      It's a living probe into self-transforming collective culture.</p>
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
      <Typography variant="h4">Current Invitation!</Typography>
      <p>Intentional Society has been a growth-oriented community full of relational practices, awareness-acceptance-integration loops, and culture cultivation. It remains that still, and also: Building atop our cultural foundation and practices, we’re expanding our scopes of activity to include externally-facing and/or economic work, as well as intentional social and personal support structures.
      </p>
      <p>There are huge challenges looming over humanity’s future, yet our capacity to be in relationship with them, and ourselves, and each other, seems to be our biggest blocker. I believe we’ve validated, in the last three years of Intentional Society, a large chunk of what it takes to practically grow our complexity-holding-capacity as individuals and as a collective. Our practices remain at the core of what makes our culture possible; and also, what else does our practice make possible? That’s what we’re bringing online now.
      </p>
      <p>As with all human/complex system dynamics, we can’t just snap our fingers to make it so. We’ll be assembling relational infrastructure, constructed out of people’s time and energy investments in resonance with like-minded others. The existing single-track congregational structure of Intentional Society has selected rather strongly for those who particularly enjoy finding their edges in practicing interpersonal awareness, communication, and perspective-taking skills and ways of being. To complement this, we’re open to welcoming more applied-focus energy and passions to enrich our doing-and-being spirals.
      </p>
      <p>So if you’ve ever thought to yourself either “Game B sounds great but it’s all talk ‘cause it’s missing some cultural wisdom to do it” or “Authentic Relating/etc has felt great but I wish it applied to more of my life” then you might want to take a look at this next phase of Intentional Society. To do so, start with the orientation call this Saturday the 7th then join our cohort kickoff on the 8th. Lots of decisions and experimentation await us!
      </p>
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