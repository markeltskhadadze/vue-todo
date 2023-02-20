<template>
  <div>
    <Header />
    <div class="main-panel">
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
// import Footer from './components/Footer.vue'

export default {
  name: 'BaseLayout',
  components: {
    Header
  }
}
</script>