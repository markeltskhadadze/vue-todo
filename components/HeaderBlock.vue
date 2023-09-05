<script setup lang='ts'>
  // import LangSwitcher from "./LangSwitcher.vue"
</script>

<template>
  <div class="flex justify-evenly items-center header-home">
    <div>
      <NuxtLink to="/">
        Главная
      </NuxtLink>
    </div>
    <div class="flex">
      <NuxtLink to="/tariffs" class="header-link me-3">
        Тарифы
      </NuxtLink>
      <p id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class=" header-link me-3" type="button">Услуги
        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg></p>
      <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
          <li>
            <a href="/seo-audit" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">SEO-аудит сайта</a>
          </li>
          <li>
            <a href="/seo-optimization" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Продвижение веб-сайта</a>
          </li>
        </ul>
      </div>
      <LangSwitcher />
    </div>
  </div>
</template>

<style scoped>
.header-link {
  color: #000000;
}
.header-home {
  min-height: 60px;
  min-width: 100%;
  position: fixed;
  background: #ffffffb5;
  z-index: 999;
}
</style>