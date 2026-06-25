import React from 'react'
import * as styles from './is-footer.module.css'

// Three-column site footer (about / values / explore), ported from the 2026
// prototype and wired to the real internal routes.
const NamedDefault = () => {
  const year = new Date().getFullYear() // IS began in 2020; range ends at the build year
  return (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.about}>
        <h3>Intentional Society</h3>
        <p>
          An online community for inner development, wise action, and human
          connection. Peer-led, free, and always becoming.
        </p>
      </div>

      <div className={styles.values}>
        <h4 className={styles.colHeading}>Our values</h4>
        <ul className={styles.list}>
          <li>Awareness</li>
          <li>Acceptance</li>
          <li>Integrity</li>
        </ul>
      </div>
    </div>
    <div className={styles.bottom}>
      &copy; 2020&ndash;{year} Intentional Society &nbsp;·&nbsp; Photography by
      community members Bill (nature &amp; macro) and Karla (ice).
    </div>
  </footer>
  )
}
export default NamedDefault
