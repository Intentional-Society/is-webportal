import React from "react";
import { Link } from "gatsby";
import { Card, CardContent } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
    "name": "Season 2 - Q2 2021",
    "events": [
      "2021-07-04 Rest week",
      "2021-06-27 General Session 2.12 - T-Group",
      "2021-06-21 Meta Meeting 2.11",
      "2021-06-20 General Session 2.11 - T-Group",
      "2021-06-14 Meta Meeting 2.10",
      "2021-06-13 General Session 2.10 - Redesign + Planning + The Wave",
      "2021-06-12 Informational Session",
      "2021-06-07 Meta Meeting 2.9",
      "2021-06-06 General Session 2.9 - Voyage Retrospective",
      "2021-05-31 Meta Meeting 2.8",
      "2021-05-30 General Session 2.8 - Inquiry Spiraling",
      "2021-05-24 Meta Meeting 2.7",
      "2021-05-23 General Session 2.7 - One Word Turns + Voyaging 4/4",
      "2021-05-17 Meta Meeting 2.6",
      "2021-05-16 General Session 2.6 - Voyaging 3/4",
      "2021-05-15 Informational Session",
      "2021-05-10 Meta Meeting 2.5",
      "2021-05-09 General Session 2.5 - Voyaging 2/4 + Noticing Game",
      "2021-05-08 Informational Session",
      "2021-05-03 Meta Meeting 2.4 (first MM)",
      "2021-05-02 General Session 2.4 - Voyaging 1/4 + Empathy Circling",
      "2021-05-01 Informational Session",
      "2021-04-25 General Session 2.3 - Boat-building part 2",
      "2021-04-24 Informational Session",
      "2021-04-18 General Session 2.2 - Boat-building part 1",
      "2021-04-11 General Session 2.1 - Structural redesign",
      "2021-04-10 Informational Session"

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
            <Button variant="contained" color="primary" component={Link} to="/season-3">
              Next Page: Season 3
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