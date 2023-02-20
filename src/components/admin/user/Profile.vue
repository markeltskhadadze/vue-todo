<template>
  <div>
    <h1>Profile</h1>
    <div v-for="(userData, index) in user" :key="index">
      <p>id: {{ userData.id }}</p>
      <p>Name: {{ userData.login }}</p>
      <p>Password: *********</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProfileUser',
  computed: {
    ...mapState(['user'])
  }
}
</script>