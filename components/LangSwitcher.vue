<script setup lang="ts">
  const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <NuxtLink :to="switchLocalePath('ru')">Русский</NuxtLink>
  <NuxtLink :to="switchLocalePath('uk')">Украинский</NuxtLink>
</template>