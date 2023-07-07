import { Http } from "@/api/Http";

const url = import.meta.env.VITE_APP_URL;

export class UserAuthService {
  static async doLogin(user_id: string, user_password: string) {
    const res = await Http.callApi(url, `/api/v1/authority/login`, "post", {
      user_id: user_id,
      user_password: user_password,
    });
    return res;
  }
}
