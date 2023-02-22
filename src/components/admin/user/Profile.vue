<template>
  <div>
    <h1>Profile</h1>
    <div class="d-flex align-items-center flex-column">
      <div class="user-table" v-for="(userData, index) in user" :key="index">
        <div v-if="!edit">
          <p @click="editUser" class="text-end mb-0 edit">Edit</p>
          <p>id: {{ userData.id }}</p>
          <p>Name: {{ userData.login }}</p>
          <p>Password: *********</p>
        </div>
        <div v-if="edit">
          <p @click="editUser" class="text-end mb-0 edit">Close</p>
          <input type="text" :placeholder=userData.id>
          <input type="text" :placeholder=userData.login>
          <input type="text" placeholder="*********">
          <b-button>Edit</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProfileUser',
  data: () => ({
    edit: false
  }),
  methods: {
    editUser () {
      this.edit ? this.edit = false : this.edit = true
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style scoped>
.user-table {
  border: 1px solid;
  border-radius: 5px;
  text-align: left;
  padding: 15px;
}
</style>