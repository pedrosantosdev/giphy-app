<template>
  <label class="input-text">
    <input
      :type="type"
      :placeholder="name ? name : 'placeholder'"
      :name="name"
      v-model="formControl.value"
    />
    <span class="label">{{ label }}</span>
    <span class="error">{{ formControl.errors }}</span>
    <span class="focus-bg"></span>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Input extends Vue {
  @Prop() label?: { type: string; default: 'label' };
  @Prop() name?: { type: string; default: '' };
  @Prop() type?: { type: string; default: 'text' };
  @Prop() formControl?: { value: string; errors: string[] };
}
</script>
