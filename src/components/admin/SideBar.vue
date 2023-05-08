<template>
  <div>
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
      <div class="text-start ms-5">
        <h3>Navigation</h3>
          <ul class="nav-list">
            <li class="list-inline-item">
              <span class="overlay"></span>
              <router-link to="/admin/dashboard" class="nav-list-link">
                <span class="icon"></span>
                <span class="title">Dashboard</span>
              </router-link>
            </li>
            <li class="list-inline-item">
              <span class="overlay"></span>
              <router-link to="/admin/users" class="nav-list-link">
                <span class="icon"></span>
                <span class="title">Users</span>
              </router-link>
            </li>
            <li class="list-inline-item">
              <span class="overlay"></span>
              <router-link to="/admin/all-posts" class="nav-list-link">
                <span class="icon"></span>
                <span class="title">All posts</span>
              </router-link>
            </li>
          </ul>
      </div>
    </b-sidebar>
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
  font-size: 20px;
}
.nav-list-link {
  color: #ffffff;
}
</style>