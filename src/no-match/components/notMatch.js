import React from 'react';

const NotMatch = ({ location }) => (
  <div>
    <h3>
      Not match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default NotMatch;
