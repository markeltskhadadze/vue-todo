<template>
  <div>
    <div class="text-center mt-4">
      <BannerHome />
    </div>
    <OurPossibilities />
    <CategoryBlog />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BannerHome from './BannerHome.vue'
import CategoryBlog from './CategoryBlog.vue'
import OurPossibilities from './OurPossibilities.vue'
import Footer from './Footer.vue'

export default {
  name: 'HomePage',
  components: {
    CategoryBlog,
    BannerHome,
    OurPossibilities,
    Footer
  },
  computed: {
    ...mapState(['category'])
  }
}
</script>

<style scoped>

</style>
