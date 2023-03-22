<template>
  <div>
    <h2>Subscribe to updates</h2>
    <div class="d-flex justify-content-around top-content">
      <img class="image-banner" src="../../public/190827135829_mb073lo-2014-2034.jpeg" alt="">
      <div class="banner-content">
        <input type="text" placeholder="First Name *" required>
        <input type="text" placeholder="Last Name *" required>
        <input type="email" placeholder="Email Subject *" required>
        <textarea name="" placeholder="Write somthing here..." id="" cols="30" rows="10"></textarea>
        <b-button variant="dark">Submit</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmitForm'
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
}
.image-banner {
  max-height: 530px;
  max-width: 880px;
}
h2 {
  font-size: 45px;
  margin-bottom: 40px;
}
input {
  border: 2px solid;
  border-radius: 6px;
  padding: 6px;
}
textarea {
  border: 2px solid;
  border-radius: 6px;
  padding: 6px;
}
</style>