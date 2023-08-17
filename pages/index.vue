<script setup lang="ts">
import OurServices from '../components/OurServices.vue'
import ReviewsBlock from '../components/ReviewsBlock.vue'
import BannerHome from '../components/BannerHome.vue'
import SuccessFuture from '../components/SuccessFuture.vue'
import CounterBlock from '../components/CounterBlock.vue'
import AnalyticsBock from '../components/AnalyticsBock.vue'
import WhyWe from '../components/WhyWe.vue'
import OurCases from '../components/OurCases.vue'
</script>

<template>
  <div class="text-center">
    <BannerHome />
  </div>
  <OurServices />
  <SuccessFuture />
  <CounterBlock />
  <AnalyticsBock />
  <OurCases />
  <WhyWe />
  <ReviewsBlock />
</template>