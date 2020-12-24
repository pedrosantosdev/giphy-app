<template v-if="url.trim().length">
  <figure>
    <img
      :src="url"
      :width="width"
      :height="height"
      crossorigin="Anonymous"
      loading="lazy"
    />
  </figure>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Gif extends Vue {
  @Prop() url?: string;
  @Prop() width?: string;
  @Prop() height?: string;
}
</script>
