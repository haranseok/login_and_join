import axios from "axios";

const url = "https://www.omdbapi.com";

export class MovieContentService {
  static async getSearchMovie(searchValue: string) {
    const res: any = await axios.get(`${url}?apikey=7035c60c&s=${searchValue}`);
    return res.data;
  }

  static async getMovieDetail(movieUid: string) {
    const res: any = await axios.get(`${url}?apikey=7035c60c&i=${movieUid}`);
    return res.data;
  }
}
