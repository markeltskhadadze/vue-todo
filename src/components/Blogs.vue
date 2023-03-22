<template>
  <div class="d-flex justify-content-around flex-wrap blogs-content">
    <div data-aos="flip-left" v-for="(post, index) in posts" :key="index">
      <img :src=post.img alt="" class="blog-img">
      <hr>
      <h3>{{ post.title }}</h3>
      <p class="description">{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
import {  mapActions, mapGetters } from 'vuex'

export default {
  name: 'Blogs-Content',
  methods: {
    ...mapActions(['getPosts']),
  },
  computed: {
    ...mapGetters(['posts'])
  },
  // async created () {
  //   await this.getPosts()
  // }
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
  max-width: 250px;
  text-align: left;
}
.blogs-content {
  margin: 80px 0px;
}
.blog-img {
  width: 250px;
}
</style>