<template v-if="url.length">
  <div>
    <img :src="url" class="" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    url: String
  }
})
export default class Gif extends Vue {}
</script>
