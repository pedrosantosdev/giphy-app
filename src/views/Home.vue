<template>
  <div class="home" v-for="img in imgs" :key="img.id">
    <Gif :url="img.url" />
  </div>
</template>

<script lang="ts">
import Gif from "@/components/Gif.vue";

export default {
  name: "home",
  components: {
    Gif
  },
  data() {
    return {
      imgs: []
    };
  },
  methods: {
    getGifs() {
      fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=gD8d7HmBLpKfqxO2T612MwmMWMeLzzlF&limit=25&rating=g",
        {
          method: "get",
          headers: {
            "Access-Control-Allow-Origin": "*"
          },
          mode: "cors"
        }
      )
        .then(response => response.json())
        .then(response => {
          if (response.meta.status === 200) {
            this.imgs = response.data;
          }
        });
    }
  },
  created: function() {
    this.getGifs();
  }
};
</script>
