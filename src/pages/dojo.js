import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h2">Practice Dojo</Typography>
      <p>We've run our <Link to="/flagship-practice-series">Flagship Practice Series</Link> and
        <Link to="/exploratory-practice-series">Exploratory Practice Series</Link>.
      </p>

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        <Link to="/">Back to home page</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;