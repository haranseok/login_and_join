import axios from "axios";

const url = import.meta.env.VITE_APP_URL;
export class MoviceContentService {
  static async getSearchMovice(searchValue: string) {
    const res: any = await axios.get(`${url}?apikey=7035c60c&s=${searchValue}`);
    return res.data;
  }
}
