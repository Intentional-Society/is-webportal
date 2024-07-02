import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h2">Intentional Ventures</Typography>
      <p>New as of April 2024. We intend to grow a thriving economic ecosystem that supports our material security,
        in ways that align with our values and purposes, leveraging a crucial foundation 
        of professional, relational, and developmental skills. Intentional Ventures is in 
        early-stage formation with an invite-only founding team. Inquire
        at <Link to="/get-involved#office-hours">Office Hours</Link> if you're curious.
      </p>

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        <Link to="/">Back to home page</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;