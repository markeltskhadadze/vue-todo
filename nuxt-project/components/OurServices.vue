<script setup lang="ts">
  import ServiceContent from './service-part/ServiceContent.vue'
  import { reactive, onMounted, toRaw } from 'vue'
  import { homePageData } from '../stores/home-page-data'
  import { type TService } from '../types'

  const homeData = homePageData()

  const services: TService[] = reactive(toRaw(homeData.services))

  onMounted (async () => {
    await homeData.getServices()
  })
</script>

<template>
  <div class="logs-block">
    <h2>Мы предоставляем лучшие услуги</h2>
    <ServiceContent :services="services" />
    <div class="flex justify-center">
      <button class="see-more">Посмотреть все</button>
    </div>
  </div>
</template>

<style scoped>
  .logs-block {
    display: flex;
    flex-direction: column;
    margin: 60px 0;
    background-image: linear-gradient(white, #ededfe);
  }
  h2 {
    color: #000000;
    font-size: 45px;
    text-align: center;
  }
  p {
    color: #fff;
  }
  .see-more {
    padding: 12px 30px 13px;
    background-color: #fe7062;
    color: #ffffff;
    border-radius: 25px;
  }

</style>