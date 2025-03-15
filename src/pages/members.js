import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h2">Community Hub</Typography>
      <p>Community members gather on Sundays for weekly calls, and/or support one another in relational "pods", 
        while forming and deepening relationships with other community members. We play together in a relational 
        sandbox of practices, explorations, creativity, and leadership development as we cultivate the kind of 
        collective culture that supports us in our "being who we want to be" into the whole of our lives.</p>
      
      <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSebSp8vQsfRINQhHGw83Z-AEL3CtDtdcB5Edyc4kdCAq03XEg/viewform">Read 
        more and apply here.</a> Membership is free (always has been), and the 
        light application-and-agreements membrane that defines membership exists to let us 
        create openness and safety in our private cozyweb and manage our private data sharing. 
        You're invited to attend a <Link to="/get-involved#connection-calls">Connection Call</Link> for 
        orientation purposes, yet if you've been to at least one Practice Dojo session previously,
        you probably have enough of the vibe to dive in if you prefer.</p>

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        <Link to="/">Back to home page</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;