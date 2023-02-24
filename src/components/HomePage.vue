<template>
  <div>
    <img src="/1505023567153066379.jpeg" alt="">
      <div class="text-center mt-4">
        <p>WE ARE A FULL SERVICE CREATIVE DESIGN STUDIO</p>
        <h1>Dedicated to crafting Beautiful Brands</h1>
      </div>
      <CategoryBlog />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CategoryBlog from './CategoryBlog.vue'

export default {
  name: 'HomePage',
  components: {
    CategoryBlog
  },
  computed: {
    ...mapState(['category'])
  }
}
</script>

<style scoped>

</style>
