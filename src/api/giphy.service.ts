import IResponse from '@/interfaces/response';
import ITermObject from '@/interfaces/term-object';
import IGif from '@/interfaces/gif';
import axios, { AxiosResponse } from 'axios';

export default class GiphyService {
  protected apikey = process.env.VUE_APP_GIHPY_API_KEY;
  protected uri = '//api.giphy.com/v1/gifs';
  /* eslint-disable @typescript-eslint/camelcase */
  private defaultParams = { api_key: this.apikey };
  /* eslint-enable @typescript-eslint/camelcase */

  public async getSearch(
    page = 1,
    limit = 25,
    search = '',
    rating = 'g'
  ): Promise<IResponse<IGif[]>> {
    const offset = (page - 1) * limit;
    const type = search.length ? 'search' : 'trending';
    let params: {} = { ...this.defaultParams, limit, offset, rating };
    const uri = `${this.uri}/${type}`;
    if (search.length) {
      params = { ...params, q: search };
    }
    const response = axios
      .get(uri, { params })
      .then((value: AxiosResponse<IResponse<IGif[]>>) => value.data);
    return response;
  }

  public async getSuggestions(
    page = 1,
    limit = 25,
    search = ''
  ): Promise<IResponse<ITermObject[]>> {
    const offset = (page - 1) * limit;
    const params: {} = { ...this.defaultParams, limit, offset, q: search };
    const uri = `${this.uri}/search/tags`;
    const response = axios
      .get(uri, { params })
      .then((value: AxiosResponse<IResponse<ITermObject[]>>) => value.data);
    return response;
  }
}
