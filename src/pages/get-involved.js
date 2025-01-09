import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"
import ButtondownSignup from "../components/buttondownsignup"
import BlurbOfficeHours from "../components/blurb-officehours"
import BlurbPractice from "../components/blurb-practice"
import * as GlobalCSS from "../styles/global.module.css"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h3">Open events</Typography>
      <p> </p>
      
      <Typography variant="h4">Practice Dojo</Typography>
      <p>If you'd like to try our relational practices, we recommend diving right in! 
        The practices differ week-by-week, and newcomers are welcome to join any session. <BlurbPractice /></p>

      <a className={GlobalCSS.anchorOffset} id="connection-calls"></a>
      <Typography variant="h4">Connection Calls</Typography>
      <p>Want to learn about Intentional Society, its history, values, and core practices? 
         Want to connect with one-or-more people of IS? This is a great entry point for new folks, 
         and can also satisfy the personal-connection prerequisite for community membership. 
         Open to all, new and familiar, with flexible agenda.</p>

      <p><BlurbOfficeHours /> Bring your video camera (phone is okay), microphone, and 
        any <Link to="/questions">questions</Link> you might have.</p>

      <Typography variant="h3">Information streams</Typography>
      <p> </p>

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