import React from 'react';
import * as styles from '../styles/full-height-content.module.css';

const FullHeightContent = ({ children }) => (
  <div className={styles.fullHeight}>
    {children}
  </div>
);

export default FullHeightContent;
