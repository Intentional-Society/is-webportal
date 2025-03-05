import React from "react";
import { Link } from "gatsby";
import { Card, CardContent } from "@material-ui/core";
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
    "name": "Season 4 - Q4 2021",
    "events": [
      "2021-12-29 Open social hangout time",
      "2021-12-28 Planning meeting",
      "2021-12-26 Self-organizing crewing discussion",
      "2021-12-20 Meta Meeting 4.12",
      "2021-12-19 General Session 4.12 - Relating to Wanting",
      "2021-12-13 Meta Meeting 4.11",
      "2021-12-12 General Session 4.11 - Sensing and Remembering",
      "2021-12-11 Orientation Session",
      "2021-12-06 Meta Meeting 4.10",
      "2021-12-05 General Session 4.10 - Developmental Circling",
      "2021-12-04 Orientation Session",
      "2021-11-29 Meta Meeting 4.9",
      "2021-11-28 General Session 4.9 - Free-flowing Circling",
      "2021-11-22 Meta Meeting 4.8",
      "2021-11-21 General Session 4.8 - Circling Intro",
      "2021-11-15 Meta Meeting 4.7",
      "2021-11-14 General Session 4.7 - Empathy Circling + Questions",
      "2021-11-13 Orientation Session",
      "2021-11-08 Meta Meeting 4.6",
      "2021-11-07 General Session 4.6 - Friendship & Connection Norms",
      "2021-11-06 Orientation Session",
      "2021-11-01 Meta Meeting 4.5",
      "2021-10-31 General Session 4.5 - Polarities and Tensions in Community",
      "2021-10-30 Orientation Session",
      "2021-10-25 Meta Meeting 4.4",
      "2021-10-24 General Session 4.4 - Polarities Introduction",
      "2021-10-18 Meta Meeting 4.3",
      "2021-10-17 General Session 4.3 - Meta-aware Group Reflection",
      "2021-10-16 Orientation Session",
      "2021-10-11 Meta Meeting 4.2",
      "2021-10-10 General Session 4.2 - Intentional House Party",
      "2021-10-09 Orientation Session",
      "2021-10-04 Meta Meeting 4.1",
      "2021-10-03 General Session 4.1 - Kick off Season 4!",
      "2021-10-02 Orientation Session"

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
            <Button variant="contained" color="primary" component={Link} to="/season-5">
              Next Page: Season 5
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