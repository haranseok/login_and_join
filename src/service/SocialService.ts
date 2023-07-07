import { Http } from "@/api/Http";

const url = import.meta.env.VITE_APP_URL;
const googleUrl = import.meta.env.VITE_APP_GOOGLE_API;

export class SnsLoginService {
  static async doSnsLogin(code: string, type: number, redirectUrl: string) {
    const res = await Http.callApi(url, `/api/v1/authority/sns/login`, "post", {
      code: code,
      snsType: type,
      redirectUrl: redirectUrl,
    });
    return res.data;
  }

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

  static googleLoginLink(params: any) {
    const { client_id, redirect_uri, response_type, scope } = params;
    window.location.href = `${googleUrl}/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`;
  }
}

export class UserInfo {
  static async getUserInfo(token: string) {
    let header = { headers: { authority: token } };
    const res = await Http.callApi(
      url,
      "/api/v1/user/access/get",
      "post",
      {},
      header
    );
    return res.data;
  }
}
