import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AdminLayout from '@/components/layouts/AdminLayout'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'

// BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('admin-layout', AdminLayout)
Vue.component('base-layout', BaseLayout)
Vue.component('auth-layout', AuthLayout)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
