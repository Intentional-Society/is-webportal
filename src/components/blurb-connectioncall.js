import React from 'react';

// Update both of these together, every time a new Connection Call is scheduled —
// this is the one place the registration link lives; other components (e.g.
// get-involved.js) import CONNECTION_CALL_URL from here rather than hardcoding
// their own copy, so the "Join a Connection Call" button can't drift out of
// sync with this blurb's date the way it did before.
export const CONNECTION_CALL_URL = 'https://us02web.zoom.us/meeting/register/oidEr1pEQM6izJUD-HsUrw';

const NamedDefault = () => <>
  Our next <a href={CONNECTION_CALL_URL}>
  IS Connection Call</a> is on <b>Friday, July 31<sup>st</sup> at 1:00-1:55pm Pacific Time (4pm Eastern, 8pm UTC)</b>.
</>;
export default NamedDefault;