import React from 'react';
import ReactDOM from 'react-dom';

import Basic from './basic/index';
import UrlParams from './url-params/index';
import AuthWorkflow from './auth-workflow/index';
import CustomLink from './custom-link/index';
import PreventingTransitions from './preventing-transitions/index';
import NoMatch from './no-match/index';
import RecursivePaths from './recursive-paths/index';
import Sidebar from './sidebar/index';
import AnimatedTransitions from './animated-transitions/index';
import AmbiguousMatches from './ambiguous-matches/inedx';

import './style.css';

const RouterExample = () => (
  <div>
    <div className="div-spacing">
      <h2>基本使用</h2>
      <Basic />
    </div>
    <div className="div-spacing">
      <h2>URL参数</h2>
      <UrlParams />
    </div>
    <div className="div-spacing">
      <h2>认证</h2>
      <AuthWorkflow />
    </div>
    <div className="div-spacing">
      <h2>自定义链接</h2>
      <CustomLink />
    </div>
    <div className="div-spacing">
      <h2>阻止导航</h2>
      <PreventingTransitions />
    </div>
    <div className="div-spacing">
      <h2>未匹配(404)</h2>
      <NoMatch />
    </div>
    <div className="div-spacing">
      <h2>路径递归</h2>
      <RecursivePaths />
    </div>
    <div className="div-spacing">
      <h2>侧边栏</h2>
      <Sidebar />
    </div>
    <div className="div-spacing">
      <h2>过渡动画</h2>
      <AnimatedTransitions />
    </div>
    <div className="div-spacing">
      <h2>模糊匹配</h2>
      <AmbiguousMatches />
    </div>
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<RouterExample />, rootElement);
