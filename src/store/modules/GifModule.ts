import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators';
import GiphyService from '@/api/giphy.service';
import IGif from '@/interfaces/gif';

const giphyService: GiphyService = GiphyService.getInstance();
@Module({ namespaced: true })
export default class GifModule extends VuexModule {
  private isLoading = false;
  private search = '';
  private limit = 25;
  private max = this.limit;
  private hasMore = true;
  private imgs: IGif[] = [];
  private isEmpty = false;
  private hasError = false;

  @Mutation
  public setIsEmpty() {
    this.isEmpty = !this.imgs.length && !this.isLoading;
  }

  @Mutation
  public setHasError(hasError: boolean) {
    this.hasError = hasError;
  }

  @Mutation
  public setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  @Mutation
  public setSearch(search: string) {
    this.search = search;
  }

  @Mutation
  public setLimit(limit?: number) {
    if (limit) {
      this.limit = limit;
    } else {
      this.limit = 25;
    }
  }

  @Mutation
  public setMax(max: number) {
    this.max = max;
  }

  @Mutation
  public setHasMore() {
    this.hasMore = this.max > this.imgs.length;
  }

  @Mutation
  public setImgs(imgs: IGif[]) {
    this.imgs = this.imgs.concat(imgs);
  }

  @Mutation
  public clearImgs() {
    this.imgs = [];
  }

  @Action
  public async getGifs(payload: {
    page?: number;
    limit?: number;
    search?: string;
    append: boolean;
  }) {
    this.context.commit('setIsLoading', payload.page);
    this.context.commit('setLimit', payload.limit);
    this.context.commit('setSearch', payload.search);

    const page = payload.page !== undefined ? payload.page : 1;
    const append = payload.append !== undefined ? payload.append : true;

    if (!this.hasMore && append) {
      return;
    }

    if (!append) {
      this.context.commit('clearImgs');
    }

    this.context.commit('setIsLoading', true);

    giphyService
      .getSearch(page, this.limit, this.search)
      .then(response => {
        this.context.commit('setImgs', response.data);
        this.context.commit('setMax', response.pagination.total_count);
        this.context.commit('setHasMore');
      })
      .catch(requestError => {
        const error = requestError.response;
        let msg = 'Ocorreu um Erro!';
        if (error.status > 400) {
          msg = 'Falha na comunicação';
        } else if (error.status > 400) {
          msg = `Parametro Necessario: <br/> ${error.data.message}`;
        }
        this.context.commit('setHasError', true);
        this.context.dispatch(
          'notification/showNotification',
          {
            msg: msg,
            type: 'alert',
            time: 2500
          },
          { root: true }
        );
      })
      .finally(() => this.context.commit('setIsLoading', false));
  }
}
