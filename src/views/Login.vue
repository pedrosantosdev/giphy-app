<template>
  <div class="login-page">
    <div class="tabs">
      <div
        class="register-tab"
        @click="changeForm()"
        :class="{ active: !isLogin }"
      >
        Register
      </div>
      <div
        class="login-tab"
        @click="changeForm('login')"
        :class="{ active: isLogin }"
      >
        Login
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div class="register" key="register" v-if="!isLogin">
        <label class="input-text">
          <input
            type="text"
            placeholder="username"
            required
            pattern="\S"
            name="login"
            v-model="username"
          />
          <span class="label">Username</span>
          <span class="focus-bg"></span>
        </label>
        <label class="input-text">
          <input
            type="password"
            placeholder="password"
            required
            pattern="\S"
            name="password"
            v-model="password"
          />
          <span class="label">Password</span>
          <span class="focus-bg"></span>
        </label>
        <label class="input-text">
          <input
            type="password"
            placeholder="password"
            required
            pattern="\S"
            name="confirm-password"
            v-model="confirmPassword"
          />
          <span class="label">Confirm Password</span>
          <span class="focus-bg"></span>
        </label>
        <button class="btn bg-success text-white">Register</button>
      </div>
      <div class="login" v-else key="login">
        <label class="input-text">
          <input
            type="text"
            placeholder="username"
            required
            pattern="\S"
            name="login"
            v-model="username"
          />
          <span class="label">Username</span>
          <span class="focus-bg"></span>
        </label>
        <label class="input-text">
          <input
            type="password"
            placeholder="password"
            required
            pattern="\S"
            name="password"
            v-model="password"
          />
          <span class="label">Password</span>
          <span class="focus-bg"></span>
        </label>
        <button class="btn bg--success text--white">Login</button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class Login extends Vue {
  private username = '';
  private password = '';
  private confirmPassword = '';
  private isLogin = true;

  private changeForm(type = 'register') {
    this.clearFields();
    this.isLogin = type === 'register' ? false : true;
  }
  private clearFields() {
    this.username = 'User';
    this.password = 'Pass';
    this.confirmPassword = 'Confirm';
  }
}
</script>
