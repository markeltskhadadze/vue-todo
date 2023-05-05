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
import { mapGetters } from 'vuex'

export default {
  name: 'AdminLayout',
  components: {
    SideBar,
    HeaderAdmin
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  async created () {
    if (localStorage.getItem('token')) {
      this.$store.commit('setToken', localStorage.getItem('token'))
    }
    if (!this.isAuthenticated) {
      return this.$router.push('/admin/')
    }
  }
}
</script>

<style scoped>
* {
  background: #808080;
}
.admin-panel {
  height: 100vh;
}
</style>