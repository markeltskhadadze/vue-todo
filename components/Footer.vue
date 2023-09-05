<script setup lang="ts">
  import { computed } from 'vue'

  const getIcon = computed(() => {
    return '/'
  })
</script>

<template>
  <div class="flex align-items-center footer">
    <div class="left-footer-block">
      <h3>Logo</h3>
    </div>
    <div class="quick-links">
      <img :src="getIcon + 'socials-1.svg'" />
      <img :src="getIcon + 'socials-2.svg'" />
    </div>
  </div>
</template>

<style scoped>
  * {
    padding: 20px 0;
    background: #F6FBFD;
    color: #000;
    display: flex;
    justify-content: space-evenly;
  }
  .quick-links {
    display: flex;
    gap: 20px;
  }
  .quick-links img {
    cursor: pointer;
    transition: 0.2s
  }
  .quick-links img:hover {
    transform: scale(1.1);
  }
</style>