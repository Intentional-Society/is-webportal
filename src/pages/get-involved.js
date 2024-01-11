import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"
import ButtondownSignup from "../components/buttondownsignup"
import BlurbInformational from "../components/blurb-informational"
import BlurbPractice from "../components/blurb-practice"
import * as GlobalCSS from "../styles/global.module.css"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h3">Open events</Typography>
      <p> </p>
      
      <Typography variant="h4">Practice Series</Typography>
      <p>If you'd like to try our relational practices, we recommend diving right in! 
        The practices differ week-by-week, and newcomers are welcome to join any session. <BlurbPractice /></p>

      <Typography variant="h4">Informational Calls</Typography>
      <p>Want to learn <i>about</i> Intentional Society, beyond trying out 
        a practice session? This call is a friendly, casual, low-pressure 
        introduction. We'll introduce ourselves, share some descriptive details 
        about the Practice Program and Intentional Society, 
        and explore your questions and curiosities.</p>

      <p><BlurbInformational />Bring your video camera (phone is okay), microphone, and 
        any <Link to="/questions">questions</Link> you might have.</p>

      <Typography variant="h4">Member Orientation Calls</Typography>
      <p>Want to get involved in more than the Practice Series? 
        Come to this to learn about membership and about the activities inside the IS member community. 
        Membership is free - it's about seeing, trusting, and building relationships each other over time.
        You can fill out the membership form (TODO: link) ahead-of-time. </p>

      <Typography variant="h3">Information streams</Typography>

      <a className={GlobalCSS.anchorOffset} id="newsletter"></a>
      <Typography variant="h4">Weekly Updates Newsletter</Typography>
      <p>Stay informed with this public weekly newsletter about what we're doing and learning. 
        Once a week (usually Thursday) you'll receive a short update 
        sharing about our recent learning and what's coming up soon. 
        You can <a href="https://buttondown.email/intentionalsociety/archive/">browse 
        the archive here</a>.
      </p>
      <p>Enter your email to subscribe to Intentional Society Weekly Updates:
      </p>
      <ButtondownSignup/>
      <p>Then, don't forget to go click on the confirmation email! You won't be subscribed if you don't.</p>

      <Typography variant="h4">Twitter</Typography>
      <p>Follow <a href="https://twitter.com/IntentionalSoc">@IntentionalSoc</a> on 
        Twitter if that's your thing. Shares some newsletter content, 
        asks a few questions, tries not to be a nag/reminder stream. Also a handy 
        way to simply refer to Intentional Society in tweets, even if you don't follow the account.</p>

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/history">History</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;