<script setup lang="ts">
  import {ref, onMounted, type Ref, computed} from 'vue'

  let clientValue: Ref<number> = ref(2)
  let shouldStartCounter: Ref<boolean> = ref(false)

  function startCounter() {
    const intervalId = setInterval(() => {
      clientValue.value++
      if (clientValue.value >= 16) {
        clearInterval(intervalId)
      }
    }, 60)
  }
  function checkScroll() {
    const el = document.querySelector('.counter-text')
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && !shouldStartCounter.value) {
        shouldStartCounter.value = true
        startCounter()
      }
    }
  }

  const getClientValue = computed(() => {
    return clientValue.value
  })

  onMounted(() => {
    if (process.client) {
      window.addEventListener('scroll', checkScroll)
    }
  })
</script>

<template>
  <div class="bg">
    <div class="flex flex-col gap-4 items-center">
      <p class="counter-value">{{ getClientValue }}</p>
      <p class="counter-text">Клиенты</p>
    </div>
    <div class="flex flex-col gap-4 items-center">
      <p class="counter-value">10</p>
      <p class="counter-text">Члены команты</p>
    </div>
    <div class="flex flex-col gap-4 items-center">
      <p class="counter-value">5+</p>
      <p class="counter-text">Страны</p>
    </div>
  </div>
</template>

<style scoped>
  .bg {
    color: #ffffff;
    background-color: #4c4ff9;
    display: flex;
    min-height: 350px;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .counter-value {
    font-size: 96px;
  }
  .counter-text {
    font-size: 20px;
  }
  @media (max-width: 800px) {
    .bg {
      flex-direction: column;
    }
  }
</style>