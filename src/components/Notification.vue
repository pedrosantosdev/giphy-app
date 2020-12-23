<template>
  <transition name="fade">
    <div class="notification" :class="bgColor" v-if="show">{{ msg }}</div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ENotificationMsgType } from '@/interfaces/notification';

@Component
export default class Notification extends Vue {
  get notification() {
    return this.$store.state.notification;
  }

  get show(): boolean {
    return this.notification ? this.notification.show : false;
  }

  get msg(): string {
    return this.notification ? this.notification.msg : '';
  }

  get type(): ENotificationMsgType {
    return this.notification
      ? this.notification.type
      : ENotificationMsgType.Info;
  }

  get time(): number {
    return this.notification ? this.notification.time : 1000;
  }

  get bgColor(): string {
    return `bg-${this.type}`;
  }
}
</script>
