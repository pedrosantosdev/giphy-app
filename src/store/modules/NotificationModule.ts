import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";
import { ENotificationMsgType } from "@/interfaces/notification";

const defaultStateNotification = {
  msg: "Ops",
  type: "info",
  time: 1000,
  show: false
};

@Module({ namespaced: true })
export default class NotificationModule extends VuexModule {
  public msg = "Ops";
  public type = ENotificationMsgType.Info;
  public time = 1000;
  public show = true;

  get notification() {
    return {
      msg: this.msg,
      type: this.type,
      time: this.time,
      show: this.show
    };
  }

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
    const context = this.context;
    context.dispatch("", payload);
    setTimeout(function() {
      context.dispatch("ActionSetNotification", defaultStateNotification);
    }, payload.time);
  }
  @Action
  public setNotification(payload: typeof defaultStateNotification) {
    this.context.commit("setMsg", payload.msg);
    this.context.commit("setType", payload.type);
    this.context.commit("setTime", payload.time);
    this.context.commit("setShow", payload.show);
  }
}
