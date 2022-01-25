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

      <p>The first theme ended up being about three months long, exploring connection using 
        whole-group relational practices. That was great - and then we wanted to go deeper. Thus in 
        Q2 the <a href="https://buttondown.email/intentionalsociety/archive/intentional-society-launch-the-boats/">voyages
        </a> model emerged, where we made a few crews and went on a five-week sailing expedition in small 
        groups. That was great - but then we missed the wider community a bit too. Our third 
        season wove more deliberately towards developmental practices, even 
        synthesizing <a href="https://buttondown.email/intentionalsociety/archive/intentional-society-new-practice-edge-case/">our
        own</a> with some success while gradually growing our size and cultural cohesion. Our fourth 
        season has seen a connective theme emerge - deepening our knowledge of each other, doing some 
        1-to-1 calls, and enjoying the richness of meaning in relational present-moment practices together.
      </p>

      <Typography variant="h4">Running log of recent meetings</Typography>
      <ul>
        <li><div>2022-01-24 Meta Meeting 5.4</div></li>
        <li><div>2022-01-23 General Session 5.4 - Fast-CP Reflection on IFS &amp; Anniversary Celebration</div></li>
        <li><div>2022-01-22 Orientation Session</div></li>
        <li><div>2022-01-17 Governance Design Meeting</div></li>
        <li><div>2022-01-17 Meta Meeting 5.3</div></li>
        <li><div>2022-01-16 General Session 5.3 - Deeper Parts</div></li>
        <li><div>2022-01-15 Orientation Session</div></li>
        <li><div>2022-01-10 Meta Meeting 5.2</div></li>
        <li><div>2022-01-09 General Session 5.2 - IFS Parts Intro</div></li>
        <li><div>2022-01-08 Orientation Session</div></li>
        <li><div>2022-01-03 Meta Meeting 5.1</div></li>
        <li><div>2022-01-02 General Session 5.1 - Welcoming House Party</div></li>
        <li><div>2022-01-01 Orientation Session</div></li>
      </ul>
      
      <Typography variant="h4">Timeline of 2021 meetings</Typography>
      <ul>
        <li><div>2021-12-29 Open social hangout time</div></li>
        <li><div>2021-12-28 Planning meeting</div></li>
        <li><div>2021-12-26 Self-organizing crewing discussion</div></li>
        <li><div>2021-12-20 Meta Meeting 4.12</div></li>
        <li><div>2021-12-19 General Session 4.12 - Relating to Wanting</div></li>
        <li><div>2021-12-13 Meta Meeting 4.11</div></li>
        <li><div>2021-12-12 General Session 4.11 - Sensing and Remembering</div></li>
        <li><div>2021-12-11 Orientation Session</div></li>
        <li><div>2021-12-06 Meta Meeting 4.10</div></li>
        <li><div>2021-12-05 General Session 4.10 - Developmental Circling</div></li>
        <li><div>2021-12-04 Orientation Session</div></li>
        <li><div>2021-11-29 Meta Meeting 4.9</div></li>
        <li><div>2021-11-28 General Session 4.9 - Free-flowing Circling</div></li>
        <li><div>2021-11-22 Meta Meeting 4.8</div></li>
        <li><div>2021-11-21 General Session 4.8 - Circling Intro</div></li>
        <li><div>2021-11-15 Meta Meeting 4.7</div></li>
        <li><div>2021-11-14 General Session 4.7 - Empathy Circling + Questions</div></li>
        <li><div>2021-11-13 Orientation Session</div></li>
        <li><div>2021-11-08 Meta Meeting 4.6</div></li>
        <li><div>2021-11-07 General Session 4.6 - Friendship &amp; Connection Norms</div></li>
        <li><div>2021-11-06 Orientation Session</div></li>
        <li><div>2021-11-01 Meta Meeting 4.5</div></li>
        <li><div>2021-10-31 General Session 4.5 - Polarities and Tensions in Community</div></li>
        <li><div>2021-10-30 Orientation Session</div></li>
        <li><div>2021-10-25 Meta Meeting 4.4</div></li>
        <li><div>2021-10-24 General Session 4.4 - Polarities Introduction</div></li>
        <li><div>2021-10-18 Meta Meeting 4.3</div></li>
        <li><div>2021-10-17 General Session 4.3 - Meta-aware Group Reflection</div></li>
        <li><div>2021-10-16 Orientation Session</div></li>
        <li><div>2021-10-11 Meta Meeting 4.2</div></li>
        <li><div>2021-10-10 General Session 4.2 - Intentional House Party</div></li>
        <li><div>2021-10-09 Orientation Session</div></li>
        <li><div>2021-10-04 Meta Meeting 4.1</div></li>
        <li><div>2021-10-03 General Session 4.1 - Kick off Season 4!</div></li>
        <li><div>2021-10-02 Orientation Session</div></li>
        <li><div>2021-09-26 Rest week</div></li>
        <li><div>2021-09-20 Meta Meeting 3.11</div></li>
        <li><div>2021-09-19 General Session 3.11 - CP-style desire sharing for I/you/we/world</div></li> 
        <li><div>2021-09-13 Meta Meeting 3.10</div></li>
        <li><div>2021-09-12 General Session 3.10 - Eye-gazing + Transformation sensemaking</div></li>
        <li><div>2021-09-11 Orientation Session</div></li>
        <li><div>2021-09-06 Meta Meeting 3.9</div></li>
        <li><div>2021-09-05 General Session 3.9 - Stories cont. - responding in resonance</div></li>
        <li><div>2021-08-30 Meta Meeting 3.8</div></li>
        <li><div>2021-08-29 General Session 3.8 - Stories of perspective transformation</div></li>
        <li><div>2021-08-28 Orientation Session</div></li>
        <li><div>2021-08-23 Meta Meeting 3.7</div></li>
        <li><div>2021-08-22 General Session 3.7 - Curiosity Game + Transformations intro</div></li>
        <li><div>2021-08-21 Orientation Session</div></li>
        <li><div>2021-08-16 Meta Meeting 3.6</div></li>
        <li><div>2021-08-15 General Session 3.6 - SD stage role-playing</div></li>
        <li><div>2021-08-14 Orientation Session</div></li>
        <li><div>2021-08-09 Meta Meeting 3.5</div></li>
        <li><div>2021-08-08 General Session 3.5 - Exploring edge-finding</div></li>
        <li><div>2021-08-07 Orientation Session</div></li>
        <li><div>2021-08-02 Meta Meeting 3.4</div></li>
        <li><div>2021-08-01 General Session 3.4 - Edge Case practice again</div></li>
        <li><div>2021-07-26 Meta Meeting 3.3</div></li>
        <li><div>2021-07-25 General Session 3.3 - Prototyping new practice: Edge Case</div></li>
        <li><div>2021-07-24 Orientation Session</div></li>
        <li><div>2021-07-19 Meta Meeting 3.2</div></li>
        <li><div>2021-07-18 General Session 3.2 - Why grow?</div></li>
        <li><div>2021-07-17 Orientation Session</div></li>
        <li><div>2021-07-12 Meta Meeting 3.1</div></li>
        <li><div>2021-07-11 General Session 3.1 - Welcoming, Noticing Game, Sharing</div></li>
        <li><div>2021-07-10 Orientation Session</div></li>
        <li><div>2021-07-04 Rest week</div></li>
        <li><div>2021-06-27 General Session 2.12 - T-Group</div></li>
        <li><div>2021-06-21 Meta Meeting 2.11</div></li>
        <li><div>2021-06-20 General Session 2.11 - T-Group</div></li>
        <li><div>2021-06-14 Meta Meeting 2.10</div></li>
        <li><div>2021-06-13 General Session 2.10 - Redesign + Planning + The Wave</div></li>
        <li><div>2021-06-12 Informational Session</div></li>
        <li><div>2021-06-07 Meta Meeting 2.9</div></li>
        <li><div>2021-06-06 General Session 2.9 - Voyage Retrospective</div></li>
        <li><div>2021-05-31 Meta Meeting 2.8</div></li>
        <li><div>2021-05-30 General Session 2.8 - Inquiry Spiraling</div></li>
        <li><div>2021-05-24 Meta Meeting 2.7</div></li>
        <li><div>2021-05-23 General Session 2.7 - One Word Turns + Voyaging 4/4</div></li>
        <li><div>2021-05-17 Meta Meeting 2.6</div></li>
        <li><div>2021-05-16 General Session 2.6 - Voyaging 3/4</div></li>
        <li><div>2021-05-15 Informational Session</div></li>
        <li><div>2021-05-10 Meta Meeting 2.5</div></li>
        <li><div>2021-05-09 General Session 2.5 - Voyaging 2/4 + Noticing Game</div></li>
        <li><div>2021-05-08 Informational Session</div></li>
        <li><div>2021-05-03 Meta Meeting 2.4 (first MM)</div></li>
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
        <li><div>2020-12-19 <Link to="/thecall">Call</Link> text revised</div></li>
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