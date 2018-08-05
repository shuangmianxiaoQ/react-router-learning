import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const UrlParams = () => (
  <Router>
    <div>
      <h3>账号</h3>
      <ul>
        <li>
          <Link to="/react-router">React Router</Link>
        </li>
        <li>
          <Link to="/leoashin">LeoAshinLeoAshin</Link>
        </li>
        <li>
          <Link to="/justjavac">justjavac</Link>
        </li>
        <li>
          <Link to="/reacttraining">React Training</Link>
        </li>
      </ul>

      <Route path="/:id" component={Child} />
    </div>
  </Router>
);

const Child = ({ match }) => (
  <div>
    <h4>ID: {`${match.params.id}`}</h4>
  </div>
);

export default UrlParams;
