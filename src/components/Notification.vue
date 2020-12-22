<template>
  <transition name="fade">
    <div class="notification" :class="bgColor" v-if="show">Hi There</div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
enum EMsgType {
  Alert = "alert",
  Info = "info",
  Success = "success",
  Warning = "warning"
}

export default class Notification extends Vue {
  private show = false;
  private msg = "Ops";
  private type = EMsgType.Alert;
  private time = 1000;

  get bgColor(): string {
    return `bg-${this.type}`;
  }
}
</script>
