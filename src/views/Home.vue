<template>
  <div id="GridImages" class="container" v-if="imgs.length">
    <Gif
      v-for="(img, index) in imgs"
      :key="index"
      :url="img.images.downsized.url"
    />
    <div :class="{ 'is-hidden': !isLoading }" id="loading">
      <img src="../assets/icons/loading.svg" alt="Loading Animation"/>
    </div>
  </div>
  <div v-else>
    <h1>No results found</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Gif from "@/components/Gif.vue";
import Response from "@/interfaces/response";
import axios, { AxiosResponse } from "axios";

@Component({
  components: {
    Gif
  }
})
export default class Home extends Vue {
  private imgs: [] = [];
  private page = this.$route.params.page
    ? parseInt(this.$route.params.page, 10)
    : 1;
  private isLoading = false;

  public async getGifs() {
    const apikey = process.env.VUE_APP_GIHPY_API_KEY;
    const limit = 25;
    const offset = (this.page - 1) * limit;

    this.isLoading = true;

    await axios
      .get(
        `//api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=${limit}&offset=${offset}&rating=g`
      )
      .then((value: AxiosResponse<Response>) => {
        this.appendImages(value.data.data);
      })
      .catch(error => console.log(error));

    this.isLoading = false;
  }

  private appendImages(data: []) {
    data.forEach(value => this.imgs.push(value));
  }

  scroll() {
    window.onscroll = () => {
      const bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.page += 1;
        this.getGifs();
      }
    };
  }

  beforeMounted() {
    if (isNaN(this.page)) {
      this.$router.replace("/not-found");
    }
  }

  mounted() {
    this.getGifs();
    this.scroll();
  }
}
</script>
