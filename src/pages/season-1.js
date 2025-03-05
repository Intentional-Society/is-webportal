import React from "react";
import { Link } from "gatsby";
import { Card, CardContent } from "@material-ui/core";
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
    name: "Season 1 - Q1 2021",
    events: [
     "2021-04-04 Rest week",
        "2021-03-28 General Session 1.11 - Adult Development intro part 2",
        "2021-03-27 Informational Session",
        "2021-03-21 General Session 1.10 - Adult Development intro part 1",
        "2021-03-21 Informational Session",
        "2021-03-14 General Session 1.9 - Collective Presencing",
        "2021-03-07 General Session 1.8 - Authentic Relating, Hotseat",
        "2021-03-07 Informational Session",
        "2021-02-28 General Session 1.7 - Glass Bead Game",
        "2021-02-28 Informational Session",
        "2021-02-21 General Session 1.6 - Empathy Circling",
        "2021-02-21 Informational Session",
        "2021-02-14 General Session 1.5 - DEI",
        "2021-02-07 General Session 1.4 - examining avoidance",
        "2021-02-07 Informational Session",
        "2021-01-31 General Session 1.3 - I seem, we seem",
        "2021-01-31 Informational Session",
        "2021-01-24 General Session 1.2 - being with you, I notice",
        "2021-01-24 Informational Session",
        "2021-01-17 General Session 1.1 - sensing and seeking",
        "2021-01-17 Informational Session",
        "2021-01-10 Informational Session",
        "2020-12-27 Informational Session",
        "2020-12-19 Call text revised",
        "2020-12-05 Website deployed",
        "2020-11-10 Domain name registered"

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
            <Button variant="contained" color="primary" component={Link} to="/season-2">
              Next Page: Season 2
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