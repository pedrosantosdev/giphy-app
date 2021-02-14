<template v-if="url.trim().length">
  <figure @dblclick="shareWhatsapp(url.mp4)">
    <img
      :src="url.url"
      :alt="alt"
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
  @Prop() alt?: string;
  @Prop() url?;
  @Prop() width?: string;
  @Prop() height?: string;

  shareWhatsapp(targetUrl: string): void {
    const target = 'whatsapp://send?text=' + encodeURIComponent(targetUrl);
    window.open(target, '_blank');
  }
}
</script>
