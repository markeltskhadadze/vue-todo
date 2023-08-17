<script setup lang="ts">
import {type PropType, computed } from 'vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { type TService } from '../../types'
// import { countSliderMixin } from '../../mixins/count-slider-mixin'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const modules = [Navigation, Pagination, Scrollbar, A11y]
// const { getCountSlider } = countSliderMixin.setup()

const props = defineProps({
  services: {
    type: Array as PropType<TService[]>,
    required: true
  }
})

const getIcon = computed(() => {
  return '/'
})
</script>

<template>
  <div class="service-block">
    <swiper
        :modules="modules"
        :slides-per-view="2"
        navigation
        :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="(service, index) in props.services" :key="index">
        <div class="flex justify-center flex-wrap py-6">
          <div
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="500"
              class="service-content"
          >
            <img class="avatar" :src="getIcon + 'seo2.png'" alt="">
            <div class="content-block">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
h3 {
  font-size: 20px;
  text-align: center;
}
.content-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px 20px 20px;
}
.avatar {
  max-width: 250px;
  max-height: 250px;
}
.service-content {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 0 1 20%;
  background: #ffff;
  justify-content: center;
  min-width: 450px;
  border: 2px solid #EBF2FF;
  border-radius: 30px;
}
.service-content:hover {
  border: 2px solid transparent;
  box-shadow: 0 10px 20px rgba(72, 192, 227, 0.4);
}
.service-block {
  margin: 0 150px;
  padding: 50px 0;
}
@media(max-width: 1200px) {
  .service-block {
    margin: 0 20px;
    padding: 50px 0;
  }
  .service-content {
    min-width: 300px;
  }
}
</style>