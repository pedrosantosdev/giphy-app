<template>
  <label class="input-text">
    <input :type="type" :placeholder="name" :name="name" />
    <span class="label">{{ label }}</span>
    <span class="error" v-show="hasError">{{ msgError }}</span>
    <span class="focus-bg"></span>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Input extends Vue {
  @Prop() label?: { type: string; default: 'label' };
  @Prop() name?: { type: string; default: 'name' };
  @Prop() type?: { type: string; default: 'text' };
  @Prop() hasError?: { type: boolean; default: false };
  @Prop() msgError?: { type: string; default: '' };
}
</script>
