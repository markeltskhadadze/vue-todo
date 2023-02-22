<template>
  <div>
    <h1>Users</h1>
    <div>
      <b-button @click="show=true">Add new user</b-button>
      <b-modal
        centered
        v-model="show"
        title="Add new user"
        :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant"
        :body-bg-variant="bodyBgVariant"
        :body-text-variant="bodyTextVariant"
        :footer-bg-variant="footerBgVariant"
        :footer-text-variant="footerTextVariant"
      >
      <div class="d-flex flex-column align-items-center">
        <label class="text-white" for="input">User name</label>
        <input type="text" v-model="name" placeholder="user name">
        <label class="text-white" for="input">Password</label>
        <input type="password" v-model="password" placeholder="enter password">
        <label class="text-white">Role</label>
        <select v-model="role">
          <option>admin</option>
          <option>user</option>
        </select>
      </div>
      <template #modal-footer>
        <div class="w-100" variant="dark">
          <b-button
            variant="dark"
            size="sm"
            class="float-right"
            @click="addUser()"
          >
            Submit
          </b-button>
          <b-button
            variant="dark"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
    <b-table
      :items="users"
      :fields="fields"
    >
    <template v-slot:cell(actions)="{item}">
      <b-button @click="deleteThisUser(item)">Delete User</b-button>
    </template>
  </b-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AllUsers',
  data: () => ({
    password: '',
    name: '',
    role: '',
    show: false,
    headerBgVariant: 'dark',
    headerTextVariant: 'light',
    bodyBgVariant: 'dark',
    bodyTextVariant: 'dark',
    footerBgVariant: 'dark',
    footerTextVariant: 'dark',
    fields: ['id', 'login', 'role', 'actions']
  }),
  methods: {
    ...mapActions(['getAllUsers', 'addNewUser', 'deleteUser']),
    async addUser () {
      await this.addNewUser ({
        id: Math.floor(Math.random() * 11),
        login: this.name,
        password: this.password,
        role: this.role
      })
    },
    async deleteThisUser (user) {
      await this.deleteUser ({
        id: user.id
      })
    }
  },
  computed: {
    ...mapGetters(['users'])
  },
  async created () {
    await this.getAllUsers()
  }
}
</script>

<style scoped>
</style>