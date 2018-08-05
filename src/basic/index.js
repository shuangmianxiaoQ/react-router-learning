import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Topics from './components/topics';

const Basic = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
        <li>
          <Link to="/topics">主题列表</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} /> {/* 精确匹配 */}
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default Basic;
