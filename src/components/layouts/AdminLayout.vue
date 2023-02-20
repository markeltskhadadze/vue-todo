<template>
  <section class="admin-panel">
    <div class="text-end">
      <b-dropdown id="dropdown-1" text="Menu" class="m-md-2">
        <b-dropdown-item>
          <router-link to="/admin/profile">
            <span class="title">Profile</span>
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
      </b-dropdown>
    </div>
    <SideBar />
    <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SideBar from '../admin/SideBar.vue'

export default {
  name: 'AdminLayout',
  components: {
    SideBar
  },
  methods: {
    signOut () {
      localStorage.removeItem('enter')
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>
* {
  background: grey;
}
</style>