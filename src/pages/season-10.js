import React from "react";
import { Link } from "gatsby";
import { Card, CardContent } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
   "name": "Season 10 - Q2 2023",
    "events": [
      "2023-06-26 Meta Meeting 10.11",
      "2023-06-25 Community Practice Session 10.11 - Season Finale",
      "2023-06-19 Meta Meeting 10.10",
      "2023-06-18 Community Practice Session 10.10 - Giving & Receiving Practice",
      "2023-06-17 Orientation Session",
      "2023-06-12 Meta Meeting 10.9",
      "2023-06-11 Community Practice Session 10.9 - Doing Aliveness",
      "2023-06-05 Meta Meeting 10.8",
      "2023-06-04 Community Practice Session 10.8 - Alively Learning w/ Caroline A",
      "2023-05-29 Meta Meeting 10.7",
      "2023-05-28 Community Practice Session 10.7 - Revealing Experience",
      "2023-05-22 Meta Meeting 10.6",
      "2023-05-21 Community Practice Session 10.6 - T-Group Fishbowl",
      "2023-05-20 Orientation Session",
      "2023-05-15 Meta Meeting 10.5",
      "2023-05-14 Community Practice Session 10.5 - Simple Presence",
      "2023-05-09 Meta Meeting 10.4",
      "2023-05-07 Community Practice Session 10.4 - Social Tooling (decision-making, retros)",
      "2023-05-01 Meta Meeting 10.3",
      "2023-04-30 Community Practice Session 10.3 - Crew Formation",
      "2023-04-24 Meta Meeting 10.2",
      "2023-04-23 Community Practice Session 10.2 - Mini-Cases",
      "2023-04-22 Orientation Session",
      "2023-04-17 Meta Meeting 10.1",
      "2023-04-16 Community Practice Session 10.1 - Kickoff",
      "2023-04-15 Orientation Session"

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
            <Button variant="contained" color="primary" component={Link} to="/season-11">
              Next Page: Season 11
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