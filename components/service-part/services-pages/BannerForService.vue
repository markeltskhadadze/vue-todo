<script setup lang="ts">
  import { computed, ref, type Ref, type PropType } from "vue"
  import { sendForm } from '../../../stores/send-form'

  const props = defineProps({
    mode: {
      type: String as PropType<string>,
      required: true
    }
  })

  const formData = sendForm()
  let phone: Ref<string> = ref('')
  async function sendPhone () {
    await formData.sendPhoneNumber(phone.value)
  }

  const getIcon = computed(() => {
    return '/'
  })
</script>

<template>
  <div v-if="props.mode === 'seoPage'" class="bg">
    <div class="flex flex-col">
      <h1>SEO-аудит сайта</h1>
      <p class="service-content">Уверены ли вы, что здоровье вашего сайта в норме? Если нет, то мы поможем найти и исправить
        слабые места вашего сайта, что поможет ему в продвижении.</p>
      <p class="service-content">Стоимость</p>
      <p class="service-content">от 10 000 грн.</p>
      <div class="call-back">
        <p class="service-content">Наши специалисты всегда открыты для обратной связи.</p>
        <div class="flex gap-4">
          <input v-model="phone" placeholder="+38 (0__)-___-__-__" class="number-field" type="text" />
          <button class="send-call-back" @click="sendPhone">Отправить заявку</button>
        </div>
      </div>
    </div>
    <img
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        :src="getIcon + 'Untitled-3.png'"
    />
  </div>
  <div v-if="props.mode === 'siteOptimization'" class="bg">
    <div class="flex flex-col">
      <h1>Продвижение веб-сайта</h1>
      <p class="service-content">Обещать - не значит жениться, так и создать сайт - не значит стать видимым в поисковых системах. Для этого нужно грамотное продвижение сайта.</p>
      <p class="service-content">Стоимость</p>
      <p class="service-content">от 14 700 грн.</p>
      <div class="call-back">
        <p class="service-content">Наши специалисты всегда открыты для обратной связи.</p>
        <div class="flex gap-4">
          <input v-model="phone" placeholder="+38 (0__)-___-__-__" class="number-field" type="text" />
          <button class="send-call-back" @click="sendPhone">Отправить заявку</button>
        </div>
      </div>
    </div>
    <img
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        :src="getIcon + 'Untitled-7.png'"
    />
  </div>
</template>

<style scoped>
.send-call-back {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  width: 48%;
  padding: 0 40px;
  border: 2px solid #fe7062;
  border-radius: 10px;
  text-align: center;
  color: #000000;
  background: #fe7062;
  font-size: 15px;
}
.number-field {
  width: 100%;
  min-height: 64px;
  font-weight: 400;
  color: #000000;
  font-size: 16px;
  border-radius: 10px;
  padding: 0px 20px;
  border: 1px solid #4d4ffa;
  background: #FFFFFF;
}
.service-content {
  max-width: 550px;
  margin-bottom: 35px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
h1 {
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  max-width: 540px;
  margin-bottom: 30px;
}
.bg {
  background: url('/1.jpeg');
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0;
  flex-wrap: wrap;
  margin-bottom: 50px;
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
    flex: 0 1 85%;
    align-items: center;
  }
}
</style>