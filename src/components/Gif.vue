<template v-if="url.trim().length">
  <figure @dblclick="shareWhatsapp(url)">
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

  shareWhatsapp(targetUrl: string): void {
    const target = 'whatsapp://send?text=' + encodeURIComponent(targetUrl);
    window.open(target, '_blank');
  }
}
</script>
