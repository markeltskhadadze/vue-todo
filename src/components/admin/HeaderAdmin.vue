<template>
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
</template>

<script>
export default {
  name: 'HeaderAdmin',
  methods: {
    signOut () {
      localStorage.removeItem('enter')
      this.$router.push('/admin')
    }
  }
}
</script>