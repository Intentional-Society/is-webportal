import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import IsHr from "../components/is-hr"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"
import BlurbPractice from "../components/blurb-practice"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h2">Practice Dojo</Typography>
      <p>With open front doors, the Practice Dojo is a skill-building space welcoming novices and 
        experts alike to train in a variety of <i>developmental-relational practices</i>.
        <ul>
          <li><b>developmental</b> grows and shifts your perspective-taking capacity</li>
          <li><b>relational</b> is caring interactive presence with joint attention and reflection</li>
          <li><b>practice</b> is participatory enactment of a way-of-being, shifting how/who  we are</li>
        </ul></p>

      <IsHr />
      <Typography variant="h5">What's happening now</Typography>
      <p><BlurbPractice /></p>

      <IsHr />
      <Typography variant="h5">History</Typography>
      <p>The Practice Dojo became its own space in 2024 with the debut of the IS <Link to="/developmental-practice-series">
      Developmental Practice Series</Link>, followed by an Exploratory Practice Series tour and the heartfelt 
      "Being With It All" series..</p>
      <p>We were present at <Link to="https://www.limicon2025.com/">Limicon 2025</Link> throughout March 2025. 
      Now, our upcoming series will be another iteration of our Developmental Series, with dates to be determined.
      </p>

      <IsHr />
      <Typography variant="h5">Further geekery</Typography>
      <p>Why dojo? The "<a href="https://en.wikipedia.org/wiki/Dojo">dojo</a>" metaphor helps transmit 
        the nature of this practice space: 
        it is a programmatic facilitated space of immersive experiential learning and transformative growth. 
        From the Japanese (traceable to Sanskrit), it translates literally as "place of the way" with 
        a <a href="https://www.ijf.org/news/show/the-dojo-a-place-of-study-and-practice">lineage</a> of 
        rich meaning and many applicable connotations. (The closest western-flavored metaphors might be 
        "<a href="https://en.wikipedia.org/wiki/Gymnasium_(ancient_Greece)">gymnasium</a>" or "(dance) studio".)</p>

      <p>What counts as a developmental-relational practice?</p>
      <p>Category-anchoring practice examples:
      <ul>
        <li>T-Group (focus on me)</li>
        <li>Circling (focus on relating me-and-you)</li>
        <li>Collective Presencing (focus on we)</li>
        <li>Case Clinic (focus on relating me-and-world)</li>
      </ul>
      </p>
      <p>More practices that easily belong:
        <ul><li>Empathy Circling, Dialogos (Vervaeke-Sengstock), Bohm Dialogue, CP-adjacent such as [Communal Reverie, Ephemeral Group Process, Inquiry Spiraling], Authentic Relating Games, some Liberating Structures such as [Nine Whys and Troika Consulting], Sacred Ground Experience, Uncertainment, Grief Circles, Glass Bead Game</li></ul>
      </p>
      <p>More practices that can/could sometimes belong with appropriate relational holding:
        <ul><li>Clean/Pure Coaching, Parts Work (IFS), Ideal Parent Figure Protocol, Appreciative Inquiry, Death Cafe, Imaginal work, Shadow work, Open Stance circles, OANMarket/Gifting practice</li></ul>
        </p>

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        <Link to="/">Back to home page</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;