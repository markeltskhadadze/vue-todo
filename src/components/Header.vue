<template>
  <div>
    <div class="d-flex justify-content-end me-5">
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
  },
  created () {
    this.checked = localStorage.getItem('enter')
    if (this.checked === 'false' || this.checked === null) {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.logo-img {
  width: 120px;
}
</style>