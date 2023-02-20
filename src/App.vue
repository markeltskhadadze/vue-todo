<template>
  <!-- <div id="app" class="h-screen">
    <ListItemsPage />
  </div> -->
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
// import ListItemsPage from './components/ListItemsPage.vue'

export default {
  name: 'App',
  computed: {
    layout(){
      (this.$route.meta.layout)
      return this.$route.meta.layout || 'base-layout'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
