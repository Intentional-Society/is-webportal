import React from "react"
import * as styles from "./buttondownsignup.module.css"

const NamedDefault = () => <>
  <div style={{minWidth: "200px", maxWidth: "300px", marginBlock: "1em"}}>
    <div className={styles.popout}>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/intentionalsociety"
        method="post" target="popupwindow"
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