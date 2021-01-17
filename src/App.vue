<template>
  <div id="app">
    <router-view />
    <Notification />
  </div>
</template>

<style lang="sass">
@import "./assets/sass/index.sass";
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Notification from '@/components/Notification.vue';

@Component({
  components: {
    Notification
  }
})
export default class App extends Vue {}
</script>
