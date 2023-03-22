<template>
  <div class="d-flex justify-content-around align-items-end header-home">
    <div class="d-flex">
      <p class="me-3">Home</p>
      <p class="me-3">Guides</p>
      <p class="me-3">About</p>
    </div>
    <div>
      <b-button @click="loginPage" variant="outline-dark">{{ linkName }}</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBase',
  data: () => ({
    checked: null
  }),
  methods: {
    loginPage () {
      this.$router.push('/login')
    },
    
  },
  computed: {
    linkName () {
      if (this.checked === 'false' || this.checked === null) {
        return 'Login'
      } else {
        return 'LogOut'
      }
    }
  }
}
</script>

<style scoped>
.logo-img {
  width: 120px;
}
.header-home {
  height: 60px;
}
</style>