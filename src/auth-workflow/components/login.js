import React from 'react';
import { Redirect } from 'react-router-dom';

import fakeAuth from '../fakeAuth';

class Login extends React.Component {
  state = { redirectToReferrer: false };

  login = () => {
    // 认证登录，并改变自身组件的状态
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default Login;
