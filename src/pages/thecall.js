import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "10vh" }}></div>
    <CenteredColumn>
      <div dangerouslySetInnerHTML={{__html: data.thecall.childMarkdownRemark.html}}></div>
      <div style={{ marginTop: "100px"}}>Written by <a href="https://www.bakejam.com">James</a>, December 2020.</div>
      <p>The above is preserved as a <Link to="/history">historical</Link> artifact of 
      Intentional Society. <br/><Link to="/">Back to home page</Link>
      </p>
    </CenteredColumn>
  </Layout>
)
export default NamedDefault;

export const query = graphql`
  query {
    thecall: file(relativePath: { eq: "md/thecall.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`