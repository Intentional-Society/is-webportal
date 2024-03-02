import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = () => (
<Layout>
  <div style={{ height: "10vh" }}></div>
    <CenteredColumn>
      <p>
        Page not found — this URL does not exist. Consider restarting your journey at <Link to="/">the home page</Link>.
      </p><p></p><p></p><p></p>
    </CenteredColumn>
</Layout>
)
export default NamedDefault;