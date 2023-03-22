<template>
  <div>
    <div class="text-center mt-4">
      <BannerHome />
    </div>
    <OurPossibilities />
    <CategoryBlog />
    <Blogs />
    <ReviewsBlock />
    <SubmitForm />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BannerHome from './BannerHome.vue'
import CategoryBlog from './CategoryBlog.vue'
import OurPossibilities from './OurPossibilities.vue'
import Blogs from './Blogs.vue'
import ReviewsBlock from './ReviewsBlock.vue'
import SubmitForm from './SubmitForm.vue'
import Footer from './Footer.vue'

export default {
  name: 'HomePage',
  components: {
    CategoryBlog,
    BannerHome,
    OurPossibilities,
    Blogs,
    ReviewsBlock,
    SubmitForm,
    Footer
  },
  computed: {
    ...mapState(['category'])
  }
}
</script>

<style scoped>

</style>
