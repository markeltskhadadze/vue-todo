<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>

<script>
export default {
  name: 'DashboardAdmin',
  data: () => ({
    checked: null
  }),
  created () {
    this.checked = localStorage.getItem('enter')
    if (this.checked === 'false' || this.checked === null) {
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>

</style>