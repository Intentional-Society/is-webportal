import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"
import IsHr from "../components/is-hr"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h2">Intentional Ventures</Typography>

      <p>We unlock successful economics for meaningful livelihoods through relational support.</p>

      <p>After three quarters with its founding team, at the end of 2024 IV has made its first revenue, established 
        key structures and principles, and added its first new (non-founding) participants. 
        Entry is invitation-only, and we maintain an informal waitlist. 
        To be added to the waitlist, come chat about it at a <Link to="/get-involved#connection-calls">Connection Call</Link> or 
        talk to any participant.</p>
      
      <p>The "space one" (exploration) of IV is being showcased in a four-part "Build-a-thon" 
        series inside Limicon 2025. Its parts are:</p>
      <ul>
        <li>Generative ideation</li>
        <li>Collaborative chemistry</li>
        <li>Venture assembly</li>
        <li>Storytelling practice</li>
      </ul>

      <p>Space two (execution) focuses on <a href="https://otherinter.net/research/squad-wealth/">Squad</a> support 
        through awareness/perspectival support, technical expertise, and capital enablement.</p>

      <p>IV's heartbeat calls happen Fridays at 9am Pacific / Noon Eastern.</p>
      
      <IsHr />
      <Typography variant="h5">Design</Typography>
      <p>Created April 2024 with a founding team of about a dozen.
      </p>

      <p>The "three skills" held as a baseline of Intentional Ventures participants are:</p>
      <ul>
        <li>Rationality - systematic thought and conventional professional skills</li>
        <li>Relationality - robust emotional capacity and relational agility</li>
        <li>Perspectivity - fluid perspective-taking, metasystematicity, complex systems lens</li>
      </ul>
      
      <p>Inspirations include <a href="https://www.enspiral.com/">Enspiral</a>, <a href="https://www.coralus.world/">Coralus</a>, and the 
        hypothetical <a href="https://laymanpascal.substack.com/p/the-metamodern-business-bureau-mmbb">Metamodern Business Bureau</a>.</p>

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        <Link to="/">Back to home page</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;