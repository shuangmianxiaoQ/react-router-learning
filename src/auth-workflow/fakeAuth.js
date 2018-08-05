// 伪造一个认证状态，模拟实现登录登出
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 500);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 500);
  }
};

export default fakeAuth;
