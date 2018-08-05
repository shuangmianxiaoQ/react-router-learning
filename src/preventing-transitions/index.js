import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Form from './components/form';

const PreventingTransitions = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Form</Link>
        </li>
        <li>
          <Link to="/one">One</Link>
        </li>
        <li>
          <Link to="/two">Two</Link>
        </li>
      </ul>
      <Route exact path="/" component={Form} />
      <Route path="/one" render={() => <h4>One</h4>} />
      <Route path="/two" render={() => <h4>Two</h4>} />
    </div>
  </Router>
);

export default PreventingTransitions;
