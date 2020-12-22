import Response from "@/interfaces/response";
import axios, { AxiosResponse } from "axios";

export default class GiphyService {
  protected apikey = process.env.VUE_APP_GIHPY_API_KEY;
  protected uri = "//api.giphy.com/v1/gifs";

  public async getSearch(
    page = 1,
    limit = 25,
    search = "",
    rating = "g"
  ): Promise<Response> {
    const offset = (page - 1) * limit;
    const type = search.length ? "search" : "trending";
    let uri = `${this.uri}/${type}?api_key=${this.apikey}&limit=${limit}&offset=${offset}&rating=${rating}`;
    if (search.length) {
      uri += `&q=${search}`;
    }
    const response = axios
      .get(uri)
      .then((value: AxiosResponse<Response>) => value.data);
    return response;
  }
}
