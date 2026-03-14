import React from 'react';
import * as GlobalCSS from '../styles/global.module.css';

const NamedDefault = ({children}) => (
  <div className={GlobalCSS.centerMe} style={{ width: '100%', boxSizing: 'border-box', minWidth: '300px', maxWidth: '960px', padding: '0 50px' }}>
    {children}
  </div>
);
export default NamedDefault;