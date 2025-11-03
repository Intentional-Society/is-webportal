import { Link } from "gatsby";
import React from "react"

const NamedDefault = ({ data }) => <>
  The current Practice Dojo series is <Link to="/being-with-it-all">Being With It All</Link>.
  All are welcome to this warm and heart-stretching practice space.
  <br />
  Our next session is <b>Saturday, November 15<sup>th</sup> from 
  1:00 to 2:30pm Pacific Time (4pm Eastern, 9pm UTC)</b>. <a 
  href="https://us02web.zoom.us/meeting/register/tZIvdOCtpj4qG9XxuaHMOq_7eGs_6dPCwhae">Click 
  here to register and receive the meeting link.</a>
</>
export default NamedDefault;
