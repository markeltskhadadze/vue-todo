<script setup lang="ts">
  import { computed } from "vue"

  const getIcon = computed(() => {
    return '/'
  })
</script>

<template>
  <div class="bg">
    <div class="flex flex-col gap-4 justify-center items-center flex-1">
      <img :src="getIcon + '4151213.png'" class="why-image">
      <p>Гибкие преимущества</p>
    </div>
    <div class="flex flex-col gap-4 justify-center items-center flex-1">
      <img :src="getIcon + '4151213.png'" class="why-image">
      <p>Круглосуточная поддержка</p>
    </div>
    <div class="flex flex-col gap-4 justify-center items-center flex-1">
      <img :src="getIcon + '4151213.png'" class="why-image">
      <p>100% безопасность</p>
    </div>
    <div class="flex flex-col gap-4 justify-center items-center flex-1">
      <img :src="getIcon + '4151213.png'" class="why-image">
      <p>Доступный ценовой план</p>
    </div>
  </div>
</template>

<style scoped>
  .bg {
    color: #ffffff;
    background-color: #fe7062;
    display: flex;
    min-height: 350px;
  }
  .why-image {
    max-width: 90px;
    max-height: 90px;
  }
  @media (max-width: 800px) {
    .bg {
      flex-direction: column;
      gap: 20px;
    }
  }
</style>