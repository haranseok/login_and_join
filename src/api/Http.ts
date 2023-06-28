import axios from "axios";

// const header = {
//   "Content-Type": "application/json",
// };
export class Http {
  static async callApi(
    url: string,
    query: string,
    methods: string,
    params?: any,
    headers?: any
  ) {
    let data: any;
    switch (methods.toLowerCase()) {
      case "post":
        data = await axios.post(url + query, params, headers);
        break;
      case "get":
        data = await axios.get(url + query);
    }
    return data;
  }
}
