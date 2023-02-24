<template>
  <div class="d-flex justify-content-around align-items-center footer">
    <div class="social-block">
      <h3>Social Links</h3>
      <p v-for="(link, index) in socialLinks" :key="index">{{ link }}</p>
    </div>
    <div class="subscribe">
      <h3>New in email</h3>
      <p>Subscribe to the newsletter and receive the latest news every week:</p>
      <input type="email">
      <b-button>Sumbit</b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FooterBlock',
  computed: {
    ...mapGetters(['socialLinks'])
  }
}
</script>

<style scoped>
* {
  background: #434a74;
  color: #fff;
}
.footer {
  min-height: 200px;
}
.social-block p {
  margin-bottom: 0;
}
input {
  padding: 6px;
  border: 0;
  background: #6c757d;
}

input {
  outline: 0 !important;
}
</style>