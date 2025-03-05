import React from "react";
import { Link } from "gatsby";
import { Card, CardContent } from "@material-ui/core";
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
      "name": "Season 7 - Q3 2022",
    "events": [
      "2022-09-21 Practice: Circling",
      "2022-09-19 Meta Meeting 7.11",
      "2022-09-18 Community Practice Session 7.11 - Retrospection",
      "2022-09-14 Practice: Circling",
      "2022-09-12 Meta Meeting 7.10",
      "2022-09-11 Community Practice Session 7.10 - (Not) Cases",
      "2022-09-05 Meta Meeting 7.9",
      "2022-09-04 Community Practice Session 7.9 - Dancing with Scissors",
      "2022-09-03 Orientation Session",
      "2022-08-31 Practice: Circling",
      "2022-08-29 Meta Meeting 7.8",
      "2022-08-28 Community Practice Session 7.8 - Desire and Agency Games",
      "2022-08-27 Orientation Session",
      "2022-08-24 Practice: Circling",
      "2022-08-22 Meta Meeting 7.7",
      "2022-08-21 Community Practice Session 7.7 - Parts-oriented Circling",
      "2022-08-15 Meta Meeting 7.6",
      "2022-08-14 Community Practice Session 7.6 - Internal Family Systems",
      "2022-08-13 Orientation Session",
      "2022-08-08 Meta Meeting 7.5",
      "2022-08-07 Community Practice Session 7.5 - Open Session w/ Seishin",
      "2022-08-01 Meta Meeting 7.4",
      "2022-07-31 Community Practice Session 7.4 - Layered Awareness",
      "2022-07-30 Orientation Session",
      "2022-07-25 Meta Meeting 7.3",
      "2022-07-24 Community Practice Session 7.3 - Giving & Receiving w/ Mary",
      "2022-07-18 Meta Meeting 7.2",
      "2022-07-17 Community Practice Session 7.2 - Structured and Structureless",
      "2022-07-15 Governance Working Session",
      "2022-07-11 Meta Meeting 7.1",
      "2022-07-10 Community Practice Session 7.1 - Kickoff: The Relational Field and Loveseat",
      "2022-07-09 Orientation Session"

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
            <Button variant="contained" color="primary" component={Link} to="/season-8">
              Next Page: Season 8
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