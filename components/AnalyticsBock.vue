<script setup lang="ts">
import { computed } from "vue"

const getIcon = computed(() => {
  return '/'
})
</script>

<template>
  <div class="bg">
    <div class="flex flex-col gap-8">
      <h2>Аналитика следующего уровня для управления вашим бизнесом</h2>
      <p>Какой то текст</p>
      <button class="banner-button">Заказть</button>
    </div>
    <img
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        :src="getIcon + 'Untitled-4.png'"
    />
  </div>
</template>

<style scoped>
h2 {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}
.bg {
  background: url('/4.jpeg');
  background-size: cover;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 50px 0;
  flex-wrap: wrap;
}
.banner-button {
  border: 1px solid;
  border-radius: 7px;
  padding: 10px 20px;
  background: #000000;
  color: #ffffff;
}
.bg img {
  max-width: 500px;
}
.bg div {
  flex: 0 1 30%;
}
@media (max-width: 800px) {
  .bg img {
    max-width: 290px;
  }
  .bg div {
    flex: 0 1 100%;
    align-items: center;
  }
}
</style>