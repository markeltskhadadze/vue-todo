<template>
  <div class="d-flex flex-column align-items-center">
    <div class="post" v-for="(post, index) in posts" :key="index">
      <p>Title: {{ post.title }}</p>
      <p>Description: {{ post.description }}</p>
    </div>
    <AddBlog />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AddBlog from './AddBlog.vue'

export default {
  name: 'AllPosts',
  components: {
    AddBlog
  },
  methods: {
    ...mapActions(['getPosts'])
  },
  computed: {
    ...mapGetters(['posts'])
  },
  created() {
    this.getPosts()
  }
}
</script>

<style scoped>
.post {
  border: 1px solid;
  border-radius: 20px;
  padding: 15px;
  margin: 20px 0px;
}
</style>