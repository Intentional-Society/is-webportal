import React from "react";
import { Link } from "gatsby";
import { Card, CardContent } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
    "name": "Season 9 - Q1 2023",
    "events": [
      "2023-04-06 S10 Design Session",
      "2023-04-03 Meta Meeting 9.13",
      "2023-04-02 Community Practice Session 9.13 - Retrospective & Reunion",
      "2023-04-01 Orientation Session",
      "2023-03-27 Meta Meeting 9.12",
      "2023-03-26 Community Practice Session 9.12 - Container Struggle",
      "2023-03-22 Circling Practice",
      "2023-03-20 Meta Meeting 9.11",
      "2023-03-19 Community Practice Session 9.11 - Giving & Receiving Practice",
      "2023-03-13 Meta Meeting 9.10",
      "2023-03-12 Community Practice Session 9.10 - What's missing?",
      "2023-03-08 Circling Practice",
      "2023-03-04 Watch Party - Rebuilding Society on Meaning",
      "2023-03-06 Meta Meeting 9.9",
      "2023-03-05 Community Practice Session 9.9 - What's real?",
      "2023-03-04 Possibility Engines Game",
      "2023-02-27 Meta Meeting 9.8",
      "2023-02-26 Community Practice Session 9.8 - Honesty & Sensitivity Dials",
      "2023-02-22 Circling Practice",
      "2023-02-21 Meta Meeting 9.7",
      "2023-02-19 Community Practice Session 9.7 - Exploring Feedback",
      "2023-02-13 Meta Meeting 9.6",
      "2023-02-12 Community Practice Session 9.6 - Fishbowl T-Groups 2",
      "2023-02-08 Circling Practice",
      "2023-02-06 Meta Meeting 9.5",
      "2023-02-05 Community Practice Session 9.5 - Fishbowl T-Groups",
      "2023-02-04 Orientation Session",
      "2023-02-03 Design for Collab Jam",
      "2023-01-30 Meta Meeting 9.4",
      "2023-01-29 Community Practice Session 9.4 - Integrity in Connections",
      "2023-01-25 Circling Practice",
      "2023-01-23 Meta Meeting 9.3",
      "2023-01-22 Community Practice Session 9.3 - Relating Languages w/ Sara N",
      "2023-01-21 Orientation Session",
      "2023-01-16 Meta Meeting 9.2",
      "2023-01-15 Community Practice Session 9.2 - Empathic Resonance",
      "2023-01-11 Circling Practice",
      "2023-01-09 Meta Meeting 9.1",
      "2023-01-08 Community Practice Session 9.1 - Kickoff",
      "2023-01-07 Orientation Session",
      "2023-01-01 New Year's Party"

    ]
  }
];

const SeasonEventsPage = () => {
  return (
    <Layout>
      <CenteredColumn>
        {/* First season expanded by default */}
        {seasons.map((season, index) => (
          <Accordion key={season.name} defaultExpanded={index === 0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">{season.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {season.events.map((event, i) => (
                  <ListItem key={i}>{event}</ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* Navigation Card */}
        <Card style={{ marginTop: "20px", textAlign: "center" }}>
          <CardContent>
            <Button variant="contained" color="primary" component={Link} to="/season-10">
              Next Page: Season 10
            </Button>
            <Button variant="outlined" color="secondary" component={Link} to="/history" style={{ marginLeft: "10px" }} onClick={() => window.history.back()}>
              Go Back
            </Button>
          </CardContent>
        </Card>
      </CenteredColumn>
    </Layout>
  );
};

export default SeasonEventsPage;