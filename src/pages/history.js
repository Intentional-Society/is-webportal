import React from "react";
import { Link } from "gatsby";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const seasons = [
  {
    title: "Season 12 - Q4 2023",
    events: [
      "2023-12-31 End-of-Year Celebration",
      "2023-12-20 Garage Time",
      "2023-10-19 through 2023-12-19 IS Builder Squad weekly",
    ],
    link: "/season-12",
  },
  {
    title: "Season 11 - Q3 2023",
    events: [
      "2023-09-30 Orientation Session",
      "2023-09-25 Meta Meeting 11.12",
      "2023-09-24 Community Practice Session 11.12 - Zones and Change",
    ],
    link: "/season-11",
  },
  {
    title: "Season 10 - Q2 2023",
    events: [ "2023-06-26 Meta Meeting 10.11",
      "2023-06-25 Community Practice Session 10.11 - Season Finale",
      "2023-06-19 Meta Meeting 10.10",],
    link: "/season-10",
  },
  {
    title: "Season 9 - Q1 2023",
    events: ["2023-04-06 S10 Design Session",
      "2023-04-03 Meta Meeting 9.13",
      "2023-04-02 Community Practice Session 9.13 - Retrospective & Reunion",],
    link: "/season-9",
  },
  {
    title: "Season 8 - Q4 2022",
    events: ["2022-12-31 Orientation Session",
      "2022-12-19 Meta Meeting 8.12",
      "2022-12-18 Community Practice Session 8.12 - Improv Future-casting",
      "2022-12-14 Practice: Circling",],
    link: "/season-8",
  },
  {
    title: "Season 7 - Q3 2022",
    events: ["2022-09-21 Practice: Circling",
      "2022-09-19 Meta Meeting 7.11",
      "2022-09-18 Community Practice Session 7.11 - Retrospection",],
    link: "/season-7",
  },
  {
    title: "Season 6 - Q2 2022",
    events: ["2022-07-03 Rest week",
      "2022-06-27 Meta Meeting 6.10",
      "2022-06-26 General Session 6.10 - Community Day",],
    link: "/season-6",
  },
  {
    title: "Season 5 - Q1 2022",
    events: ["2021-04-17 Rest week",
        "2022-04-10 General Session 5.15 - Heavenly Glory",
        "2022-04-09 Orientation Session",],
    link: "/season-5",
  },
  {
    title: "Season 4 - Q4 2021",
    events: ["2021-12-29 Open social hangout time",
        "2021-12-28 Planning meeting",
        "2021-12-26 Self-organizing crewing discussion",],
    link: "/season-4",
  },
  {
    title: "Season 3 - Q3 2021",
    events: ["2021-09-26 Rest week",
        "2021-09-20 Meta Meeting 3.11",
        "2021-09-19 General Session 3.11 - CP-style desire sharing for I/you/we/world",],
    link: "/season-3",
  },
  {
    title: "Season 2 - Q2 2021",
    events: ["2021-07-04 Rest week",
        "2021-06-27 General Session 2.12 \n\n\n\n\n\n-T-Group",
        "2021-06-21 Meta Meeting 2.11",],
    link: "/season-2",
  },
  {
    title: "Season 1 - Q1 2021",
    events: ["2021-04-04 Rest week",
        "2021-03-28 General Session 1.11 - Adult Development intro part 2",
        "2021-03-27 Informational Session",
      ],
    link: "/season-1",
  },
];

const HistoryPage = () => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h3">History</Typography>
      <p>
        Hi, James here. I'm the founder/
        <a href="https://workwithsource.com/what-is-source/how-initiatives-start/">source</a>/
        <a href="https://www.microsolidarity.cc/articles/2-update-2020#1-initiators">caller</a> of
        Intentional Society, however you'd like to call it. When I retired from my corporate career at the
        onset of the pandemic, I'd been collecting thoughts and ideas for a decade about how organizations
        function and grow, while looking for meaning, truth, and the “why?”s of life for a few decades before
        that. I'd had some transformational experiences in my personal development, and I wanted to keep
        growing, make friends on that same journey, and be of service to humanity. I wrote a <Link to="/thecall">calling manifesto</Link>  
        of sorts in December 2020, and began weekly meetings of Intentional Society in January 2021. Beginning
        with a relational practices tour and a healthy dose of "but what is it really," we evolved into a seasonal cycle,
        exploring and optimizing for relational development, eventually adding membership, and now in 2024 reconfiguring
        our virtual spaces as we launch our first public practice program.
      </p>
      <p>Below you can find records of weekly topics and events spanning our first twelve seasons.</p>
      <Typography variant="h4">Historical Event Log</Typography>
      <Grid container spacing={1} style={{ maxWidth: "1600px", margin: "0 auto" }}>
        {seasons.map((season, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index} style={{ paddingBottom: "8px" }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">{season.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ width: "100%" }}>
                  <ul>
                    {season.events.map((event, i) => (
                      <li key={i}>{event}</li>
                    ))}
                  </ul>
                  <div style={{ textAlign: "right", marginTop: "10px" }}>
                    <Button variant="contained" color="primary" component={Link} to={season.link}>
                      View More
                    </Button>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </CenteredColumn>
  </Layout>
);

export default HistoryPage;
