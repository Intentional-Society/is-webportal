import React from "react";
import { Link } from "gatsby";
import { Card, CardContent } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
  "name": "Season 3 - Q3 2021",
      "events": [
        "2021-09-26 Rest week",
        "2021-09-20 Meta Meeting 3.11",
        "2021-09-19 General Session 3.11 - CP-style desire sharing for I/you/we/world",
        "2021-09-13 Meta Meeting 3.10",
        "2021-09-12 General Session 3.10 - Eye-gazing + Transformation sensemaking",
        "2021-09-11 Orientation Session",
        "2021-09-06 Meta Meeting 3.9",
        "2021-09-05 General Session 3.9 - Stories cont. - responding in resonance",
        "2021-08-30 Meta Meeting 3.8",
        "2021-08-29 General Session 3.8 - Stories of perspective transformation",
        "2021-08-28 Orientation Session",
        "2021-08-23 Meta Meeting 3.7",
        "2021-08-22 General Session 3.7 - Curiosity Game + Transformations intro",
        "2021-08-21 Orientation Session",
        "2021-08-16 Meta Meeting 3.6",
        "2021-08-15 General Session 3.6 - SD stage role-playing",
        "2021-08-14 Orientation Session",
        "2021-08-09 Meta Meeting 3.5",
        "2021-08-08 General Session 3.5 - Exploring edge-finding",
        "2021-08-07 Orientation Session",
        "2021-08-02 Meta Meeting 3.4",
        "2021-08-01 General Session 3.4 - Edge Case practice again",
        "2021-07-26 Meta Meeting 3.3",
        "2021-07-25 General Session 3.3 - Prototyping new practice: Edge Case",
        "2021-07-24 Orientation Session",
        "2021-07-19 Meta Meeting 3.2",
        "2021-07-18 General Session 3.2 - Why grow?",
        "2021-07-17 Orientation Session",
        "2021-07-12 Meta Meeting 3.1",
        "2021-07-11 General Session 3.1 - Welcoming, Noticing Game, Sharing",
        "2021-07-10 Orientation Session"

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
            <Button variant="contained" color="primary" component={Link} to="/season-4">
              Next Page: Season 4
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