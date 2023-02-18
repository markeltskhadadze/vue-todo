<template>
  <div class="d-flex justify-content-between align-items-baseline">
    <div class="ms-5">
      <img class="logo-img " src="/logo-social.png" alt="">
    </div>
    <div class="d-flex me-5">
      <ul v-for="(link, index) in nav" :key="index">
        <li class="list-inline-item">{{ link }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header-test',
  computed: {
    ...mapState(['nav'])
  }
}
</script>

<style scoped>
.logo-img {
  width: 120px;
}
</style>