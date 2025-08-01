import { Link } from "gatsby";
import React from "react"

const NamedDefault = ({ data }) => <>
  Now running at the Practice Dojo: 
  our <Link to="/developmental-practice-series">Developmental Practice Series</Link> July through September.
  
  {/* Sessions are usually on <b>Saturdays from 
  1:00 to 2:30pm Pacific Time (4pm Eastern, 9pm UTC)</b>. <a 
  href="https://us02web.zoom.us/meeting/register/tZIvdOCtpj4qG9XxuaHMOq_7eGs_6dPCwhae">Click 
  here to register and receive the meeting link.</a> */}
</>
export default NamedDefault;
