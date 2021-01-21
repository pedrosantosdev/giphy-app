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
          :formControl="loginForm.controls.username"
          required
          pattern="\S"
          key="login_username"
        />
        <Input
          :label="'Password'"
          :type="'password'"
          :formControl="loginForm.controls.password"
          required
          pattern="\S"
          key="login_password"
        />
        <button class="btn bg--success text--white" @click="submit()">
          Login
        </button>
      </div>
      <div key="register" v-else class="register">
        <Input
          :label="'Login'"
          :formControl="registerForm.controls.username"
          required
          pattern="\S"
          key="register_username"
        />
        <Input
          :label="'Password'"
          :type="'password'"
          :formControl="registerForm.controls.password"
          required
          pattern="\S"
          key="register_password"
        />
        <Input
          :label="'Confirm Password'"
          :type="'password'"
          :formControl="registerForm.controls.confirmPassword"
          required
          pattern="\S"
          key="register_confirm_password"
        />
        <button class="btn bg--success text--white" @click="submit()">
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

  private submit() {
    if (this.isLogin) {
      this.loginForm.validate();
    } else {
      this.registerForm.validate();
    }
  }

  private equalsPassword(): string {
    if (
      this.registerForm.controls['confirmPassword'].value ===
      this.registerForm.controls['password'].value
    )
      return '';
    else return 'Password Not Equals';
  }

  created() {
    this.loginForm.controls['username'] = new ReactiveFormControl('', [
      Validators.required
    ]);
    this.loginForm.controls['password'] = new ReactiveFormControl('', [
      Validators.required,
      Validators.stringLength(8)
    ]);
    this.registerForm.controls['username'] = new ReactiveFormControl('', [
      Validators.required
    ]);
    this.registerForm.controls['password'] = new ReactiveFormControl('', [
      Validators.required,
      Validators.stringLength(8)
    ]);
    this.registerForm.controls['confirmPassword'] = new ReactiveFormControl(
      '',
      [Validators.required, Validators.stringLength(8), this.equalsPassword]
    );
  }
}
</script>
