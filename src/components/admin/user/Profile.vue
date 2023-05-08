<template>
  <div>
    <h1>Profile</h1>
    <div class="d-flex align-items-center flex-column">
      <div class="user-table">
        <div v-if="!edit">
          <p @click="editUser" class="text-end mb-0 edit">Edit</p>
          <p>id: {{ profile._id }}</p>
          <p>Name: {{ profile.name }}</p>
          <p>Password: *********</p>
        </div>
        <div v-if="edit">
          <p @click="editUser" class="text-end mb-0 edit">Close</p>
          <input type="text" :placeholder=profile._id>
          <input type="text" v-model="name" :placeholder=profile.name>
          <input type="text" v-model="password" placeholder="*********">
          <b-button @click="editUserData">Edit</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProfileUser',
  data: () => ({
    edit: false,
    name: '',
    password: ''
  }),
  methods: {
    ...mapActions(['getProfile', 'updateUser']),
    editUser () {
      this.edit ? this.edit = false : this.edit = true
    },
    editUserData () {
      this.updateUser({
        _id: this.profile._id,
        name: this.name,
        password: this.password
      })
    }
  },
  computed: {
    ...mapGetters(['profile'])
  },
  created () {
    this.getProfile()
    this.profile
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