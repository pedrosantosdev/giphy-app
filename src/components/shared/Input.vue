<template>
  <label class="input-text">
    <input
      :type="type"
      :placeholder="name ? name : 'placeholder'"
      :name="name"
      v-model="formControl.value"
      v-on:keyup="$emit('keyup-input', formControl)"
      v-on:blur="$emit('blur-input', formControl)"
    />
    <span class="label">{{ label }}</span>
    <span class="error" v-show="formattedErros">{{ formattedErros }}</span>
    <span class="focus-bg"></span>
  </label>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  @Prop() label?: { type: string; default: 'label' };
  @Prop() name?: { type: string; default: '' };
  @Prop() type?: { type: string; default: 'text' };
  @Prop() formControl?: { value: string; errors: string[] };

  get formattedErros() {
    return this.formControl?.errors.join(', ');
  }
}
</script>
