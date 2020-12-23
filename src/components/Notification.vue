<template>
  <transition name="fade">
    <div class="notification" :class="bgColor" v-if="show">Hi There</div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Notification extends Vue {
  mounted() {
    console.log('Montei');
  }

  get notification() {
    return this.$store.state.notification.notification;
  }

  get show() {
    return this.notification.show;
  }

  get msg() {
    return this.notification.msg;
  }

  get type() {
    return this.notification.type;
  }

  get time() {
    return this.notification.time;
  }

  get bgColor(): string {
    return `bg-${this.type}`;
  }
}
</script>
