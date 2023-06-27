import { Http } from "@/api/Http";

export class LoginService {
  static async doSnsLogin(code: string, type: number, redirectUrl: string) {
    const res = await Http.callApi(`/api/v1/authority/sns/login`, "post", {
      code: code,
      snsType: type,
      redirectUrl: redirectUrl,
    });
    return res.data;
  }
}

export class UserInfo {
  static async getUserInfo(token: string) {
    let header = { headers: { authority: token } };
    const res = await Http.callApi(
      "/api/v1/user/access/get",
      "post",
      {},
      header
    );
    return res.data;
  }
}
