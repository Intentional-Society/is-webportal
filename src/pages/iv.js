import React from 'react';
import { Link } from 'gatsby';
import Typography from '@mui/material/Typography';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';
import IsHr from '../components/is-hr';

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: '5vh' }}></div>
    <CenteredColumn>
      <Typography variant="h2">Intentional Ventures</Typography>

      <p>We unlock aligned livelihood through relational, perspectival, and technical support.</p>

      <p>As of May 2025, you can learn about and connect with Intentional Ventures (IV) by:
        <ol>
          <li>Attending the open <a href="https://forum.secondrenaissance.net/t/about-the-intentional-ventures-tent/305">IV 
          Tent</a> meetings at <a href="https://secondrenaissance.net/oasis">The Oasis</a></li>
          <li>Registering your interest 
            using <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWtrt_DBkpKHgujWzlxQJJiiW466NNU28s9dAe__ujVwS9_g/viewform?usp=sharing">this 
            form</a>.</li>
          <li>Brigning questions to an <Link to="/get-involved#connection-calls">IS Connection Call</Link></li>
        </ol>
      </p>

      <p>IV's heartbeat calls happen Fridays at 9am Pacific / Noon Eastern.</p>
      
      <IsHr />
      <Typography variant="h5">The story so far</Typography>
      <p>Intentional Ventures began April 2024 with a founding team of about a dozen.</p>

      <p>After three quarters with its founding team, at the end of 2024 IV had experimentally generated revenue, established 
        key design principles, evolved a two-space structure, and added its first new (non-founding) participants. </p>
      
      <p>Inside Limicon 2025 (throughout March), some IV "exploration space" activites 
        were shared in a four-part "Build-a-thon" series:
        <ul>
          <li>Generative ideation</li>
          <li>Collaborative chemistry</li>
          <li>Venture assembly</li>
          <li>Storytelling practice</li>
        </ul>
      </p>

      <p>The "execution space" focuses on <a href="https://otherinter.net/research/squad-wealth/">Squad</a>-shaped 
         support with an "extended family" ecosystem of support 
         via awareness/perspectival reflection, technical expertise, and catalyzing capital.</p>

      <p>The "three skills" held as a baseline of Intentional Ventures participants are:</p>
      <ul>
        <li>Rationality - systematic thought and conventional professional skills</li>
        <li>Relationality - robust emotional capacity and relational agility</li>
        <li>Perspectivity - fluid perspective-taking, metasystematicity, complex systems lens</li>
      </ul>
      
      <p>Inspirations include <a href="https://www.enspiral.com/">Enspiral</a>, <a href="https://www.coralus.world/">Coralus</a>, and the 
        hypothetical <a href="https://laymanpascal.substack.com/p/the-metamodern-business-bureau-mmbb">Metamodern Business Bureau</a>.</p>

      <div style={{textAlign: 'right', marginBottom: '-25px'}}>
        <Link to="/">Back to home page</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;