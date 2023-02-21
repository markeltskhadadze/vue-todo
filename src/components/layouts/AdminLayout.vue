<template>
  <section class="admin-panel">
    <HeaderAdmin />
    <div class="d-flex">
      <SideBar />
      <div class="container-fluid page-body-wrapper">
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SideBar from '../admin/SideBar.vue'
import HeaderAdmin from '../admin/HeaderAdmin.vue'

export default {
  name: 'AdminLayout',
  components: {
    SideBar,
    HeaderAdmin
  },
}
</script>

<style scoped>
* {
  background: grey;
}
.admin-panel {
  height: 100vh;
}
</style>