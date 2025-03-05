import React from "react";
import { Link } from "gatsby";
import { Card, CardContent } from "@material-ui/core";
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
    "name": "Season 8 - Q4 2022",
    "events": [
      "2022-12-31 Orientation Session",
      "2022-12-19 Meta Meeting 8.12",
      "2022-12-18 Community Practice Session 8.12 - Improv Future-casting",
      "2022-12-14 Practice: Circling",
      "2022-12-12 Meta Meeting 8.11",
      "2022-12-11 Community Practice Session 8.11 - Relating to Stories",
      "2022-12-10 Orientation Session",
      "2022-12-05 Meta Meeting 8.10",
      "2022-12-04 Community Practice Session 8.10 - Relating to Choice",
      "2022-11-30 Practice: Circling",
      "2022-11-28 Meta Meeting 8.9",
      "2022-11-27 Community Practice Session 8.9 - Mini-Circles",
      "2022-11-26 Orientation Session",
      "2022-11-21 Meta Meeting 8.8",
      "2022-11-20 Community Practice Session 8.8 - Mini-Cases",
      "2022-11-14 Meta Meeting 8.7",
      "2022-11-13 Community Practice Session 8.7 - Exploring Relational Giving and Trust",
      "2022-11-12 Orientation Session",
      "2022-11-09 Practice: Circling",
      "2022-11-07 Meta Meeting 8.6",
      "2022-11-06 Community Practice Session 8.6 - Giving & Receiving Prototype",
      "2022-11-05 Practice Design Session",
      "2022-10-31 Meta Meeting 8.5",
      "2022-10-30 Community Practice Session 8.5 - Landscapes of Care",
      "2022-10-29 Orientation Session",
      "2022-10-24 Meta Meeting 8.4",
      "2022-10-23 Community Practice Session 8.4 - Emergence and Purpose w/ DAVP",
      "2022-10-17 Meta Meeting 8.3",
      "2022-10-16 Community Practice Session 8.3 - Exploring Doing",
      "2022-10-15 Orientation Session",
      "2022-10-10 Meta Meeting 8.2",
      "2022-10-09 Community Practice Session 8.2 - Collective Pres-Tension-ing",
      "2022-10-08 Event: House Party Social",
      "2022-10-05 Practice: Circling",
      "2022-10-04 Meta Meeting 8.1",
      "2022-10-02 Community Practice Session 8.1 - Kickoff",
      "2022-10-01 Orientation Session"

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
            <Button variant="contained" color="primary" component={Link} to="/season-9">
              Next Page: Season 9
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