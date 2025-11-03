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
  {
    image: "/images/logos/second-renaissance.jpg",
    link: "https://secondrenaissance.net",
    comment: "Exploring better futures through collective intelligence."
  },
  {
    image: "/images/logos/life-itself.jpg",
    link: "https://lifeitself.us",
    comment: "A community for philosophy, culture, and sustainable living."
  },
  {
    image: "/images/logos/enspiral.png",
    link: "https://www.enspiral.com/",
    comment: "A network of freelancers focused on self-managed organizations."
  },
  {
    image: "/images/logos/microsolidarity.jpg",
    link: "https://www.microsolidarity.cc/",
    comment: "A framework for decentralized organizing and community-building."
  },
  {
    image: "/images/logos/building-belonging.png",
    link: "https://www.buildingbelonging.us/",
    comment: "A movement for creating spaces where everyone belongs."
  },
  {
    image: "/images/logos/starters-culture.png",
    link: "https://www.startercultures.us/",
    comment: "Co-creating new economic models for livelihoods and co-ops."
  }
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
      <Typography variant="h4" style={{ color: "#FFFFFF"}}>
        <p style={{margin:"1vw auto 1vw 3vw"}}>being who we want to be</p>
      </Typography>
      <Typography variant="h4" style={{ color: "#FFFFFF"}}>
        <p style={{margin:"1vw auto 1vw 3vw"}}>doing what we value</p>
      </Typography>
            <Typography variant="h4" style={{ color: "#FFFFFF"}}>
        <p style={{margin:"1vw auto 1vw 3vw"}}>unfolding the future together</p>
      </Typography>
    </div>
    <CenteredColumn>
      <div style={{fontSize: "1.2em"}}>

          <p>We are a collection of friends devoted to growing ourselves 
          and our society toward thriving futures. 
          In these complex and chaotic times, our world 
          is calling us to become&hellip;</p>

        <div style={{margin: "0 auto 0 100px", fontSize: "1.5em"}}>
          <p>&hellip;<b>aware</b> enough to <b>see</b> clearly 👁‍🗨</p>
          <p>&hellip;<b>spacious</b> enough to <b>face</b> anything 💗</p>
          <p>&hellip;and <b>wise</b> enough to <b>wield</b> our power 👑</p>
        </div>
        <IsHr />
        <p><i>Being who we want to be</i> is an ever-unfolding process, and we do it by practicing together. 
          We cultivate a post-conventional culture among us that shifts our seeing, 
          supports our becoming, and grounds our doing.</p>
        <p>If you’re looking for the intersection of inner development and systems change, we 
          invite you to join us in growth and friendship as we
          practice <i>awareness, acceptance, integrity</i> in a dance of transformation and service to life.</p>
        <p>See how you can <Link to="/get-involved">get involved</Link>, or 
          learn more <Link to="/about">about us</Link>.</p>

      <IsHr />
      <p style={{fontSize: "1.2em"}}><Link to="/members">Community</Link> season 20 runs October through December.</p>

      <IsHr />
      <p>Inside Intentional Society (IS), you'll find three spaces.</p>
      <div style={{ width: "fit-content", margin: "0 auto"}}>
      <img src="/images/s17-3spaces.jpg" loading="eager" width="480" alt="three spaces of IS: practice dojo, community hub, intentional ventures"/>
      </div>
      <p>The <Link to="/dojo">Practice Dojo</Link> is open to the public for developmental-relational skill-building.</p>
      <p>Our <Link to="/members">Members Community</Link> is a supportive space of friendship and exploration.</p>
      <p><Link to="/iv">Intentional Ventures</Link> is pioneering an ecosystem of aligned livelihood.</p>
      <p>We'd also love to introduce you to our <Link to="/friends">friends</Link> across  
        the <a href="https://secondrenaissance.net">Second Renaissance</a> movement 
        and the <a href="https://www.joelightfoot.org/post/the-liminal-web-mapping-an-emergent-subculture-of-sensemakers-meta-theorists-systems-poets">Liminal Web</a> scene.</p>
      {/*
      <Grid container spacing={2} justifyContent="center">
      {imageList.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
          <img src={item.image} alt={`Image ${index + 1}`} 
        style={{ 
          display: "block", 
          margin: "0 auto", 
          width: "50%", 
          height: "auto", 
          borderRadius: "10px" 
        }} 
        onMouseOver={(e) => e.target.style.opacity = "0.5"}
        onMouseOut={(e) => e.target.style.opacity = "1"} 
      />
      </a>
      <Typography align="center" variant="h6" style={{ marginTop: "10px", fontSize: "1.1rem", fontWeight: "500" }}>
      {item.comment}
    </Typography>
        </Grid>
      ))}
    </Grid>
    */}
    <IsHr />
      <p>The collective heart of IS has been beating for over four years now, 
        with <Link to="/history">more than 200 community sessions</Link> under our belts.</p>
      <p>Want to follow along with what we're doing and learning? 
      Subscribe to our Weekly Update newsletter:</p>
      <ButtondownSignup></ButtondownSignup>

      </div>

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/about">Who We Are</Link>
      </div>
    </CenteredColumn>
  </Layout>
</>
export default NamedDefault;