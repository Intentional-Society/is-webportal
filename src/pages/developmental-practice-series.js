import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "10vh" }}></div>
    <CenteredColumn>
      <div dangerouslySetInnerHTML={{__html: data.mdfile.childMarkdownRemark.html}}></div>
      <div style={{ marginTop: "100px"}}>Published March 2024.</div>
      <p><Link to="/">Back to home page</Link>
      </p>
    </CenteredColumn>
  </Layout>
)
export default NamedDefault;

export const query = graphql`
  query {
    mdfile: file(relativePath: { eq: "md/practice-series.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`