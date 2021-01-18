<template>
  <div class="login-page">
    <div class="tabs">
      <div
        class="login-tab"
        @click="changeForm('login')"
        :class="{ active: isLogin }"
      >
        Login
      </div>
      <div
        class="register-tab"
        @click="changeForm('register')"
        :class="{ active: !isLogin }"
      >
        Register
      </div>
    </div>
    <transition name="slide-fade" mode="out-in">
      <div key="login" v-if="isLogin" class="login">
        <Input
          :label="'Login'"
          :name="'username'"
          required
          pattern="\S"
          :has-error="false"
          :msg-error="'batatinha'"
          v-model="username"
        />
        <Input
          :label="'Password'"
          :name="'password'"
          :type="'password'"
          :has-error="false"
          :msg-error="'batatinha'"
          v-model="password"
          required
          pattern="\S"
        />
        <button class="btn bg--success text--white" :disabled="!isValid">
          Login
        </button>
      </div>
      <div key="register" v-else class="register">
        <Input
          :label="'Login'"
          :name="'username'"
          required
          pattern="\S"
          :has-error="false"
          :msg-error="'batatinha'"
          v-model="username"
        />
        <Input
          :label="'Password'"
          :name="'password'"
          :type="'password'"
          :has-error="false"
          :msg-error="'batatinha'"
          v-model="password"
          required
          pattern="\S"
        />
        <Input
          :label="'Confirm Password'"
          :name="'confirmPassword'"
          :type="'password'"
          :has-error="false"
          :msg-error="'batatinha'"
          v-model="confirmPassword"
          required
          pattern="\S"
        />
        <button class="btn bg--success text--white" :disabled="!isValid">
          Register
        </button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Input from '@/components/shared/Input.vue';

@Component({
  components: {
    Input
  }
})
export default class Login extends Vue {
  private username = '';
  private password = '';
  private confirmPassword = '';
  private currentPage = 'register';
  private rules = { username: 'required', password: 'required' };
  private rules_register = { confirmPassword: 'equalsTo:password' };

  get isLogin(): boolean {
    return this.currentPage === 'register' ? false : true;
  }
  get isValid(): boolean {
    Object.keys(this.rules).forEach(field => {
      console.log(field);
    });
    return false;
  }

  private changeForm(type = 'register'): void {
    this.clearFields();
    this.currentPage = type;
  }
  private clearFields(): void {
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
</script>
