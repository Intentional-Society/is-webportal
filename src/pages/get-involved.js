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
      <Typography variant="h3">Ways to get involved</Typography>
      <p> </p>
      
      <Typography variant="h4">Practice Program</Typography>
      <p>If you'd like to try our relational practices, we recommend diving right in! 
        (Newcomers get a short welcome in a breakout room.) <BlurbPractice /></p>

      <Typography variant="h4">Informational Calls</Typography>
      <p>Want to more cautiously learn <i>about</i> Intentional Society before trying out 
        a practice session? This call is a friendly, casual, low-pressure 
        introduction. We'll introduce ourselves, get some 
        details on what makes Intentional Society what it is, 
        and see what resonates between us.</p>
      <p>
        Bring your video camera (phone is okay), microphone, and 
        any <Link to="/questions">questions</Link> you might have.
      </p>

      <p><BlurbInformational /></p>

      <a className={GlobalCSS.anchorOffset} id="newsletter"></a>
      <Typography variant="h4">Newsletter</Typography>
      <p>Want to follow along with what we're doing and learning? Regardless of 
        whether active participation in Intentional Society is a fit for you, 
        you're welcome to stay informed with this weekly newsletter. 
        Once each week (usually Thursday) you'll receive a short update 
        sharing about our recent experiences and pondering what's next for us.
      </p>
      <p>
        You can <a href="https://buttondown.email/intentionalsociety/archive/">browse 
        the archives here</a>. Enter your email to subscribe to Intentional Society Weekly Updates:
      </p>
      <ButtondownSignup/>
      <p>Then, don't forget to go click on the confirmation email! You won't be subscribed if you don't.</p>

      <Typography variant="h4">Twitter</Typography>
      <p>Follow <a href="https://twitter.com/IntentionalSoc">@IntentionalSoc</a> on 
        Twitter if that's your thing. Shares some newsletter content in tweet form, 
        and asks some philosophical questions. Not a nag/reminder stream. Also a handy 
        way to simply refer to Intentional Society in tweets, even if you don't follow the account.</p>

      <Typography variant="h3">Membership</Typography>
      <p>TODO: Describe the revised membership model later in January.
      </p>

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/history">History</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;