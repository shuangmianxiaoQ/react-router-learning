import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import './index.css';

const CustomLink = () => (
  <Router>
    <div>
      <OldSchoolMenuLink label="Home" to="/" activeOnlyWhenExact={true} />
      <OldSchoolMenuLink label="About" to="/about" />
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <div className={match ? 'active' : ''}>
          {match ? '>' : ''}
          <Link to={to}>{label}></Link>
        </div>
      )}
    />
  );
};

export default CustomLink;
