<template>
  <div class="d-flex justify-content-around align-items-end header-home">
    <div class="d-flex">
      <p class="me-3">Product</p>
      <p class="me-3">Solution</p>
      <p class="me-3">Features</p>
      <p class="me-3">Resourses</p>
      <p class="me-3">Pricing</p>
      <p class="me-3">Help</p>
    </div>
    <div>
      <ul>
        <li @click="loginPage" class="list-inline-item">{{ linkName }}</li>
      </ul>
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