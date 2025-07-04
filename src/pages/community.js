import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"
import * as GlobalCSS from "../styles/global.module.css";

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h2">Community</Typography>

      <p>Community is an overused word, but ours is a meaningful communion, 
        a space of relationship-building, belonging, acceptance, play, and exploration. 
        It is emergent, messy, and full of laughter and tenderness.</p>

      <a className={GlobalCSS.anchorOffset} id="membership"></a>
      <Typography variant="h3">Membership</Typography>
      <p>An intention is the bridge between this present moment and the future. 
        To be a member of Intentional Society is to declare your intention to 
        live life with awareness and integrity, and to contribute to the aliveness and 
        thriving of Intentional Society. By "IS" we mean that more beautiful world our hearts know is possible,
        and the community of people who together to build and become that world for ourselves and others.
      </p>

      <p>To join, <a href="https://docs.google.com/forms/d/e/1FAIpQLSebSp8vQsfRINQhHGw83Z-AEL3CtDtdcB5Edyc4kdCAq03XEg/viewform">read 
        more and apply here.</a> Membership is free (always has been), and the 
        light application-and-agreements membrane that defines membership exists to let us 
        create openness and safety in our private cozyweb and manage our private data sharing. If you 
        are a stranger to us, please plan to attend 
        a <Link to="/get-involved#connection-calls">Connection Call</Link> first.</p>

      <a className={GlobalCSS.anchorOffset} id="hub"></a>
      <Typography variant="h3">Hub Calls</Typography>
      <p> We gather by videocall weekly on <b>Sundays</b> at 1pm Pacific: a clear consistent heartbeat 
        of connection. We do new and trusty practices, we explore questions and edges, and we build 
        deep trust and relationship over time. There's a living-room vibe of familiarity and 
        safety going deeper than the average <Link to="/dojo">Practice Dojo</Link> experience.
        Varied members may spark, lead, or facilitate sessions in this leader-ful open-space playground collective.</p>
      
      <a className={GlobalCSS.anchorOffset} id="crews"></a>
      <Typography variant="h3">Crews and Pods</Typography>
      <p>Alongside and independently of our Hub congregating, we run small groups like our Pod Program,
        which gathers 3-4 people for a season of presence and support. Self-led Crews are also invited to
        self-organize for any shared purpose and duration.
      </p>
        
      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        <Link to="/">Back to home page</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;