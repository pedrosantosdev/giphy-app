import store from '@/store/';
import { defaultStateAuth } from '@/store/modules/AuthModule';

export class Auth {
  static isLogged(): boolean {
    const user = this.getUser();
    if (!user.isLogged) {
      return false;
    }
    return true;
  }

  static getUser(): typeof defaultStateAuth {
    const auth = store.state.auth;
    if (auth && auth.isLogged) {
      return auth;
    }
    const storage = JSON.parse(localStorage.getItem('auth') ?? '{}');
    if (storage && storage.isLogged) {
      return storage;
    }
    return defaultStateAuth;
  }
}
