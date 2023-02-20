<template>
  <div>
    <div class="text-end">
      <b-dropdown id="dropdown-1" text="Menu" class="m-md-2">
        <b-dropdown-item>Profile</b-dropdown-item>
        <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
      </b-dropdown>
    </div>
    <div class="main-panel">
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </div>
    <SideBar />
  </div>
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
</style>