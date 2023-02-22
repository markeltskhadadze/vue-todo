import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AdminAuth from '@/components/admin/AdminAuth.vue'
import DashboardAdmin from '@/components/admin/Dashboard.vue'
import AllUsers from '@/components/admin/UserList.vue'
import Profile from '@/components/admin/user/Profile.vue'
import LoginPage from '@/components/LoginPage.vue'
import ListItemsPage from '@/components/ListItemsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      layout: 'base-layout'
    }
  },
  {
    path: '/admin',
    name: 'admin-auth',
    component: AdminAuth,
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/admin/dashboard',
    name: 'dashboard',
    component: DashboardAdmin,
    meta: {
      layout: 'admin-layout'
    }
  },
  {
    path: '/admin/users',
    name: 'users',
    component: AllUsers,
    meta: {
      layout: 'admin-layout'
    }
  },
  {
    path: '/admin/profile',
    name: 'profile',
    component: Profile,
    meta: {
      layout: 'admin-layout'
    }
  },
  {
    path: '/login',
    name: 'login-page',
    component: LoginPage,
    meta: {
      layout: 'base-layout'
    }
  },
  {
    path: '/todo',
    name: 'list-items-page',
    component: ListItemsPage,
    meta: {
      layout: 'base-layout'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router