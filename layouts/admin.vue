<script setup lang="ts">
import { onMounted } from 'vue'
import { auth } from '../stores/auth'
// import HeaderAdmin from '../components'
// import SideBar from '../components'
import nuxtStorage from 'nuxt-storage'

const authData = auth()

onMounted(() => {
  if (nuxtStorage.localStorage.getItem('token')) {
    authData.setToken(nuxtStorage.localStorage.getItem('token'))
  }
  if (!authData.isAuthenticated) {
    // return router.push('/admin')
  }
})
</script>

<template>
  <section class="admin-panel">
<!--    <HeaderAdmin />-->
    <div class="flex justify-center">
<!--      <SideBar />-->
      <div class="container-fluid page-body-wrapper">
        <div class="main-panel">
          <div class="content-wrapper">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  background: #808080;
}
.admin-panel {
  height: 100vh;
}
</style>