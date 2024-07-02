import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h2">Core Community</Typography>
      <p>C is for core, commons, communitas, collective, communion, culture — whatever it's called, 
        this is a space of relationship-building, belonging, acceptance, play, and exploration. 
        It is emergent, messy, and full of laughter and tenderness. We will once again 
        be meeting weekly on <b>Sundays</b> (also starting 1pm Pacific): a clear consistent heartbeat 
        of connection. Yes, we do practices here also, utilizing a living-room vibe of trust and 
        safety to go deeper than the average Practice Dojo experience. Members also lead a variety of 
        events and small in this leader-ful open-space playground collective.</p>
      
      <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSebSp8vQsfRINQhHGw83Z-AEL3CtDtdcB5Edyc4kdCAq03XEg/viewform">Read 
        more and apply here.</a> Membership is free (always has been), and the 
        light application-and-agreements membrane that defines membership exists to let us 
        create openness and safety in our private cozyweb and manage our private data sharing. If you 
        haven't been to at least one Practice Dojo session previously, please plan to attend 
        an <Link to="/get-involved#office-hours">Office Hours</Link> call for orientation purposes.</p>
        
      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        <Link to="/">Back to home page</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;