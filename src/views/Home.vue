<template>
  <div>
    <Navbar @search="onSearch" />
    <transition name="fade" mode="out-in">
      <div
        key="GridImages"
        id="GridImages"
        class="container"
        v-if="imgs.length || isLoading"
      >
        <Gif
          v-for="(img, index) in imgs"
          :key="index"
          :url="img.images.downsized.url"
        />
        <div :class="{ 'is-hidden': !isLoading }" id="loading">
          <img src="../assets/icons/loading.svg" alt="Loading Animation" />
        </div>
      </div>
      <div key="Empty-Results" v-else class="full-size">
        <h1>No results found</h1>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Gif from "@/components/Gif.vue";
import Navbar from "@/components/Navbar.vue";
import GiphyService from "@/api/giphy.service";

@Component({
  components: {
    Gif,
    Navbar
  }
})
export default class Home extends Vue {
  private imgs: [] = [];
  private page = this.$route.params.page
    ? parseInt(this.$route.params.page, 10)
    : 1;
  private isLoading = false;
  private search = "";
  private limit = 25;
  private max = this.limit;
  private hasMore = true;
  private giphyService: GiphyService;

  constructor() {
    super();
    this.giphyService = new GiphyService();
  }

  public onSearch(value: string) {
    this.page = 1;
    this.max = this.limit;
    this.imgs = [];
    this.search = value;
    this.getGifs();
  }

  public async getGifs() {
    this.isLoading = true;
    const response = await this.giphyService
      .getSearch(this.page, this.limit, this.search)
      .finally(() => (this.isLoading = false));

    this.appendImages(response.data);
  }

  private appendImages(data: []) {
    data.forEach(value => this.imgs.push(value));
  }

  scroll() {
    window.onscroll = () => {
      const currentPosition =
        document.documentElement.scrollTop + window.innerHeight;
      const bottomOfWindow =
        currentPosition + window.innerHeight * 0.4 >=
        document.documentElement.offsetHeight;
      if (bottomOfWindow && this.hasMore) {
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
