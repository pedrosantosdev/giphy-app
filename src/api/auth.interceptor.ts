import axios from 'axios';

export default function setup() {
  // Request
  axios.interceptors.request.use(
    function(config) {
      if (
        config.url &&
        (!config.url.endsWith('/oauth/auth') ||
          !config.url.endsWith('/oauth/register'))
      ) {
        const expiresAt = localStorage.getItem('expires_at') ?? '';
        const userTokenExpiration = new Date(expiresAt);
        const today = new Date();
        if (today > userTokenExpiration) {
          // refresh the token here
          const userRefreshToken = localStorage.getItem('refresh_token');
          config.headers.Authorization = `Bearer ${userRefreshToken}`;
        } else {
          const userToken = localStorage.getItem('access_token');
          config.headers.Authorization = `Bearer ${userToken}`;
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
        error.response.status === 401 &&
        (!requestURL.endsWith('/oauth/auth') &&
          !requestURL.endsWith('/oauth/register'))
      ) {
        const requestConfig = error.config;
        return axios(requestConfig);
      }
      return Promise.reject(error);
    }
  );
}
