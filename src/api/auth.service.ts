import axios, { AxiosResponse } from 'axios';
export default class AuthService {
  // Singleton
  private static instance: AuthService;
  /* eslint-disable @typescript-eslint/no-empty-function*/
  private constructor() {}
  /* eslint-enable @typescript-eslint/no-empty-function*/
  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }

    return AuthService.instance;
  }

  protected uri = process.env.VUE_APP_KTOR_API_URL;

  public async register(form: FormData) {
    const uri = `${this.uri}/oauth/register`;
    const headers = {
      'Content-Type': 'application/form-data'
    };
    const response = axios
      .post(uri, form, { headers })
      .then((value: AxiosResponse<any>) => value.data);
    return response;
  }
  public async login(form: FormData) {
    const uri = `${this.uri}/oauth/auth`;
    const headers = {
      'Content-Type': 'application/form-data'
    };
    const response = axios
      .post(uri, form, { headers })
      .then((value: AxiosResponse<any>) => value.data);
    return response;
  }

  public async refreshToken(token: string) {
    const uri = `${this.uri}/oauth/refresh-token`;
    const form = new FormData();
    form.append('token', token);
    const headers = {
      'Content-Type': 'application/form-data'
    };
    const response = axios
      .post(uri, form, { headers })
      .then((value: AxiosResponse<any>) => value.data);
    return response;
  }

  public async details() {
    const uri = `${this.uri}/oauth/me`;
    const response = axios
      .get(uri)
      .then((value: AxiosResponse<any>) => value.data);
    return response;
  }
}
