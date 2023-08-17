<script lang="ts" setup>
import Header from '../components/HeaderBlock.vue'
</script>

<template>
  <Header />
  <div class="main-panel">
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>