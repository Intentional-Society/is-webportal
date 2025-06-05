import React from "react";
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout";
import CenteredColumn from "../components/centered-column";

const NamedDefault = () => {
  return (
    <Layout>
      <CenteredColumn>
        <Typography variant="h4" style={{ textAlign: "center", margin: "25px 0" }}>Being With It All</Typography>

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

        <p style={{ textAlign: "left" }}>
          Do you feel overwhelmed sometimes? Do you feel like you avoid bad news? Do you defend against being known and loved and rejected by keeping your distance? What would be different if you had more capacity to face it, and feel it without flinching away, and do what is right and good?
        </p>
        
        <p style={{ textAlign: "left" }}>
          Being with it all is where we stretch our perspective-taking and hold space of okayness for it all.
        </p>

      </CenteredColumn>
    </Layout>
  );
};

export default NamedDefault;