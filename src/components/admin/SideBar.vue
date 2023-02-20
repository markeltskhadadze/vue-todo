<template>
  <div class="text-start">
    <h3>Navigation</h3>
      <ul class="nav-list">
        <li class="list-inline-item">
          <span class="overlay"></span>
          <router-link to="#" class="nav-list-link">
            <span class="icon"></span>
            <span class="title">Dashboard</span>
          </router-link>
        </li>
        <li class="list-inline-item">
          <span class="overlay"></span>
          <router-link to="/admin/category" class="nav-list-link">
            <span class="icon"></span>
            <span class="title">Category</span>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'SideBar'
}
</script>

<style scoped>
.nav-list {
  display: flex;
  flex-direction: column;
}
</style>