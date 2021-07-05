import React from "react"
import * as styles from "./buttondownsignup.module.css"

const NamedDefault = () => <>
  <p>Want to hear about what we're doing and learning each week? 
      Enter your email here to subscribe to our progress update newsletter:</p>
  <div style={{minWidth: "300px", maxWidth: "450px", marginBlock: "1em"}}>
    <div className={styles.popout}>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/intentionalsociety"
        method="post"
        target="popupwindow"
        onSubmit={() => (window.open('https://buttondown.email/intentionalsociety', 'popupwindow'))}
        className="embeddable-buttondown-form"
      >
        <input type="email" name="email" id="bd-email" className={styles.textarea} placeholder="<email address>"></input>
        <input type="hidden" value="1" name="embed"></input>
        <input type="submit" value="Subscribe" className={styles.button}></input>
      </form>
    </div>
  </div>
</>
export default NamedDefault;