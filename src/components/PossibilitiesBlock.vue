<template>
  <div class="d-flex justify-content-center flex-wrap">
    <div v-for="(post, index) in posts" :key="index" class="possibilities-block">
      <p>{{ post.author }}</p>
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
import {  mapActions, mapGetters } from 'vuex'

export default {
  name: 'PossibilitiesBlock',
  methods: {
    ...mapActions(['getPosts']),
  },
  computed: {
    ...mapGetters(['posts'])
  },
  async created () {
    await this.getPosts()
  }
}
</script>

<style scoped>
.possibilities-block {
  flex: 50%;
}
</style>