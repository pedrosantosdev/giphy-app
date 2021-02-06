<template>
  <div class="dashboard">
    <Navbar />
    <div></div>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
  components: { Navbar }
})
export default class Dashboard extends Vue {
  mounted() {
    console.log('Hello');
  }
}
</script>
