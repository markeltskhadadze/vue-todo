<template>
  <div class="top-content">
    <div class="banner-content">
      <h1>Travel to your dream</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sequi nisi consequatur corrupti minima maxime. Suscipit deserunt, repellat dicta nostrum itaque iste, consequuntur nesciunt quam facilis eveniet nobis incidunt veritatis!</p>
      <b-button class="banner-button" variant="dark">Reserve Ticket</b-button>
    </div>
    <img :class="{ 'image-banner': width > 1200, 'image-banner-modile': width < 1200 }" src="../../public/190827135829_mb073lo-2014-2034.jpeg" alt="">
  </div>
</template>

<script>
export default {
  name: 'BannerHome',
  data: () => ({
    width: 0
  }),
  methods: {
    updateWidth() {
      this.width = window.innerWidth
    }
  },
  created() {
    window.addEventListener('resize', this.updateWidth)
    this.updateWidth()
  }
}
</script>
<style scoped>
.banner-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 500px;
}
.top-content {
  padding: 20px 0px 50px 0px;
  display: flex;
  justify-content: space-around;
}
.image-banner-modile {
  display: none;
}
.image-banner {
  max-height: 530px;
  max-width: 880px;
}
h1 {
  font-size: 80px;
}
.banner-button {
  max-width: 250px;
}
</style>