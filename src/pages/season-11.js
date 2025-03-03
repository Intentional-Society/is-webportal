import React from "react";
import { Link } from "gatsby";
import { Card, CardContent } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
    "name": "Season 11 - Q3 2023",
    "events": [
      "2023-09-30 Orientation Session",
      "2023-09-25 Meta Meeting 11.12",
      "2023-09-24 Community Practice Session 11.12 - Zones and Change",
      "2023-09-18 Meta Meeting 11.11",
      "2023-09-17 Community Practice Session 11.11 - Why(s)?",
      "2023-09-11 Meta Meeting 11.10",
      "2023-09-10 Community Practice Session 11.10 - Giving & Receiving Practice",
      "2023-09-04 Meta Meeting 11.9",
      "2023-09-03 Community Practice Session 11.9 - Story debugging",
      "2023-08-28 Meta Meeting 11.8",
      "2023-08-27 Community Practice Session 11.8 - Sphere of awareness",
      "2023-08-25 Meta Meeting 11.7",
      "2023-08-20 Community Practice Session 11.7 - I can't believe it's not Circling",
      "2023-08-19 Orientation Session",
      "2023-08-14 Meta Meeting 11.6",
      "2023-08-13 Community Practice Session 11.6 - Circling cleanly",
      "2023-08-07 Meta Meeting 11.5",
      "2023-08-06 Community Practice Session 11.5 - Clean kata",
      "2023-08-05 Orientation Session",
      "2023-07-31 Meta Meeting 11.4",
      "2023-07-30 Community Practice Session 11.4 - Clean Language w/ Gina C",
      "2023-07-24 Meta Meeting 11.3",
      "2023-07-23 Community Practice Session 11.3 - Crewing & Relaxing",
      "2023-07-17 Meta Meeting 11.2",
      "2023-07-16 Community Practice Session 11.2 - Doing & Crewing",
      "2023-07-10 Meta Meeting 11.1",
      "2023-07-09 Community Practice Session 11.1 - Kickoff",
      "2023-07-08 Orientation Session",
      "2023-07-01 Orientation Session"

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
            <Button variant="contained" color="primary" component={Link} to="/season-12">
              Next Page: Season 12
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