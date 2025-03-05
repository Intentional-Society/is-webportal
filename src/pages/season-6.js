import React from "react";
import { Link } from "gatsby";
import { Card, CardContent } from "@material-ui/core";
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
     "name": "Season 6 - Q2 2022",
    "events": [
      "2022-07-03 Rest week",
      "2022-06-27 Meta Meeting 6.10",
      "2022-06-26 General Session 6.10 - Community Day",
      "2022-06-20 Meta Meeting 6.9",
      "2022-06-19 General Session 6.9 - CYOA Practices: Edge Case & Circling",
      "2022-06-17 Work Party",
      "2022-06-13 Meta Meeting 6.8",
      "2022-06-12 General Session 6.8 - You Can Just...",
      "2022-06-11 Orientation Session",
      "2022-06-11 Event: Designing the Future 3",
      "2022-06-06 Meta Meeting 6.7",
      "2022-06-05 General Session 6.7 - Yeses and Nos",
      "2022-05-30 Meta Meeting 6.6",
      "2022-05-29 General Session 6.6 - The Field and Slow Proposal",
      "2022-05-28 Orientation Session",
      "2022-05-23 Meta Meeting 6.5",
      "2022-05-22 General Session 6.5 - Nominations and Circling",
      "2022-05-21 Event: Designing the Future 2",
      "2022-05-16 Meta Meeting 6.4",
      "2022-05-15 General Session 6.4 - Circling and Membership Design",
      "2022-05-09 Meta Meeting 6.3",
      "2022-05-08 General Session 6.3 - House Party",
      "2022-05-05 Event: Designing the (Working Backwards from a Star Trek) Future 1",
      "2022-05-02 Meta Meeting 6.2",
      "2022-05-01 General Session 6.2 - T-Group and Doing∞Being",
      "2022-04-30 Orientation Session",
      "2022-04-25 Meta Meeting 6.1",
      "2022-04-24 General Session 6.1 - Kickoff: AR and Acceptance",
      "2022-04-23 Orientation Session"

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
            <Button variant="contained" color="primary" component={Link} to="/season-7">
              Next Page: Season 7
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