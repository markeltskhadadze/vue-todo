<script setup lang="ts">
import { reactive, onMounted, toRaw, computed, ref, type Ref } from 'vue'
import { homePageData } from '../stores/home-page-data'
import { type TReviews } from '../types'

const homeData = homePageData()
const reviews: TReviews[] = reactive(toRaw(homeData.reviews))
let activeIndex: Ref<number> = ref(1)

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
      <div class="reviews-content">
        <div
            v-for="(review, index) in reviews"
            :key="index"
            :data-pos="index - activeIndex"
            @click="update(index)"
            :class="{ carousel__item_active: index === activeIndex }"
            class="carousel__item"
        >
          <img :src="getIcon + 'img_569204.png'" class="avatar"
          />
          <h3>{{ review.fullName }}</h3>
          <p>{{ review.reviewText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reviews-content::-webkit-scrollbar {
  width: 0;
}
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
.carousel__item {
  border: 2px solid;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.review-image {
  max-height: 500px;
  max-width: 500px;
}
.reviews-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.reviews-wrapper {
  flex: 0 1 30%;
}
.carousel__item {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  position: absolute;
  transition: all 0.3s ease-in;
  background: #d4d4d4;
  max-width: 280px;
  max-height: 300px;
  gap: 20px;
}
.carousel__item[data-pos='0'] {
  z-index: 5;
}
.carousel__item[data-pos='-1'],
.carousel__item[data-pos='1'] {
  opacity: 1;
  filter: blur(1px) grayscale(10%);
}
.carousel__item[data-pos='-1'] {
  transform: translateX(-90%) scale(0.8);
  z-index: 4;
}
.carousel__item[data-pos='1'] {
  transform: translateX(90%) scale(0.8);
  z-index: 4;
}
.carousel__item[data-pos='-2'],
.carousel__item[data-pos='2'] {
  opacity: 1;
  filter: blur(3px) grayscale(20%);
}
.carousel__item[data-pos='-2'] {
  transform: translateX(-50%) scale(0.8);
  z-index: 3;
}
.carousel__item[data-pos='2'] {
  transform: translateX(50%) scale(0.8);
  z-index: 3;
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