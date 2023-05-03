<template>
  <div class="d-flex justify-content-around flex-wrap blogs-content">
    <div data-aos="flip-left" class="blog-width" v-for="(post, index) in posts" :key="index">
      <img :src=post.img alt="" :class="{ 'blog-img': width > 1200, 'blog-img-modile': width < 1200 }">
      <hr>
      <h3>{{ post.title }}</h3>
      <p class="description">{{ post.description }}</p>
    </div>
    <b-button v-if="posts.length > 6" variant="dark">Load More</b-button>
  </div>
</template>

<script>
import {  mapActions, mapGetters } from 'vuex'

export default {
  name: 'Blogs-Content',
  data: () => ({
    width: 0
  }),
  methods: {
    ...mapActions(['getPosts', 'getReviews']),
    updateWidth() {
      this.width = window.innerWidth
    }
  },
  computed: {
    ...mapGetters(['posts'])
  },
  async created() {
    window.addEventListener('resize', this.updateWidth)
    this.updateWidth()
    await this.getPosts()
  }
}
</script>

<style scoped>
.possibilities-block {
  flex: 50%;
}
hr {
    margin: 1rem 0;
    color: inherit;
    border: 0;
    border-top: 2px solid #000;
    opacity: 0.25;
    max-width: 50px;
}
h3 {
  text-align: left;
}
.description {
  text-align: left;
}
.blogs-content {
  margin: 80px 0px;
}
.blog-img {
  width: 500px;
}
.blog-img-modile {
  width: 250px;
}
.blog-width {
  flex: 33.333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>