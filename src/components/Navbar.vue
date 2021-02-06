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
      <button @click="() => (showMenu = true)">
        <i class="fas fa-bars"></i>
      </button>
      <transition name="slide-left">
        <div class="links" v-if="showMenu">
          <button class="btn-close" @click="() => (showMenu = false)">
            <i class="fas fa-times"></i>
          </button>
          <transition name="slide-left">
            <router-link v-if="isAuth && user" to="/dashboard">{{
              user.username
            }}</router-link>
            <a
              href="javascript:void(0)"
              @click="() => (showModal = true)"
              v-else
              >Login</a
            >
          </transition>
          <router-link to="/">Home</router-link>
        </div>
      </transition>
    </div>
    <transition name="bounce">
      <Modal v-if="showModal" @close="() => (showModal = false)">
        <Login @login="onLogin" slot="body" />
      </Modal>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Login from '@/views/Login.vue';
import { Auth } from '@/utils/auth/auth';
@Component({
  components: { Login }
})
export default class NavBar extends Vue {
  @Prop() search?: { type: string; default: '' };
  showModal = false;
  showMenu = window.innerWidth > 992 ? true : false;

  private get isAuth() {
    return Auth.isLogged();
  }

  private get user() {
    return Auth.getUser();
  }

  private onLogin(status) {
    if (status === 'success') {
      this.showModal = false;
    }
  }
}
</script>
