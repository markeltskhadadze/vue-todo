// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true},
  modules: ['@pinia/nuxt', 'nuxt-simple-sitemap'],
  // sitemap rules
  routeRules: {
    '/admin/**': { index: false },
    '/login': { index: false }
  },
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore']
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['~/assets/css/main.css']
})
