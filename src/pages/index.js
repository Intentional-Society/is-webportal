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
        <p style={{marginLeft:"5vw"}}>grow with like-minded friends</p>
        <p style={{marginLeft:"-1vw"}}>self-awareness, system perspective</p>
        <p style={{marginLeft:"3vw"}}>integrating being and doing</p><br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;
      </Typography>
    </div>
    <div style={{margin: "-12vh auto 0", minWidth: "300px", maxWidth: "960px", padding: "0 50px"}}>
      <p>Intentional Society is a community for people who want to grow.</p>
      <IsHr />
      <p>We meet together to become our best and biggest selves - to practice being 
        the people we want to be, in more contexts and with more ease and freedom. In  
        doing so, we also then increase our capacity to love and serve both ourselves and humanity.</p>

      <p>At least, that's the idea. Intentional Society is simply people in process, 
        being and doing together&#8230; 
         though there's more to the complete picture, which is itself still in the 
         process of being discovered. Read on to learn more about <Link to="/who-we-are">who we 
        are</Link> and <Link to="/what-we-do">what we do</Link>, and how 
        to <Link to="/get-involved">get involved</Link> if and when you feel so called.
      </p>
      <IsHr />
      <p>Our <b>third season launches July 11th!</b> This is a great opportunity to join in as we 
        take the lessons of our first six months and open our doors to more people. <br />
      <ZoomlinkOrientation /></p>
      <IsHr />
      <ButtondownSignup></ButtondownSignup>
      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/who-we-are">Who We Are</Link>
      </div>
    </div>
  </Layout>
</>
export default NamedDefault;