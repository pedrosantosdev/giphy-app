import axios, { AxiosResponse } from 'axios';

export default class UserService {
  // Singleton
  private static instance: UserService;
  /* eslint-disable @typescript-eslint/no-empty-function*/
  private constructor() {}
  /* eslint-enable @typescript-eslint/no-empty-function*/
  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }

    return UserService.instance;
  }

  protected uri = process.env.VUE_APP_KTOR_API_URL;

  public async index() {
    const uri = `${this.uri}/users`;
    const headers = {}
    const response = axios
      .get(uri, { headers })
      .then((value: AxiosResponse<any>) => value.data);
    return response;
  }
}
