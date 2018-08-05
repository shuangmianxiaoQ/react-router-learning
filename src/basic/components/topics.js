import React from 'react';
import { Link, Route } from 'react-router-dom';

const Topics = ({ match }) => {
  console.log(match); // { path: "/topics", url: "/topics", isExact: false, params: {} }

  return (
    <div>
      <h3>主题列表</h3>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>使用 React 渲染</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>组件</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>属性 v. 状态</Link>
        </li>
      </ul>
      {/* 路由传参 */}
      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={`${match.url}`}
        render={() => <h4>请选择一个主题。</h4>}
      />
    </div>
  );
};

const Topic = ({ match }) => (
  <div>
    <h4>{match.params.topicId}</h4>
  </div>
);

export default Topics;
