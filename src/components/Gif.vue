<template v-if="url.length">
  <figure>
    <img :src="url" class="" crossorigin="Anonymous" loading="lazy" />
  </figure>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Gif extends Vue {
  @Prop() url?: string;
}
</script>
