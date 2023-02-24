<template>
  <div class="banner-home">
    <img class="position-relative" src="../../public/84770f_5251001816154d3d9e793f346f9eca55_mv2_d_5472_3648_s_4_2.webp" alt="">
    <h1 class="title-banner">We help teams to be more effective</h1>
  </div>
</template>

<script>
export default {
  name: 'BannerHome'
}
</script>
<style scoped>
.banner-home {
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
}
.banner-home img {
  filter: brightness(50%);
}
.title-banner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
}
</style>