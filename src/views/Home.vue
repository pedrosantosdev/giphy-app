<template>
  <div class="home">
    <Navbar @search="onSearch" :search="searchState" />
    <transition name="fade" mode="out-in">
      <div key="GridImages" id="GridImages" class="container" v-if="!isEmpty">
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
import { Component, Vue } from 'vue-property-decorator';
import Gif from '@/components/Gif.vue';
import Navbar from '@/components/Navbar.vue';
import IGif from '@/interfaces/gif';

@Component({
  components: {
    Gif,
    Navbar
  }
})
export default class Home extends Vue {
  private page = this.$route.params.page
    ? parseInt(this.$route.params.page, 10)
    : 1;
  private search = '';
  private max = this.limit;

  get stateGif() {
    return this.$store.state.gif;
  }

  get hasMore() {
    return this.stateGif.hasMore;
  }

  get isEmpty() {
    return this.stateGif.isEmpty;
  }

  get limit() {
    return this.stateGif.limit;
  }

  get isLoading() {
    return this.stateGif.isLoading;
  }

  get imgs(): IGif[] {
    return this.stateGif.imgs;
  }

  get searchState() {
    return this.stateGif.search;
  }

  get hasError() {
    return this.stateGif.hasError;
  }

  public onSearch(value: string) {
    this.max = this.limit;
    this.$store.dispatch('gif/getGifs', {
      limit: this.limit,
      search: value,
      append: false
    });
  }

  public getGifs() {
    this.$store.dispatch('gif/getGifs', {
      page: this.page,
      limit: this.limit,
      search: this.searchState
    });
  }

  scroll() {
    window.onscroll = () => {
      const currentPosition =
        document.documentElement.scrollTop + window.innerHeight;
      const bottomOfWindow =
        currentPosition + window.innerHeight * 0.4 >=
        document.documentElement.offsetHeight;
      if (bottomOfWindow && !this.isLoading && this.hasMore && !this.hasError) {
        this.page += 1;
        this.getGifs();
      }
    };
  }

  beforeMounted() {
    if (isNaN(this.page)) {
      this.$router.replace('/not-found');
    }
  }

  mounted() {
    this.$store.dispatch('notification/showNotification', {
      msg: 'Hi There!',
      type: 'success',
      time: 2000
    });
    this.getGifs();
    this.scroll();
  }
}
</script>
