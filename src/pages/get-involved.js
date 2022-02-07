import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"
import ButtondownSignup from "../components/buttondownsignup"
import ZoomlinkOrientation from "../components/zoomlink-orientation"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h3">Ways to get involved</Typography>
      <p> </p>

      <Typography variant="h4">Orientation Calls</Typography>
      <p>This is the place to dive in! These are a friendly, casual, low-pressure 
        introduction to Intentional Society. We'll introduce ourselves, get some 
        background on the design of IS, and share about what to expect in later 
        meetings. Interested attendees can then get the private link to the next day's
        general session. Bring your video camera (phone is okay), microphone, and 
        any <Link to="/questions">questions</Link> you have.
      </p>

      <p><ZoomlinkOrientation /></p>

      <Typography variant="h4">Newsletter</Typography>
      <p>Want to follow along with what we're doing and learning? Regardless of 
        whether particiating in Intentional Society is a fit for you and your 
        life circumstances, you're welcome to stay informed and learn vicariously. 
        Each week (usually on Wednesday or Thursday) you'll receive one update 
        sharing about our experience the prior Sunday and what's coming next.
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
      <p>Right now membership means "regular participant" - we're not formal about it. 
        People who have attended an orientation call and a general session receive 
        access to our internal mailing list and our community Discord server.
      </p>

      <Typography variant="h4">General Sessions</Typography>
      <p>These meetings are the main heartbeat of <Link to="/what-we-do">what we do</Link> in Intentional Society. 
        These run three-month "seasons" with one quarterly week off.
        Don't worry if you miss the kick-off - we have easy on-ramps throughout 
        the whole cycle, so you can join in at the right time for you.
      </p>
      <p>General sessions happen on Sundays, 1:00-2:45pm Pacific Standard Time (4pm Eastern, 9pm UTC).
        (Once again, the meeting link is private and provided after an orientation call.)
      </p>

      <p>Our <Link to="/history">historical timeline</Link> contains a record of our meetings and topics.</p>

      <Typography variant="h4">Meta Meetings</Typography>
      <p>We include "meta time" in some of our general sessions, but this is where 
        further behind-the-scenes steering, strategy, and governance support happen. 
        Attendence is open to any member, as we work "with the garage door open".
        These currently happen on Mondays, 1pm Pacific Standard Time (4pm Eastern, 9pm UTC) 
        but occasionally bounce around to different times.
      </p>

      <Typography variant="h4">One-to-one Connections</Typography>
      <p>Opt-in self-led contacts and calls between Intentional Society members outside of our sessions. Get to know 
        some folks better and hear the stories behind the faces.
      </p>

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/history">History</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;