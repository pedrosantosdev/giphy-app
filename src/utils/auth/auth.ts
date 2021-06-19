import AuthService from '@/api/auth.service';
import store from '@/store/';
import { defaultStateAuth } from '@/store/modules/AuthModule';

export class Auth {
  static isLogged(): boolean {
    const user = this.getAuth();
    return user.isLogged;
  }

  static getAuth(): typeof defaultStateAuth {
    const auth = store.state.auth;
    if (auth && auth.isLogged) {
      return auth;
    }
    const storage = JSON.parse(localStorage.getItem('auth') ?? '{}');
    if (storage && storage.isLogged) {
      store.dispatch('auth/setAuth', storage);
      return storage;
    }
    return defaultStateAuth;
  }

  static getUser(): typeof defaultStateAuth.user {
    const auth = store.state.auth;
    if (auth && auth.isLogged && auth.user != null) {
      return auth.user;
    }
    const storage = JSON.parse(localStorage.getItem('auth') ?? '{}');
    if (storage && storage.isLogged) {
      AuthService.getInstance()
        .details()
        .then(user => store.dispatch('auth/setAuthUser', user.data.user));
      return store.state.auth.user;
    }
    return null;
  }

  static logout(): void {
    store.dispatch('auth/clearAuth');
  }
}
