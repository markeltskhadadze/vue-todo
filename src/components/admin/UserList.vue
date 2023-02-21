<template>
  <div>
    <h1>Users</h1>
    <b-table
      :items="users"
      :fields="fields"
    ></b-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AllUsers',
  data: () => ({
    fields: ['id', 'login', 'role']
  }),
  methods: {
    ...mapActions(['getAllUsers'])
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