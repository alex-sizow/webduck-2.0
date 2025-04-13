<script setup lang="ts">

import ScrollToTopButton from '../components/Buttons/ScrollToTopButton.vue'
</script>

<template>
  <Header />
  <main><NuxtPage /></main>
  <Footer />
  <ScrollToTopButton />
</template>

<style scoped>
main {
  min-height: 85vh;
  padding: 20px 5px;
}
</style>
