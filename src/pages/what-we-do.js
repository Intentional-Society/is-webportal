import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"
import IsHr from "../components/is-hr"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
    <Typography variant="h3">What we do</Typography>

      <p>On the surface, the simple story is that we <b>talk with each another on video calls</b>.
        Our general sessions are on Sundays and run 1 hour 45 minutes long - about the length of 
        an average feature film. We greet each other and check in, get set with the day's agenda, 
        spend about an hour on our main event, spend a bit of time with “meta” perspective,
        and check out with our takeaways.
      </p>
      
      <p>Some weeks, our main activity is metaphorically assembling “around the campfire” 
        to learn and play collectively, to make sense of the world and our part in it. 
        Other times, we “voyage” in multi-week small group “boats” to explore and expand our edges. 
        Our current (third) season runs July through September 2021. 
        In it, we will start together on the beach with some culture-building and collective learning 
        before crewing up our sailing flotilla for some deeper exploration. We'll wrap up the cycle 
        by returning to the campfire and telling stories of what we've learned - and then look at 
        the meta level to iterate on the outer loop structure itself.
      </p>

      <IsHr />

      <p>At the deeper conceptual layer, what we're doing together is <b>authoring a developmental 
        community of practice with a culture of expanded awareness</b>. There's a conventional script 
        for “becoming an adult” that goes something like “finish school, get a job, get married 
        and have 2.5 kids, buy a house and then acquire more toys while climbing the corporate 
        ladder.” This also seems like a recipe for having a mid-life crisis of meaning. 
        The conventional script sells us short: we can, and do, keep developing throughout 
        our whole lives.
      </p>

      <p>How does one practice development, or build a culture around it? We think a large part of the 
        answer comes from <Link to="/resources">relational practices</Link>. A recent renaissance 
        in group practices illustrates how powerful the adoption of different norms and “rules” of 
        interaction can be. From the <a href="https://en.wikipedia.org/wiki/T-groups">T-groups</a> of 
        the 1950s, to 21st century <a href="https://www.circlingeurope.com/what-is-circling">Circling
        </a>, to the growth of <a href="https://www.authrev.org/what-is-authentic-relating">Authentic 
        Relating</a> and <a href="https://www.socialmeditation.guide/">Social Meditation</a> in
        the last decade, this movement has been growing rapidly. People around the world are discovering 
        that it's actually fairly easy to bypass the usual “how's the weather” social scripts of general 
        society with a bit of intentionality and shared agreements that create a space for deeper, 
        more meaningful connection. 
      </p>

      <IsHr />

      <p>To go even deeper into the theoretical model, 
        developmental <a href="https://en.wikipedia.org/wiki/Constructivism_(philosophy_of_education)">
        constructivism</a> is a fancy way to say that we make meaning, inside ourselves, 
        from our experiences. The field 
        of <a href="https://en.wikipedia.org/wiki/Positive_adult_development">adult 
        development</a> has shown that we can - and do - keep developing throughout our whole lives. The 
        stage models of <a href="https://en.wikipedia.org/wiki/Robert_Kegan">Robert 
        Kegan</a>, <a href="https://www.gla.global/the-glp/leadership-in-action/">Bill 
        Torbert</a>, and <a href="http://www.cook-greuter.com/Cook-Greuter%209%20levels%20paper%20new%201.1'14%2097p%5B1%5D.pdf">Susanne 
        Cook-Greuter</a> provide a coherent perspective on typical (Western-shaded) developmental proressions. 
        Off to the collective side of this domain is <a href="https://en.wikipedia.org/wiki/Spiral_Dynamics">Spiral 
        Dynamics</a>, in a lineage from Graves to Beck and Cowan to Wilber, which helps us to see and 
        make sense of the values of various political groups and social tribes in this polarized age.
      </p>

      <p>In the spirit of “<a href="https://www.sloww.co/enlightenment-chop-wood-carry-water/">chop wood, 
        carry water,</a>” the deepest summary of what we do is perhaps 
        “<b>we practice being, together</b>” - which does correspond with “talk with one another 
        on video calls” and is also something quite profound. Being and doing are 
        a <a href="https://www.ccl.org/articles/leading-effectively-articles/are-you-facing-a-problem-or-a-polarity/">
        polarity</a> which, at least in the West, has been culturally tilted towards doing since the 
        dominance of <a href="https://en.wikipedia.org/wiki/Modernity">modernity</a>. Intentional Society 
        focuses on the inner work of being, currenlty - and we keep a watchful eye on what kinds of 
        doing may be calling to us.</p>

      <p>A lot of theory and thought has gone into what we do together.
        But it’s also what people everywhere have known and done for millenia, 
        in villages, tribes, and crews of belonging and support. There is wisdom in both 
        science and woo, in the latest discoveries and in ancient traditions. We thrive
        as social, relational beings, growing in small groups of high trust - and even as
        we’re faced with global challenges that demand coordination across humanity to meet,
        we think that any future of global unity must emerge fractally
        outward from interpersonal trust and cooperation at local scale.
      </p>
      
        <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/get-involved">Get Involved!</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;