import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators';

export const defaultStateAuth = {
  isLogged: false,
  accessToken: '',
  refreshToken: '',
  expiresAt: ''
};

@Module({ namespaced: true })
export default class AuthModule extends VuexModule {
  private isLogged = defaultStateAuth.isLogged;
  private accessToken = defaultStateAuth.accessToken;
  private refreshToken = defaultStateAuth.refreshToken;
  private expiresAt = defaultStateAuth.expiresAt;

  @Mutation
  public setIsLogged(isLogged: boolean = defaultStateAuth.isLogged) {
    this.isLogged = isLogged;
  }

  @Mutation
  public setAccessToken(accessToken: string = defaultStateAuth.accessToken) {
    this.accessToken = accessToken;
  }

  @Mutation
  public setRefreshToken(refreshToken = defaultStateAuth.refreshToken) {
    this.refreshToken = refreshToken;
  }

  @Mutation
  public setExpiresAt(expiresAt = defaultStateAuth.expiresAt) {
    this.expiresAt = expiresAt;
  }

  @Action
  public clearAuth() {
    this.context.dispatch('setAuth', defaultStateAuth);
    localStorage.removeItem('auth');
  }
  @Action
  public setAuth(payload: typeof defaultStateAuth) {
    this.context.commit('setIsLogged', payload.isLogged);
    this.context.commit('setAccessToken', payload.accessToken);
    this.context.commit('setRefreshToken', payload.refreshToken);
    this.context.commit('setExpiresAt', payload.expiresAt);
    localStorage.setItem('auth', JSON.stringify(payload));
  }
}
