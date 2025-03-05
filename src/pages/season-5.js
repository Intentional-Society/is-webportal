import React from "react";
import { Link } from "gatsby";
import { Card, CardContent } from "@material-ui/core";
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
    "name": "Season 5 - Q1 2022",
      "events": [
        "2021-04-17 Rest week",
        "2022-04-10 General Session 5.15 - Heavenly Glory",
        "2022-04-09 Orientation Session",
        "2022-04-04 Meta Meeting 5.14",
        "2022-04-03 General Session 5.14 - Relating Games",
        "2022-04-02 Orientation Session",
        "2022-03-28 Meta Meeting 5.13",
        "2022-03-27 General Session 5.13 - Contemplating Un-knowing",
        "2022-03-26 Orientation Session",
        "2022-03-25 Event: Wardley Mapping",
        "2022-03-21 Meta Meeting 5.12",
        "2022-03-20 General Session 5.12 - Case Clinic",
        "2022-03-19 Orientation Session",
        "2022-03-14 Meta Meeting 5.11",
        "2022-03-13 General Session 5.11 - Build-your-own Case Practice",
        "2022-03-12 Orientation Session",
        "2022-03-07 Meta Meeting 5.10",
        "2022-03-06 General Session 5.10 - Looking at Relational & Systemic Cases",
        "2022-03-05 Orientation Session",
        "2022-02-28 Stoa session",
        "2022-02-28 Meta Meeting 5.9",
        "2022-02-27 General Session 5.9 - Relational Cases",
        "2022-02-26 Orientation Session",
        "2022-02-21 Meta Meeting 5.8",
        "2022-02-20 General Session 5.8 - Safe to Say",
        "2022-02-19 Orientation Session",
        "2022-02-14 Meta Meeting 5.7",
        "2022-02-13 General Session 5.7 - Small+Combined Circling",
        "2022-02-07 Meta Meeting 5.6",
        "2022-02-06 General Session 5.6 - Themed Empathy Circling",
        "2022-01-31 Meta Meeting 5.5",
        "2022-01-30 General Session 5.5 - Condensing Growth Themes/Headlines",
        "2022-01-29 Orientation Session",
        "2022-01-24 Meta Meeting 5.4",
        "2022-01-23 General Session 5.4 - Fast-CP Reflection on IFS & Anniversary Celebration",
        "2022-01-22 Orientation Session",
        "2022-01-17 Governance Design Meeting 1",
        "2022-01-17 Meta Meeting 5.3",
        "2022-01-16 General Session 5.3 - Deeper Parts",
        "2022-01-15 Orientation Session",
        "2022-01-10 Meta Meeting 5.2",
        "2022-01-09 General Session 5.2 - IFS Parts Intro",
        "2022-01-08 Orientation Session",
        "2022-01-03 Meta Meeting 5.1",
        "2022-01-02 General Session 5.1 - Welcoming House Party",
        "2022-01-01 Orientation Session"

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
            <Button variant="contained" color="primary" component={Link} to="/season-6">
              Next Page: Season 6
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