// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true},
  modules: ['@pinia/nuxt', 'nuxt-simple-sitemap', '@nuxtjs/i18n'],
  // sitemap rules
  // routeRules: {
  //   '/admin/**': { index: false },
  //   '/login': { index: false }
  // },
  // i18n: {
  //   locales: [
  //     {
  //       code: "ru",
  //       name: "Russian",
  //       iso: "ru-RU",
  //       dir: "ltr",
  //       file: "ru.js",
  //     },
  //     {
  //       code: "uk",
  //       name: "Ukrainian",
  //       iso: "uk-UA",
  //       dir: "rtl",
  //       file: "uk.js",
  //     }
  //   ],
  //   lazy: true,
  //   langDir: "locale",
  //   defaultLocale: "ru",
  //   detectBrowserLanguage: false
  // },
  // vueI18n: "./i18n.config.ts",
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
