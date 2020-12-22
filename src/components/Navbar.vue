<template>
  <div class="navbar">
    <div class="logo">
      <img src="../assets/logo.png" alt="Home Logo" loading="lazy" />
    </div>
    <div class="search">
      <input
        type="text"
        class="input"
        v-model="searchText"
        placeholder="Search"
      />
      <button class="btn" @click="onSearch(searchText)">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Navbar",
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    onSearch(text: string) {
      this.$emit("search", text);
    }
  }
};
</script>
