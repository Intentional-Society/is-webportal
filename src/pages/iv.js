import React from 'react';
import { Link } from 'gatsby';
import Typography from '@mui/material/Typography';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';
import IsHr from '../components/is-hr';

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: '30px' }}></div>
    <CenteredColumn>
      <Typography variant="h2">Intentional Ventures</Typography>

      <p>The first goal of IV is to <b>catalyze aligned livelihoods</b> for individuals in 
        service to human thriving. The second goal of IV is to create a <b>relational economic web</b> of 
        abundance with clan / tribe / village-like bonds of support. These two goals are interdependent 
        and equal in value. Livelihood is the more tangible individualized task, around which the 
        more nebulous relational web layer hopes to cohere.</p>

      <p>Intentional Ventures is by invitation only. We onboarded a new cohort in early 2026, and do 
        not anticipate adding more participants for the near-to-medium-term future.
        However, we're still always interested in hearing from like-minded folks. You 
        can <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWtrt_DBkpKHgujWzlxQJJiiW466NNU28s9dAe__ujVwS9_g/viewform?usp=sharing">register
        your interest</a> or bring questions to an <Link to="/get-involved#connection-calls">IS Connection Call</Link>.</p>

      <p>IV heartbeat calls happen Fridays at 9am Pacific / Noon Eastern.</p>

      <p>The capital pool for IV investments intends to open to external donors in 2026.</p>
      
      <IsHr />
      <Typography variant="h4">History: The story so far</Typography>
      <p>Intentional Ventures began April 2024 with a founding team of about a dozen.</p>

      <p>After three quarters with its founding team, at the end of 2024 IV had experimentally generated revenue, established 
        key design principles, evolved a two-space structure, and added its first new (non-founding) participants. </p>
      
      <p>Inside Limicon 2025 (throughout March), some IV "exploration space" activities 
        were shared in a four-part "Build-a-thon" series:
        <ul>
          <li>Generative ideation</li>
          <li>Collaborative chemistry</li>
          <li>Venture assembly</li>
          <li>Storytelling practice</li>
        </ul>
      </p>

      <p>The functional alchemy of IV works via the management-and-integration of the polarity of 
        inner work and outer work, all supported by relationality. In the inner dimension, IV provides 
        psychological (inner) support via all members (via spotlights and other interactions), contributed 
        from everyone’s self-led time and energy. Broad relationality (to parts/I, group/we, system/world) 
        supports our “three skills” of the rational-professional, interpersonal, and perspectival-developmental capabilities 
        needed to “win at Game A while living Game B”.</p>

      <p>Those “three skills” held as a baseline of Intentional Ventures participants are:</p>
      <ul>
        <li>Rational-professional skill: systematic thought, self-management, conventional professional skills</li>
        <li>Interpersonal skill: self-awareness, communication, robust emotional capacity and relational agility</li>
        <li>Perspectival-developmental skill: fluid perspective-taking, complexity lens, metasystematicity</li>
      </ul>
      
      <p>Inspirations include <a href="https://www.enspiral.com/">Enspiral</a>, <a href="https://www.coralus.world/">Coralus</a>, and the 
        hypothetical <a href="https://laymanpascal.substack.com/p/the-metamodern-business-bureau-mmbb">Metamodern Business Bureau</a>.</p>

      <div style={{textAlign: 'right', marginBottom: '-25px'}}>
        Next page: <Link to="/friends">Friends</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;