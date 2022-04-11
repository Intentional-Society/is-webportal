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
        <p style={{marginLeft:"4vw"}}>grow with like-minded friends</p>
        <p style={{marginLeft:"-1vw"}}>awareness and perspective</p>
        <p style={{marginLeft:"2vw"}}>accepting and integrating</p><br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;
      </Typography>
    </div>
    <div style={{margin: "-10vh auto 0", minWidth: "300px", maxWidth: "960px", padding: "0 50px"}}>
      <p>Intentional Society is a community for people who want to grow.</p>
      <IsHr />
      <p>We meet together to become our best and biggest selves - to practice being 
        the people we want to be, more consistently, with more ease and freedom. In  
        doing so, we also then increase our capacity to love and serve both ourselves and humanity.</p>

      <p>At least, that's the intention we hold. Intentional Society is simply people, in process, 
        being and doing together&#8230; and its fullness is in the 
         process of being both created and discovered. Read on to learn more about <Link to="/who-we-are">who we 
        are</Link> and <Link to="/what-we-do">what we do</Link>, and how 
        to <Link to="/get-involved">get involved</Link> if and when you feel so called.
      </p>
      <IsHr />
      <p>Launched a year ago, we <Link to="/history">held 46 community gatherings</Link> in 2021. 
       We're currently beginning our 6<sup>th</sup> season, corresponding to the second quarter of 2022.<br />
      <ZoomlinkOrientation /></p>
      <IsHr />
      <p>Want to follow along with what we're doing and learning? 
      Enter your email here to subscribe to our Intentional Society Weekly Updates newsletter:</p>
      <ButtondownSignup></ButtondownSignup>
      <p>You can now also follow us <a href="https://twitter.com/IntentionalSoc">on Twitter</a>.</p>
      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/who-we-are">Who We Are</Link>
      </div>
    </div>
  </Layout>
</>
export default NamedDefault;