import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "10vh" }}></div>
    <CenteredColumn>
    <Typography variant="h2">Exploratory Practice Series</Typography>
      <p>With open front doors, the Practice Dojo welcomes novices and experts alike 
        to train in the varied arts of relational-developmental practices.
        This season, we welcome six guest teachers to guide us in
        exploring new-to-us awareness, relating, and embodiment tools.</p>

      <p>The Exploratory Practice Series meets on the 2nd and 4th Saturdays of April, May, and June. 
        All sessions start at 1pm Pacific Time (4pm Eastern, 8pm UTC), and usually last for 90 minutes.<br />
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScft8sEI3FuL-faqRU7w8Hp5gTrj0zePg6-bhKJM_gwXaVqVg/viewform">Sign 
        up for access here.</a></p>

      <p>
        The practice/topic lineup is: 
        <ul>
          <li>April 13 — <b>Growth as Object</b> with James Baker</li>
          <li>April 27 — <b>Dia-Logos</b> with Romeck van Zeijl (2 hours)</li>
          <li>May 11 — <b>Alexander Technique</b> with Michael Ashcroft</li>
          <li>May 25 — <b>Feldenkrais Method - Awareness through Movement</b> with Seth Dellinger (2 hours)</li>
          <li>June 8 — <b>Mettā Meditation</b> with Tasshin Fogleman</li>
          <li>June 22 — <b>Gendlin Focusing</b> with Jessica Fan</li>
        </ul>
      </p>

      <p><Link to="/">Back to home page</Link>
      </p>
    </CenteredColumn>
  </Layout>
)
export default NamedDefault;