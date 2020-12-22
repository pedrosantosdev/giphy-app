<template>
  <div id="app">
    <div id="nav" class="is-hidden">
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
    <Notification />
  </div>
</template>

<style lang="sass">
@import "./assets/sass/index.sass";
</style>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Notification from "@/components/Notification.vue";

@Component({
  components: {
    Notification
  }
})
export default class App extends Vue {}
</script>
