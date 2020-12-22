<template>
  <div>
    <Navbar @search="onSearch" />
    <div id="GridImages" class="container" v-if="imgs.length">
      <Gif
        v-for="(img, index) in imgs"
        :key="index"
        :url="img.images.downsized.url"
      />
      <div :class="{ 'is-hidden': !isLoading }" id="loading">
        <img src="../assets/icons/loading.svg" alt="Loading Animation" />
      </div>
    </div>
    <div v-else>
      <h1>No results found</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Gif from "@/components/Gif.vue";
import Navbar from "@/components/Navbar.vue";
import Response from "@/interfaces/response";
import axios, { AxiosResponse } from "axios";

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
  private isAppend = true;
  private limit = 25;
  private max = this.limit;
  private hasMore = true;
  protected apikey = process.env.VUE_APP_GIHPY_API_KEY;
  protected uri = "//api.giphy.com/v1/gifs";

  public onSearch(value: string) {
    this.page = 1;
    this.max = this.limit;
    this.isAppend = false;
    this.search = value;
    this.getGifs();
  }

  public async getGifs() {
    const offset = (this.page - 1) * this.limit;
    const type = this.search.length ? "search" : "trending";
    let uri = `${this.uri}/${type}?api_key=${this.apikey}&limit=${this.limit}&offset=${offset}&rating=g`;
    if (this.search.length) {
      uri += `&q=${this.search}`;
    }

    this.isLoading = true;

    await axios
      .get(uri)
      .then((value: AxiosResponse<Response>) => {
        const response = value.data;
        if (this.isAppend) {
          this.appendImages(response.data);
        } else {
          this.imgs = response.data;
        }
        this.max = response.pagination.total_count;
        this.hasMore = this.max > offset;
      })
      .catch(error => console.log(error));

    this.isLoading = false;
    this.isAppend = true;
  }

  private appendImages(data: []) {
    data.forEach(value => this.imgs.push(value));
  }

  scroll() {
    window.onscroll = () => {
      const bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
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
