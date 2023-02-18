import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AdminLayout from '@/components/layouts/AdminLayout'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import router from './router'
import store from './store'

import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.component('admin-layout', AdminLayout)
Vue.component('base-layout', BaseLayout)
Vue.component('auth-layout', AuthLayout)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
