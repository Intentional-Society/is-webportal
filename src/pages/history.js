import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h3">History</Typography>

      <p>Hi, James here. I'm 
        the founder/<a href="https://workwithsource.com/what-is-source/how-initiatives-start/">source</a>/
        <a href="https://www.microsolidarity.cc/articles/2-update-2020#1-initiators">caller</a> of 
        Intentional Society, however you'd like to call it. 
        When I retired from my corporate career at the onset of the pandemic in 2020, I'd been 
        collecting thoughts and ideas for a decade about how organizations function and grow, 
        while looking for meaning, truth, and the “why?”s of life for a few decades before that. 
        I'd had some transformational times in my personal develoment, and I wanted to<br/>
        <ol>
          <li>keep growing myself</li>
          <li>make friends on that same journey</li>
          <li>be of service to humanity in some way</li>
        </ol>
      </p>
      <p>After some months of decompression and reflection, this possibility seemed more real than ever. 
        And what did I have to lose? I wrote a <Link to="/thecall">calling manifesto</Link> of sorts in 
        December, and started weekly meetings of Intentional Society in January 2021.
      </p>

      <p>The first series ended up naturally being about three months long, focused on forming up using 
        whole-group relational practices. That was great - and then we wanted to go deeper. Thus in 
        Q2 the <a href="https://buttondown.email/intentionalsociety/archive/intentional-society-launch-the-boats/">voyages
        </a> model emerged, where we made a few crews and went on a five-week sailing expedition in small 
        groups. That was great - but then we missed the wider community a bit too. Thus, our third 
        season integrates both ends of that pendulum into an intentional arc of collective 
        relationship, divergent exploration, and reconvergence.
      </p>

      <Typography variant="h4">Timeline of past meetings</Typography>
      <ul>
        <li><div>2021-07-18 General Session 3.2 - Why grow?</div></li>
        <li><div>2021-07-17 Orientation Session</div></li>
        <li><div>2021-07-11 General Session 3.1 - Welcoming, Noticing Game, Sharing</div></li>
        <li><div>2021-07-10 Orientation Session</div></li>
        <li><div>2021-07-04 Rest week</div></li>
        <li><div>2021-06-27 General Session 2.12 - T-Group</div></li>
        <li><div>2021-06-21 Meta Meeting #8</div></li>
        <li><div>2021-06-20 General Session 2.11 - T-Group</div></li>
        <li><div>2021-06-14 Meta Meeting #7</div></li>
        <li><div>2021-06-13 General Session 2.10 - Redesign + Planning + The Wave</div></li>
        <li><div>2021-06-12 Informational Session</div></li>
        <li><div>2021-06-07 Meta Meeting #6</div></li>
        <li><div>2021-06-06 General Session 2.9 - Voyage Retrospective</div></li>
        <li><div>2021-05-31 Meta Meeting #5</div></li>
        <li><div>2021-05-30 General Session 2.8 - Inquiry Spiraling</div></li>
        <li><div>2021-05-24 Meta Meeting #4</div></li>
        <li><div>2021-05-23 General Session 2.7 - One Word Turns + Voyaging 4/4</div></li>
        <li><div>2021-05-17 Meta Meeting #3</div></li>
        <li><div>2021-05-16 General Session 2.6 - Voyaging 3/4</div></li>
        <li><div>2021-05-15 Informational Session</div></li>
        <li><div>2021-05-10 Meta Meeting #2</div></li>
        <li><div>2021-05-09 General Session 2.5 - Voyaging 2/4 + Noticing Game</div></li>
        <li><div>2021-05-08 Informational Session</div></li>
        <li><div>2021-05-03 Meta Meeting #1</div></li>
        <li><div>2021-05-02 General Session 2.4 - Voyaging 1/4 + Empathy Circling</div></li>
        <li><div>2021-05-01 Informational Session</div></li>
        <li><div>2021-04-25 General Session 2.3 - Boat-building part 2</div></li>
        <li><div>2021-04-24 Informational Session</div></li>
        <li><div>2021-04-18 General Session 2.2 - Boat-building part 1</div></li>
        <li><div>2021-04-11 General Session 2.1 - Structural redesign</div></li>
        <li><div>2021-04-10 Informational Session</div></li>
        <li><div>2021-04-04 Rest week</div></li>
        <li><div>2021-03-28 General Session 1.11 - Adult Development intro part 2</div></li>
        <li><div>2021-03-27 Informational Session</div></li>
        <li><div>2021-03-21 General Session 1.10 - Adult Development intro part 1</div></li>
        <li><div>2021-03-21 Informational Session</div></li>
        <li><div>2021-03-14 General Session 1.9 - Collective Presencing</div></li>
        <li><div>2021-03-07 General Session 1.8 - Authentic Relating, Hotseat</div></li>
        <li><div>2021-03-07 Informational Session</div></li>
        <li><div>2021-02-28 General Session 1.7 - Glass Bead Game</div></li>
        <li><div>2021-02-28 Informational Session</div></li>
        <li><div>2021-02-21 General Session 1.6 - Empathy Circling</div></li>
        <li><div>2021-02-21 Informational Session</div></li>
        <li><div>2021-02-14 General Session 1.5 - DEI</div></li>
        <li><div>2021-02-07 General Session 1.4 - examining avoidance</div></li>
        <li><div>2021-02-07 Informational Session</div></li>
        <li><div>2021-01-31 General Session 1.3 - I seem, we seem</div></li>
        <li><div>2021-01-31 Informational Session</div></li>
        <li><div>2021-01-24 General Session 1.2 - being with you, I notice</div></li>
        <li><div>2021-01-24 Informational Session</div></li>
        <li><div>2021-01-17 General Session 1.1 - sensing and seeking</div></li>
        <li><div>2021-01-17 Informational Session</div></li>
        <li><div>2021-01-10 Informational Session</div></li>
        <li><div>2020-12-27 Informational Session</div></li>
        <li><div>2020-12-19 <Link to="thecall/">Call</Link> text revised</div></li>
        <li><div>2020-12-05 Website deployed</div></li>
        <li><div>2020-11-10 Domain name registered</div></li>
      </ul>

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/questions">Questions</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;