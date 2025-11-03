import React from "react";
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const NamedDefault = () => {
  return (
    <Layout>
      <CenteredColumn>
        <Typography variant="h2">Being With It All</Typography>

        <p>This is a practice series within the IS <Link to="/dojo">Practice Dojo</Link>.</p>

        <p><b>November-December 2025:</b>Running now! Our next session 
        is <b>Saturday, November 15<sup>th</sup> from 
        1:00 to 2:30pm Pacific Time (4pm Eastern, 9pm UTC)</b>. <a 
        href="https://us02web.zoom.us/meeting/register/tZIvdOCtpj4qG9XxuaHMOq_7eGs_6dPCwhae">Click 
        here to register and receive the meeting link.</a></p>

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
          Do you feel overwhelmed sometimes? Do you feel like you avoid bad news? Do you defend against being known and loved and rejected by keeping your distance? What would be different if you had more capacity to face it, and feel it without flinching away, and do what is right and good?
        </p>
        
        <p>
          Being with it all is where we stretch our perspective-taking and hold space of okayness for it all.
        </p>

      </CenteredColumn>
    </Layout>
  );
};

export default NamedDefault;