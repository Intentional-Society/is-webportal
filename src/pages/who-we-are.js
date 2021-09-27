import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"
import IsHr from "../components/is-hr"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
    <Typography variant="h3">Who we are</Typography>

      <StaticImage src="../../static/images/wave-to-internet.jpg"
        loading="eager" alt="Us waving to the internet"
        style={{float:"right", maxWidth: "50%", margin: "40px 0px 10px 4vw"}}/>
      
      <p>We are a geographically distributed community of seekers and friends, connecting 
        face-to-face via video calls. We connect and reflect together in relationship 
        as a catalyst to self-development, increased awareness, greater integrity. 
        We relish our diversity across gender, generation, nation, ethnicity, 
        religious (or non-) background, socioeconomic status, and other perspectives increasingly. 
        Some of us bring backgrounds in various related fields or scenes: 
        adult development psychology, 
        relational practices (e.g. Authentic Relating, Circling, Collective Presencing), 
        and the "sensemaking web" (e.g. Game B, Integral, Metamodernism).
        Regardless, all of us are united in one thing above all else: seeking to grow.
      </p>

      <p>Our values orient around <i>awareness</i> and <i>acceptance</i> as the big themes. 
        Awareness means consciousness and attention: taking the "balcony view" 
        perspective on ourselves and on the people and systems we're intereacting with. 
        Acceptance means facing reality - being able to be with what is, as it is, without 
        deceiving ourselves. From awareness and acceptance flow greater capacity for 
        compassion, empathy, and our ability to hold our intentions as objects of reflection.
      </p>

      <p>Other values we've named are: Authenticity, honesty, adventure, 
        perspective-taking, reflection, learning, seeking, earnestness, paradox, connection, 
        friendliness, play, kindness, curiosity, goodwill, inclusion, drive, balance, integration</p>

      <IsHr />

      <p>Who and what makes a good "fit" within Intentional Society? The cornerstone of our culture
        is first and foremost a desire to grow. It also takes an attitude of openness, 
        humility, and of respect toward every human and the things that we can learn from 
        interacting with them. We don't teach each other as instructors or lecturers, but 
        rather reflect our experience of being with each other. When reflected in an 
        honest and compassionate way, we are able self-teachers with socially-expanded insight.
      </p>

      <p>Many new members thus far have come in with a high degree of emotional self-awareness 
        and "cognitive de-fusion," having been on their own developmental journeys for some 
        time already. This seems helpful but not essential, and we haven't established a 
        concrete minimum age or maturity level for membership yet. If someone is looking 
        for a bandwagon to just jump on wholeheartedly, this isn't it. Some level of 
        "self-authorship" - defining one's self and values independently of the social 
        context in which one grew up - seems necessary to get traction on further development.
      </p>

      <p>Lastly, most of us have a fairly high degree of tolerance for nebulosity, uncertainty, 
        and abstraction. We're making this up as we go, creating just-in-time structure as we 
        need it. Sometimes we lean into the not-knowing - playing and sensing without pre-selecting 
        a norm, so that we can feel into the desires and intentions we bring to a domain rather 
        than relying on conventional or implicit norms and expectations.
      </p>

      <p>If you're feeling any <a href="https://en.wikipedia.org/wiki/Impostor_syndrome">imposter 
        syndrome</a> or are worried about whether you're "enough"&#8230; please notice that 
        fear, and know that we hope you can move past it! Come check out 
        a no-pressure <Link to="/get-involved">orientation call</Link> to dip your toe into the 
        water.</p>

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/what-we-do">What We Do</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;