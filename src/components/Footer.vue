<template>
  <div class="d-flex justify-content-around align-items-center footer">
    <div>
      <h3>My log travels</h3>
    </div>
    <div class="quick-links">
      <h3>Quick Links</h3>
      <ul class="d-flex justify-content-around">
        <div>
          <li>Home</li>
          <li>About Us</li>
          <li>Guides</li>
        </div>
        <div>
          <li>Blogs</li>
          <li>The team</li>
          <li>Contact Us</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FooterBlock',
  computed: {
    ...mapGetters(['socialLinks'])
  }
}
</script>

<style scoped>
* {
  background: #b7b7b7;
  color: #000;
}
.footer {
  min-height: 200px;
}
li {
  list-style: none;
}
</style>