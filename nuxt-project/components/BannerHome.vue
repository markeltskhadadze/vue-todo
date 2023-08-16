<script setup lang="ts">
  import { ref, type Ref, onMounted } from 'vue'

  // let width: Ref<number> = ref(window.innerWidth)
  //
  // function updateWidth (): void {
  //   width.value = window.innerWidth
  // }
  //
  // onMounted (() => {
  //   window.addEventListener('resize', updateWidth)
  // })
  let width: Ref<number> = ref(1200)
</script>

<template>
  <div class="top-content">
    <div class="banner-content">
      <h1>Увеличивайте посещаемость вашего сайта вместе с нами!</h1>
      <p>Какой то текст</p>
      <div class="flex justify-center">
        <button class="banner-button">Заказть продвижение</button>
        <button class="banner-button">Тарифы</button>
      </div>
    </div>
    <img data-aos="zoom-in-up"
         data-aos-easing="linear"
         data-aos-duration="1000"
         :class="{
                    'image-banner': width > 1200,
                    'image-banner-modile': width < 1200
                  }"
         src="../../public/seo-banner.png" alt=""
    />
  </div>
</template>

<style scoped>
  .banner-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 0 1 30%;
    line-height: 1;
  }
  .top-content {
    padding: 60px 0 50px 0;
    display: flex;
    justify-content: space-evenly;
    background: url('/banner-home-page.jpeg');
    height: 100vh;
    background-size: cover;
  }
  .image-banner-modile {
    display: none;
  }
  .image-banner {
    max-height: 530px;
    max-width: 880px;
  }
  h1 {
    font-size: 80px;
  }
  .banner-button {
    border: 1px solid;
    border-radius: 7px;
    padding: 10px 20px;
    background: #000000;
    color: #ffffff;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 36px;
    }
  }
</style>