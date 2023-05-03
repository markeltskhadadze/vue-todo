<template>
  <div>
    <h2>Reviews from our users</h2>
    <div class="d-flex justify-content-around flex-wrap">
      <div data-aos="flip-up" v-for="(review, index) in reviews" :key="index" class="review">
        <img class="avatar" :src="review.userAvatar" alt="">
        <h3>{{ review.fullName }}</h3>
        <p>{{ review.reviewText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {  mapGetters, mapActions } from 'vuex'

export default {
  name: 'ReviewsBlock',
  methods: {
    ...mapActions(['getReviews']),
  },
  computed: {
    ...mapGetters(['reviews'])
  },
  async created() {
    await this.getReviews()
  }
}
</script>

<style scoped>
.avatar {
  width: 85px;
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 50px;
  font-size: 45px;
}
.review {
  border: 2px solid;
  border-radius: 8px;
  padding: 60px 55px;
  margin-bottom: 70px;
}
</style>