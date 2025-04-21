import React, { useState } from "react";
import { Link } from "gatsby";
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";
import ButtondownSignup from "../components/buttondownsignup";
import BlurbOfficeHours from "../components/blurb-officehours";
import * as GlobalCSS from "../styles/global.module.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';

const slideTexts = [
  "Text-interspersed",
  "Text-interspersed",
];

const NamedDefault = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalImageSlides = 19;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, totalImageSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  return (
    <Layout>
      <div style={{ height: "5vh" }}></div>
      <CenteredColumn>
        <Typography variant="h3" style={{ textAlign: "center", marginBottom: "20px" }}>Orientation</Typography>

        {/* Image Carousel */}
        <div style={{ marginBottom: "40px", textAlign: "center", position: "relative" }}>
          <img
            src={`/images/orientation/${currentSlide + 1}.png`}
            alt={`Slide ${currentSlide + 1}`}
            style={{ width: "100%", maxWidth: "720px", borderRadius: "10px" }}
          />
          <p style={{ fontSize: "1.2em", marginTop: "15px" }}>
            {slideTexts[currentSlide] || ""}
          </p>

          {/* Navigation Buttons for Image Carousel */}
          <div style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }}>
            <IconButton onClick={prevSlide} disabled={currentSlide === 0}>
              <ArrowBackIosIcon />
            </IconButton>
          </div>
          <div style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}>
            <IconButton onClick={nextSlide} disabled={currentSlide === totalImageSlides - 1}>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
          <Typography variant="body2" style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)" }}>
            {currentSlide + 1} / {totalImageSlides}
          </Typography>
        </div>

        {/* Static Content Below Carousel */}
        <p>
          Welcome! These slides walk you through the Intentional Society orientation. They're meant to give you a visual and contextual intro to our purpose, vibe, and how to get involved.
        </p>

        <Typography variant="h3">Open events</Typography>
        <p> </p>

        <Typography variant="h4">Practice Dojo</Typography>
        <p>If you'd like to try our relational practices, we recommend diving right in!
          The practices differ week-by-week, and newcomers are welcome to join any session.</p>


        <a className={GlobalCSS.anchorOffset} id="connection-calls"></a>
        <Typography variant="h4">Connection Calls</Typography>
        <p>Want to learn about Intentional Society, its history, values, and core practices?
           Want to connect with one-or-more people of IS? This is a great entry point for new folks,
           and can also satisfy the personal-connection prerequisite for community membership.
           Open to all, new and familiar, with flexible agenda.</p>

        <p><BlurbOfficeHours /> Bring your video camera (phone is okay), microphone, and
          <Link to="/questions">questions</Link> you might have.</p>

        <Typography variant="h3">Information streams</Typography>
        <p> </p>

        <a className={GlobalCSS.anchorOffset} id="newsletter"></a>
        <Typography variant="h4">Weekly Updates Newsletter</Typography>
        <p>Stay informed with this public weekly newsletter about what we're doing and learning.
          Once a week (usually Thursday) you'll receive a short update
          sharing about our recent learning and what's coming up soon.
          You can <a href="https://buttondown.email/intentionalsociety/archive/">browse
          the archive here</a>.
        </p>
        <p>Enter your email to subscribe to Intentional Society Weekly Updates:
        </p>
        <ButtondownSignup/>
        <p>Then, don't forget to go click on the confirmation email! You won't be subscribed if you don't.</p>

        <Typography variant="h4">Twitter</Typography>
        <p>Follow <a href="https://twitter.com/IntentionalSoc">@IntentionalSoc</a> on
          Twitter if that's your thing. Shares some newsletter content,
          asks a few questions, tries not to be a nag/reminder stream. Also a handy
          way to simply refer to Intentional Society in tweets, even if you don't follow the account.</p>

        <div style={{textAlign: "right", marginBottom: "-25px"}}>
          Next page: <Link to="/history">History</Link>
        </div>
      </CenteredColumn>
    </Layout>
  );
};

export default NamedDefault;