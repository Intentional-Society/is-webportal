import React from "react";
import { Link } from "gatsby";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
    title: "Season 12 - Q4 2023",
    events: ["End-of-Year Celebration",
"IS Builder Squad",
  "Reflection, Direction, Appreciation",
  "Nine Whys on Important Cares",
  "Focusing, Colors & Amplification",
  "Relating to Desires",
  "Desire, Telephone Game & Processing",
  "Circling",
  "Tapping into Source",
  "Impact Zone Exploration",
"Core Project Exploration",
  "Connection Zone Exploration",
  "Support Zone Exploration",
  "Season of Change Kickoff"

    ],
    link: "/season-12",
  },
  {
    title: "Season 11 - Q3 2023",
    events: ["Zones and Change",
  "Why(s)?",
  "Giving & Receiving Practice",
  "Story debugging",
  "Sphere of awareness",
  "I can't believe it's not Circling",
  "Circling cleanly",
  "Clean kata",
  "Clean Language w/ Gina C",
  "Crewing & Relaxing",
  "Doing & Crewing",
  "Kickoff"
    ],
    link: "/season-11",
  },
  {
    title: "Season 10 - Q2 2023",
    events: ["Season Finale",
  "Giving & Receiving Practice",
  "Doing Aliveness",
  "Alively Learning w/ Caroline A",
  "Revealing Experience",
  "T-Group Fishbowl",
  "Simple Presence",
  "Social Tooling (decision-making, retros)",
  "Crew Formation",
  "Mini-Cases",
  "Kickoff"],
    link: "/season-10",
  },
  {
    title: "Season 9 - Q1 2023",
    events: ["Retrospective & Reunion",
"Container Struggle",
"Giving & Receiving Practice",
"What's missing?",
"Watch Party - Rebuilding Society on Meaning",
"What's real?",
"Possibility Engines Game",
"Honesty & Sensitivity Dials",
"Exploring Feedback",
"Fishbowl T-Groups 2",
"Fishbowl T-Groups",
"Design for Collab Jam",
"Integrity in Connections",
"Relating Languages w/ Sara N",
"Empathic Resonance",],
    link: "/season-9",
  },
  {
    title: "Season 8 - Q4 2022",
    events: ["Improv Future-casting",
"Relating to Stories",
"Relating to Choice",
"Mini-Circles",
"Mini-Cases",
"Exploring Relational Giving and Trust",
"Giving & Receiving Prototype",
"Landscapes of Care",
"Emergence and Purpose w/ DAVP",
"Exploring Doing",
"Collective Pres-Tension-ing",],
    link: "/season-8",
  },
  {
    title: "Season 7 - Q3 2022",
    events: ["Retrospection",
"(Not) Cases",
"Dancing with Scissors",
"Desire and Agency Games",
"Parts-oriented Circling",
"Internal Family Systems",
"Open Session w/ Seishin",
"Layered Awareness",
"Giving & Receiving w/ Mary",
"Structured and Structureless",
"Governance Working Session",
"Kickoff: The Relational Field and Loveseat"],
    link: "/season-7",
  },
  {
    title: "Season 6 - Q2 2022",
    events: ["Community Day",
"CYOA Practices: Edge Case & Circling",
"You Can Just...",
"Yeses and Nos",
"The Field and Slow Proposal",
"Nominations and Circling",
"Circling and Membership Design",
"House Party",
"Designing the (Working Backwards from a Star Trek) Future 1",
"T-Group and Doing∞Being",
"Kickoff: AR and Acceptance"],
    link: "/season-6",
  },
  {
    title: "Season 5 - Q1 2022",
    events: ["Heavenly Glory",
"Relating Games",
"Contemplating Un-knowing",
"Wardley Mapping",
"Case Clinic",
"Build-your-own Case Practice",
"Looking at Relational & Systemic Cases",
"Relational Cases",
"Safe to Say",
"Small+Combined Circling",
"Themed Empathy Circling",
"Condensing Growth Themes/Headlines",
"Fast-CP Reflection on IFS & Anniversary Celebration",
"Deeper Parts",
"IFS Parts Intro",
"Welcoming House Party"],
    link: "/season-5",
  },
  {
    title: "Season 4 - Q4 2021",
    events: ["Open social hangout time",
      "Self-organizing crewing discussion",
      "Relating to Wanting",
"Sensing and Remembering",
"Developmental Circling",
"Free-flowing Circling",
"Circling Intro",
"Empathy Circling + Questions",
"Friendship & Connection Norms",
"Polarities and Tensions in Community",
"Polarities Introduction",
"Meta-aware Group Reflection",
"Intentional House Party",
"Kick off Season 4!"
,],
    link: "/season-4",
  },
  {
    title: "Season 3 - Q3 2021",
    events: ["CP-style desire sharing for I/you/we/world",
"Eye-gazing + Transformation sensemaking",
"Stories cont. - responding in resonance",
"Stories of perspective transformation",
"Curiosity Game + Transformations intro",
"SD stage role-playing",
"Exploring edge-finding",
"Edge Case practice again",
"Prototyping new practice: Edge Case",
"Why grow?",
"Welcoming, Noticing Game, Sharing"
],
    link: "/season-3",
  },
  {
    title: "Season 2 - Q2 2021",
    events: [
"T-Group",
"Redesign + Planning + The Wave",
"Voyage Retrospective",
"Inquiry Spiraling",
"One Word Turns + Voyaging 4/4",
"Voyaging 3/4",
"Voyaging 2/4 + Noticing Game",
"Voyaging 1/4 + Empathy Circling",
"Boat-building part 2",
"Boat-building part 1",
"Structural redesign"
],
    link: "/season-2",
  },
  {
    title: "Season 1 - Q1 2021",
    events: ["Adult Development intro part 2",
"Adult Development intro part 1",
"Authentic Relating, Hotseat",
"Glass Bead Game",
"Empathy Circling",
"Examining avoidance",
"I seem, we seem",
"being with you, I notice",
"Bensing and seeking",
"Call text revised",
"Website deployed",
"Domain name registered"

      ],
    link: "/season-1",
  },
];

const HistoryPage = () => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h3">History</Typography>
      <p>
        Hi, James here. I'm the founder/
        <a href="https://workwithsource.com/what-is-source/how-initiatives-start/">source</a>/
        <a href="https://www.microsolidarity.cc/articles/2-update-2020#1-initiators">caller</a> of
        Intentional Society, however you'd like to call it. When I retired from my corporate career at the
        onset of the pandemic, I'd been collecting thoughts and ideas for a decade about how organizations
        function and grow, while looking for meaning, truth, and the “why?”s of life for a few decades before
        that. I'd had some transformational experiences in my personal development, and I wanted to keep
        growing, make friends on that same journey, and be of service to humanity. I wrote a <Link to="/thecall">calling manifesto</Link>  
        of sorts in December 2020, and began weekly meetings of Intentional Society in January 2021. Beginning
        with a relational practices tour and a healthy dose of "but what is it really," we evolved into a seasonal cycle,
        exploring and optimizing for relational development, eventually adding membership, and now in 2024 reconfiguring
        our virtual spaces as we launch our first public practice program.
      </p>
      <p>Below you can find records of weekly topics and events spanning our first twelve seasons.</p>
      <Typography variant="h4">Historical Event Log</Typography>
      <Grid container spacing={1} direction="column" style={{ maxWidth: "800px", margin: "0 auto" }}>
      {seasons.map((season, index) => (
        <Grid item xs={12} sm={12} md={12} lg={12} key={index} style={{ paddingBottom: "8px" }}>
        <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">{season.title}</Typography>
                </AccordionSummary>
              <AccordionDetails>
                <div style={{ width: "100%" }}>
                  <ul>
                    {season.events.map((event, i) => (
                      <li key={i}>{event}</li>
                    ))}
                  </ul>
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </CenteredColumn>
  </Layout>
);

export default HistoryPage;

