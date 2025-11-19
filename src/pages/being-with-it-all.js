import React from "react";
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const NamedDefault = () => {
  return (
    <Layout>
      <div style={{ height: "5vh" }}></div>
      <CenteredColumn>
        <Typography variant="h2">Being With It All</Typography>

        <p>This is a practice series within the IS <Link to="/dojo">Practice Dojo</Link>.</p>

        <p><b>November-December 2025:</b> Running now! <br />Our next session 
        is <b>Saturday, November 29<sup>th</sup> from 
        1:00 to 2:30pm Pacific Time (4pm Eastern, 9pm UTC)</b>. <a 
        href="https://us02web.zoom.us/meeting/register/CLB3xUoISkiA0bK3pfltKg">Click 
        here to register and receive the meeting link.</a></p>

        <p>Anothe session will occur December 13<sup>th</sup>.</p>

        <img
          src="/images/being-with-it-all.png"
          alt="Being With It All"
          style={{
            maxWidth: "700px",
            width: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto 30px auto",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            border: "1px solid #e0e0e0"
          }}
        />

        <p>
          Life is a lot sometimes, isn't it? Everything happens so much. Everything everywhere all at once. 
          Atrocities around the world, violence in our neighborhood, all the way to frailties of our bodies. 
          Sacredness weaves its way through the suffering, and joy, yet we often find numbing and distraction 
          to be easier than facing the extremes.
        </p>
        <p>
          There's a secret to peace in the midst of everything: to let it be. To be with it all, we welcome 
          the reality of what is, the is-ness of what is true — and we welcome our own experience, 
          without pushing away or clinging. When we practice being, together, we find our capacity expanding. 
          Fear recedes. Turbulence calms. Our hearts beat on, grounding our connection to life.
        </p>
        <p>
          <i>Being With It All</i> is a simple radical practice of acceptance kindled in 
          the shared space between our open hearts.
        </p>

      </CenteredColumn>
    </Layout>
  );
};

export default NamedDefault;