<script setup lang="ts">
  import { reactive, onMounted, toRaw, computed, ref, type Ref } from 'vue'
  import { homePageData } from '../stores/home-page-data'
  import { type TReviews } from '../types'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import 'swiper/css/scrollbar'

  const homeData = homePageData()
  const reviews: TReviews[] = reactive(toRaw(homeData.reviews))
  let activeIndex: Ref<number> = ref(1)
  const modules = [Navigation, Pagination, Scrollbar, A11y]

  function update(index: number) {
    activeIndex.value = index
  }

  const getIcon = computed(() => {
    return '/'
  })

  onMounted (async () => {
    await homeData.getReviews()
  })
</script>

<template>
  <div class="bg">
    <img
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        :src="getIcon + 'Untitled-7.png'"
        class="review-image"
    />
    <div class="flex flex-col gap-28 reviews-wrapper">
      <h2>Что говорят клиенты</h2>
      <swiper
          :modules="modules"
          :slides-per-view="2"
          navigation
          :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="(review, index) in reviews" :key="index">
          <div class="reviews-content">
            <img :src="getIcon + 'img_569204.png'" class="avatar"
            />
            <h3>{{ review.fullName }}</h3>
            <p>{{ review.reviewText }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
  .avatar {
    width: 85px;
  }
  .bg {
    background: url('/2.jpeg');
    background-size: cover;
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    padding: 50px 0;
    flex-wrap: wrap;
  }
  h2 {
    margin-bottom: 50px;
    font-size: 45px;
    text-align: center;
  }
  .review-image {
    max-height: 500px;
    max-width: 500px;
  }
  .reviews-content {
    max-width: 550px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0 10px 20px rgba(72, 192, 227, 0.12);
    border-radius: 30px;
  }
  .reviews-wrapper {
    flex: 0 1 30%;
  }
  @media (max-width: 800px) {
    .bg img {
      max-width: 380px;
    }
    .bg div {
      flex: 0 1 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .reviews-content {
      display: block;
      padding: 50px;
    }
    .carousel__item {
      max-width: 180px;
      max-height: 200px;
    }
    h2 {
      font-size: 35px;
    }
  }
</style>