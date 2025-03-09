import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import IsHr from "../components/is-hr"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h2">Practice Dojo</Typography>
      <p>With open front doors, the Practice Dojo is a skill-building space welcoming novices and 
        experts alike to train in a variety of developmental-relational practices:
        <ul>
          <li><b>developmental</b> grows and shifts your perspective-taking capacity</li>
          <li><b>relational</b> is caring interactive presence with joint attention and reflection</li>
          <li><b>practice</b> is participatory enactment of a way-of-being, shifting how/who  we are</li>
        </ul></p>

      <p>Spun out in 2024 with the debut of the IS <Link to="/developmental-practice-series">Developmental 
      Practice Series</Link>, followed by an <Link to="/exploratory-practice-series">Exploratory 
      Practice Series</Link> and (TODO link) Being With It All.
      </p>
      <p>2025 has begun with <a href="https://www.limicon2025.com/">Limicon 2025</a> and might next 
      head into another iteration of our developmental series.</p>

      <IsHr />

      <p>Why dojo? The "<a href="https://en.wikipedia.org/wiki/Dojo">dojo</a>" metaphor helps transmit 
        the nature of this practice space: 
        it is a programmatic facilitated space of immersive experiential learning and transformative growth. 
        From the Japanese (traceable to Sanskrit), it translates literally as "place of the way" with 
        a <a href="https://www.ijf.org/news/show/the-dojo-a-place-of-study-and-practice">lineage</a> of 
        rich meaning and many applicable connotations. (The closest western-flavored metaphors might be 
        "<a href="https://en.wikipedia.org/wiki/Gymnasium_(ancient_Greece)">gymnasium</a>" or "(dance) studio".)</p>

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        <Link to="/">Back to home page</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;