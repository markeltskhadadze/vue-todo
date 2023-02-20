import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AdminAuth from '@/components/admin/AdminAuth.vue'
import DashboardAdmin from '@/components/admin/Dashboard.vue'
import CategoryAdmin from '@/components/admin/CategoryAdmin.vue'

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
    path: '/admin/category',
    name: 'category',
    component: CategoryAdmin,
    meta: {
      layout: 'admin-layout'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router