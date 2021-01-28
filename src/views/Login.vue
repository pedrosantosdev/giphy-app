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
      <div key="loginform" v-if="isLogin" class="login">
        <Input
          :label="'Login'"
          :formControl="loginForm.controls.username"
          :key="loginForm.controls.username.key"
          required
          @keyup-input="debounceValidate"
          @blur-input="validateField"
        />
        <Input
          :label="'Password'"
          :type="'password'"
          :formControl="loginForm.controls.password"
          :key="loginForm.controls.password.key"
          required
          @keyup-input="debounceValidate"
          @blur-input="validateField"
        />
        <div class="text--white" :class="classMsgResponse" v-show="msgResponse">
          {{ msgResponse }}
        </div>
        <button class="btn bg--success text--white" @click="submit()">
          Login
        </button>
      </div>
      <div key="registerform" v-else class="register">
        <Input
          :label="'Login'"
          :formControl="registerForm.controls.username"
          :key="registerForm.controls.username.key"
          required
          @keyup-input="debounceValidate"
          @blur-input="validateField"
        />
        <Input
          :label="'Password'"
          :type="'password'"
          :formControl="registerForm.controls.password"
          :key="registerForm.controls.password.key"
          required
          @keyup-input="debounceValidate"
          @blur-input="validateField"
        />
        <Input
          :label="'Confirm Password'"
          :type="'password'"
          :formControl="registerForm.controls.confirmPassword"
          :key="registerForm.controls.confirmPassword.key"
          required
          @keyup-input="debounceValidate"
          @blur-input="validateField"
        />
        <div class="text--white" :class="classMsgResponse" v-show="msgResponse">
          {{ msgResponse }}
        </div>
        <button class="btn bg--success text--white" @click="submit()">
          Register
        </button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ReactiveForm, { ReactiveFormControl } from '@/utils/form/reactive-form';
import { Validators } from '@/utils/form/validators';
import AuthService from '@/api/auth.service';

@Component
export default class Login extends Vue {
  private currentPage = 'login';
  private loginForm = new ReactiveForm();
  private registerForm = new ReactiveForm();
  private timerDebounce: number | null = 1000;
  private msgResponse = '';
  private classMsgResponse = 'success';

  get isLogin(): boolean {
    return this.currentPage === 'register' ? false : true;
  }
  private isValid(): boolean {
    return this.whichForm().isValid;
  }
  private changeForm(type = 'register'): void {
    this.whichForm().reset();
    this.currentPage = type;
  }

  private whichForm(): ReactiveForm {
    if (this.isLogin) {
      return this.loginForm;
    } else {
      return this.registerForm;
    }
  }

  private validateForm(): void {
    this.whichForm().validate();
    this.$forceUpdate();
  }

  debounceValidate(field: ReactiveFormControl) {
    if (this.timerDebounce) {
      clearTimeout(this.timerDebounce);
      this.timerDebounce = null;
    }
    this.timerDebounce = setTimeout(() => {
      this.validateField(field);
    }, 600);
  }

  validateField(field: ReactiveFormControl): void {
    field.validate();
    this.$forceUpdate();
  }

  async submit(): Promise<void> {
    this.validateForm();
    const form = this.whichForm();
    if (this.isLogin) {
      await AuthService.getInstance()
        .login(form.formData)
        .then(value => {
          this.$store.dispatch('auth/setAuth', {
            isLogged: true,
            accessToken: value.data.access_token,
            refreshToken: value.data.refresh_token,
            expiresAt: value.data.expires_at
          });
          this.msgResponse = 'Successful Login, redirect in a few seconds';
          this.classMsgResponse = 'bg--success';
          this.$router.push({ name: 'home' });
        })
        .catch(error => {
          const err = error.response.data;
          this.msgResponse = err.data.message;
          this.classMsgResponse = 'bg--alert';
        });
    } else {
      await AuthService.getInstance()
        .register(form.formData)
        .then(value => {
          this.msgResponse = value.data.message;
          this.classMsgResponse = 'bg--success';
        })
        .catch(error => {
          const err = error.response.data;
          this.msgResponse = err.data.message;
          this.classMsgResponse = 'bg--alert';
        });
    }
  }

  private equalsPassword(): string | null {
    if (
      this.registerForm.controls['confirmPassword'].value !==
      this.registerForm.controls['password'].value
    )
      return 'Password Not Equals';
    return null;
  }

  created() {
    this.$store.dispatch('auth/clearAuth');
    this.loginForm.controls['username'] = new ReactiveFormControl('', [
      Validators.required
    ]);
    this.loginForm.controls['password'] = new ReactiveFormControl('', [
      Validators.required
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
