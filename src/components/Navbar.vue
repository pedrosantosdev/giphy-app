<template>
  <div class="navbar">
    <div class="logo">
      <img src="../assets/logo.png" alt="Home Logo" loading="lazy" />
    </div>
    <div class="search">
      <input
        type="text"
        class="input"
        v-model="search"
        placeholder="Search"
        v-on:keyup.enter="$emit('search', search)"
      />
      <button class="btn" @click="$emit('search', search)">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="menu-links">
      <i class="far fa-window-close"></i>
      <button @click="() => (showMenu = true)">
        <i class="fas fa-bars"></i>
      </button>
      <div class="links" v-show="showMenu">
        <i class="fas fa-times" @click="() => (showMenu = false)"></i>
        <router-link to="/">Home</router-link>
        <a href="javascript:void(0)" @click="() => (showModal = true)">Login</a>
      </div>
    </div>
    <Modal v-if="showModal" @close="() => (showModal = false)">
      <Login slot="body" />
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Login from '@/views/Login.vue';
@Component({
  components: { Login }
})
export default class NavBar extends Vue {
  @Prop() search?: { type: string; default: '' };
  showModal = false;
  showMenu = window.innerWidth > 992 ? true : false;
}
</script>
