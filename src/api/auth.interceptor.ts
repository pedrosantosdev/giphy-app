import { Auth } from '@/utils/auth/auth';
import axios from 'axios';
import AuthService from './auth.service';

export default function setup() {
  const apiUrlPrefix = process.env.VUE_APP_KTOR_API_URL;
  // Request
  axios.interceptors.request.use(
    function(config) {
      if (
        config.url &&
        config.url.startsWith(apiUrlPrefix) &&
        (!config.url.endsWith('/oauth/auth') ||
          !config.url.endsWith('/oauth/register'))
      ) {
        const user = Auth.getAuth();
        const userTokenExpiration = new Date(user.expiresAt);
        const today = new Date();
        if (today > userTokenExpiration) {
          // refresh the token here
          AuthService.getInstance().refreshToken(user.refreshToken);
          const requestConfig = config;
          return axios(requestConfig);
        } else {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
        }
      }
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );
  // Response
  axios.interceptors.response.use(
    response => {
      // Do something with response data
      return response;
    },
    error => {
      // Do something with response error

      // You can even test for a response code
      // and try a new request before rejecting the promise
      const requestURL = error.request.responseURL;
      if (
        requestURL &&
        requestURL.startsWith(apiUrlPrefix) &&
        (!requestURL.endsWith('/oauth/auth') ||
          !requestURL.endsWith('/oauth/register'))
      ) {
        Auth.logout();
      }
      return Promise.reject(error);
    }
  );
}
