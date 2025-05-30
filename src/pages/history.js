import React from "react";
import { Link } from "gatsby";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
    "title": "Season 18 - Q2 2025",
    "events": [
      "Practice Playground",
      "The Meaning Of Being",
      "Easter Transcendence",
      "Being with Volatility",
      "Now What"
    ]
  },
  {
    "title": "Season 17 - Q1 2025",
    "events": [
      "Micro-leadership",
      "Giving & Receiving",
      "Embodied Awakening",
      "Integral Beauty",
      "10x Agency in our faces",
      "Relational Attunement",
      "Death, remembrance, purpose",
      "Intentionality in Wealth",
      "Exploring Towardness",
      "The edges of noticing",
      "Bringing desires to life",
      "North Stars 2025"
    ]
  },
  {
    "title": "Season 16 - Q4 2024",
    "events": [
      "What if...?! Finale",
      "The Good & People of IS V2",
      "Vibes, Arts, BWIA",
      "Being With What Could Be w/ Jochen",
      "w/ Faith",
      "BWIA + G&RP",
      "Vows & Quests",
      "??? (mystery)",
      "Centering fig & Ed",
      "Circling (& BWIA)",
      "Mini-Cases",
      "Maps & Pods",
      "IS seasonal all-member update"
    ]
  },
  {
    "title": "Season 15 - Q3 2024",
    "events": [
      "Where we go next",
      "Alien Invasion",
      "Daydreams",
      "Communal Reverie",
      "EGP (on collective+imaginal) plus not-EGP",
      "Mid-season Party",
      "Final pods",
      "Entanglement",
      "Skydiving",
      "Falling together anew",
      "Forming Pods",
      "Build-a-season",
      "Beginning Season 15 of Intentional Society"
    ]
  },
  {
    "title": "Season 14 - Q2 2024",
    "events": [
      "Wrap & Party",
      "EGP at IS (response requested)",
      "Garden Mapping",
      "Pods Casework #4",
      "Giving & Receiving",
      "Pods Casework #3",
      "Somatic knowing",
      "Pods Casework #2",
      "Presence and horizons",
      "Setting sail",
      "Case exploration & Flotilla organizing",
      "Restarting anew",
      "IS Season 14 Member Letter/Invitation"
    ]
  },
  {
    "title": "Season 13 - Q1 2024",
    "events": [
      "Season's End",
      "5 things",
      "Noticing",
      "Creative Practice",
      "Hearing the Good",
      "Holding Intentions",
      "Sensing shadow’s edge (Edge Exploration)",
      "The Arts in IS",
      "March dates, GRP follow-up",
      "Giving & Receiving",
      "24w5 — mixer, 15m, practice",
      "Invitation: Intentional Society membership kickoff"
    ]
  },
  {
    "title": "Season 12 - Q4 2023",
    "events": [
      "End-of-Year Celebration",
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
    ]
  },
  {
    "title": "Season 11 - Q3 2023",
    "events": [
      "Zones and Change",
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
    ]
  },
  {
    "title": "Season 10 - Q2 2023",
    "events": [
      "Season Finale",
      "Giving & Receiving Practice",
      "Doing Aliveness",
      "Alively Learning w/ Caroline A",
      "Revealing Experience",
      "T-Group Fishbowl",
      "Simple Presence",
      "Social Tooling (decision-making, retros)",
      "Crew Formation",
      "Mini-Cases",
      "Kickoff"
    ]
  },
  {
    "title": "Season 9 - Q1 2023",
    "events": [
      "Retrospective & Reunion",
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
      "Empathic Resonance"
    ]
  },
  {
    "title": "Season 8 - Q4 2022",
    "events": [
      "Improv Future-casting",
      "Relating to Stories",
      "Relating to Choice",
      "Mini-Circles",
      "Mini-Cases",
      "Exploring Relational Giving and Trust",
      "Giving & Receiving Prototype",
      "Landscapes of Care",
      "Emergence and Purpose w/ DAVP",
      "Exploring Doing",
      "Collective Pres-Tension-ing"
    ]
  },
  {
    "title": "Season 7 - Q3 2022",
    "events": [
      "Retrospection",
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
      "Kickoff: The Relational Field and Loveseat"
    ]
  },
  {
    "title": "Season 6 - Q2 2022",
    "events": [
      "Community Day",
      "CYOA Practices: Edge Case & Circling",
      "You Can Just...",
      "Yeses and Nos",
      "The Field and Slow Proposal",
      "Nominations and Circling",
      "Circling and Membership Design",
      "House Party",
      "Designing the (Working Backwards from a Star Trek) Future 1",
      "T-Group and Doing∞Being",
      "Kickoff: AR and Acceptance"
    ]
  },
  {
    "title": "Season 5 - Q1 2022",
    "events": [
      "Heavenly Glory",
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
      "Welcoming House Party"
    ]
  },
  {
    "title": "Season 4 - Q4 2021",
    "events": [
      "Open social hangout time",
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
    ]
  },
  {
    "title": "Season 3 - Q3 2021",
    "events": [
      "CP-style desire sharing for I/you/we/world",
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
    ]
  },
  {
    "title": "Season 2 - Q2 2021",
    "events": [
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
    ]
  },
  {
    "title": "Season 1 - Q1 2021",
    "events": [
      "Adult Development intro part 2",
      "Adult Development intro part 1",
      "Authentic Relating, Hotseat",
      "Glass Bead Game",
      "Empathy Circling",
      "Examining avoidance",
      "I seem, we seem",
      "Being with you, I notice",
      "Bensing and seeking",
      "Call text revised",
      "Website deployed",
      "Domain name registered"
      ]
  }
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
        Intentional Society. When I retired from my corporate career at the
        onset of the pandemic, I'd been collecting thoughts and ideas for a decade about how organizations
        function and grow, while looking for meaning, truth, and the “why?”s of life for a few decades before
        that. I'd had some transformational experiences in my personal development, and I wanted to keep
        growing, make friends on that same journey, and be of service to humanity. I wrote
         a <Link to="/thecall"> calling manifesto</Link> of 
        sorts in December 2020, and began weekly meetings of Intentional Society in January 2021.
      </p>
      <p>What followed has been a patient unfolding with many stories embedded in the journey. 
        Below you can find title-based records of weekly sessions going all the way back to the beginning.</p>
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

