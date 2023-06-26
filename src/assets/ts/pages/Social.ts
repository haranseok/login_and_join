export class Social {
  static naverLogin() {
    const naver_id_login = new window.naver_id_login(
      "acdsXrIKUdfGHwwwG9Pj",
      "http://192.168.0.90:5173/login"
    );
    const state = naver_id_login.getUniqState();
    naver_id_login.response_type = "code";
    naver_id_login.setState(state);
    naver_id_login.init_naver_id_login();
  }
}
