import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './index.css';

const AnimatedTransitions = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div className="container">
          <div className="fill">
            <Route exact path="/" render={() => <Redirect to="10/90/50" />} />
            <ul className="nav">
              <NavLink to="/10/90/50">Red</NavLink>
              <NavLink to="/120/100/40">Green</NavLink>
              <NavLink to="/200/100/40">Blue</NavLink>
              <NavLink to="/310/100/50">Pink</NavLink>
            </ul>
            <div className="content">
              <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
              >
                <Route
                  location={location}
                  key={location.key}
                  path="/:h/:s/:l"
                  component={HSL}
                />
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
      )}
    />
  </Router>
);

const NavLink = props => (
  <li>
    <Link {...props} style={{ color: 'inherit' }} />
  </li>
);

const HSL = ({ match: { params } }) => (
  <div
    className="hsl"
    style={{ background: `hsl(${params.h}, ${params.s}%, ${params.l}%)` }}
  >
    hsl({params.h}, {params.s}%, {params.l}%)
  </div>
);

export default AnimatedTransitions;
