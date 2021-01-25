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
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class NavBar extends Vue {
  @Prop() search?: { type: string; default: '' };
}
</script>
