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
        v-on:keyup.enter="$emit('search', searchText)"
      />
      <button class="btn" @click="$emit('search', searchText)">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      searchText: ""
    };
  }
};
</script>
