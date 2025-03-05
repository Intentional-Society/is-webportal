import React from "react";
import { Link } from "gatsby";
import { Card, CardContent } from "@material-ui/core";
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
    "name": "Season 12 - Q4 2023",
  "events": [
    "2023-12-31 End-of-Year Celebration",
    "2023-12-20 Garage Time",
    "2023-10-19 to 2023-12-19 IS Builder Squad weekly",
    "2023-12-18 Meta Meeting 12.11",
    "2023-12-17 Session 12.11 - Reflection, Direction, Appreciation",
    "2023-12-11 Meta Meeting 12.10",
    "2023-12-10 Session 12.10 - Nine Whys on Important Cares",
    "2023-12-04 Meta Meeting 12.9",
    "2023-12-03 Session 12.9 - Focusing, Colors & Amplification",
    "2023-12-02 Impact Practice Group",
    "2023-11-27 Meta Meeting 12.8",
    "2023-11-26 Session 12.8 - Relating to Desires",
    "2023-11-25 Orientation Session",
    "2023-11-20 Meta Meeting 12.7",
    "2023-11-19 Session 12.7 - Desire, Telephone Game & Processing",
    "2023-11-13 Meta Meeting 12.6",
    "2023-11-12 Session 12.6 - Circling",
    "2023-11-06 Meta Meeting 12.5",
    "2023-11-05 Session 12.5 - Tapping into Source",
    "2023-11-04 Orientation Session",
    "2023-10-30 Meta Meeting 12.4",
    "2023-10-29 Session 12.4 - Impact Zone Exploration",
    "2023-10-28 Core Project Exploration",
    "2023-10-23 Meta Meeting 12.3",
    "2023-10-22 Session 12.3 - Connection Zone Exploration",
    "2023-10-16 Meta Meeting 12.2",
    "2023-10-15 Session 12.2 - Support Zone Exploration",
    "2023-10-09 Meta Meeting 12.1",
    "2023-10-08 Session 12.1 - Season of Change Kickoff",
    "2023-10-07 Orientation Session"

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
            <Button variant="contained" color="primary" component={Link} to="/">
              Upcoming
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