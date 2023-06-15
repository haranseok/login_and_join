import axios from "axios";

const url = import.meta.env.VUE_APP_URL;

export class Http {
  static async callApi(query: string, methods: string, params?: any) {
    let data: any;
    switch (methods.toLowerCase()) {
      case "post":
        data = await axios.post(url + query, params);
        break;
      case "get":
        data = await axios.get(url + query);
    }
    return data;
  }
}
// 2023.06.15 현재 사용 안하는 중
