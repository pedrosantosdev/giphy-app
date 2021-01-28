import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators';
import { ENotificationMsgType } from '@/interfaces/notification';

const defaultStateNotification = {
  msg: 'Ops',
  type: ENotificationMsgType.Info,
  time: 1000,
  show: false
};

@Module({ namespaced: true })
export default class NotificationModule extends VuexModule {
  private msg = defaultStateNotification.msg;
  private type = defaultStateNotification.type;
  private time = defaultStateNotification.time;
  private show = defaultStateNotification.show;

  @Mutation
  public setMsg(msg: string) {
    this.msg = msg;
  }

  @Mutation
  public setType(type: ENotificationMsgType = ENotificationMsgType.Info) {
    this.type = type;
  }

  @Mutation
  public setTime(time = 1000) {
    this.time = time;
  }

  @Mutation
  public setShow(show = false) {
    this.show = show;
  }

  @Action
  public showNotification(payload: typeof defaultStateNotification) {
    payload = { ...payload, show: true };
    const context = this.context;
    context.dispatch('setNotification', payload);
    setTimeout(function() {
      context.dispatch('setNotification', defaultStateNotification);
    }, payload.time);
  }
  @Action
  public setNotification(payload: typeof defaultStateNotification) {
    this.context.commit('setMsg', payload.msg);
    this.context.commit('setType', payload.type);
    this.context.commit('setTime', payload.time);
    this.context.commit('setShow', payload.show);
  }
}
