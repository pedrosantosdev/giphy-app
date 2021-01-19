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
import ReactiveForm, { ReactiveFormControl } from '@/utils/form/reactive-form';
import { Validators } from '@/utils/form/validators';

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
  private loginForm = new ReactiveForm();
  private registerForm = new ReactiveForm();

  get isLogin(): boolean {
    return this.currentPage === 'register' ? false : true;
  }
  get isValid(): boolean {
    if (this.isLogin) {
      return this.loginForm.isValid;
    } else {
      return this.registerForm.isValid;
    }
  }
  private changeForm(type = 'register'): void {
    if (this.isLogin) {
      this.loginForm.reset();
    } else {
      this.registerForm.reset();
    }
    this.currentPage = type;
  }

  created() {
    this.loginForm.controls['username'] = new ReactiveFormControl('', [
      Validators.required
    ]);
    this.loginForm.controls['password'] = new ReactiveFormControl('', [
      Validators.required,
      Validators.stringLength(8)
    ]);
  }
}
</script>
