import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    users: [],
    todoItems: [],
    categories: []  
  },
  mutations: {
    setNewTodo (state, data) {
      state.todoItems.unshift(data)
    },
    deleteTodo (state, data) {
      const index = state.todoItems.findIndex(item => item.id === data)
      state.todoItems.splice(index, 1)
    },
    setNewCategory(state, data) {
      state.categories.push(data)
    },
    deleteCategory (state, data) {
      const index = state.categories.findIndex(category => category.id === data)
      state.categories.splice(index, 1)
    },
    setUserData (state, data) {
      state.user = data
    },
    setAllUsers (state, data) {
      state.users = data
    },
    setNewUser (state, data) {
      state.users.push(data)
    },
    deleteSelectedUser (state, data) {
      const index = state.users.findIndex(user => user.id === data)
      state.users.splice(index, 1)
    }
  },
  actions: {
     addNewTodo(context, payload) {
      context.commit('setNewTodo', payload)
    },
    async addNewCategory(context, payload) {
      let id = context.state.user.map(user => user.id).join()
      await axios.patch(`http://localhost:3000/user/${id}`, payload)
      context.commit('setNewCategory', payload)
    },
    async login (context, payload) {
      const result = await axios.get('http://localhost:3000/user', payload)
      const filterUserData = result.data.filter(user => 
        user.login === payload.login &&
        user.password === payload.password)
      if (filterUserData.length) {
        localStorage.setItem('enter', true)
        context.commit('setUserData', filterUserData)
        if (filterUserData.find(user => user.role === 'admin')) {
          router.push('/admin/dashboard')
        } else {
          router.push('/todo')
        }
      } else {
        localStorage.setItem('enter', false)
      }
     },
     async getAllUsers (context) {
      const result = await axios.get('http://localhost:3000/user')
      context.commit('setAllUsers', result.data)
     },
     async addNewUser (context, payload) {
      await axios.post('http://localhost:3000/user', payload)
      context.commit('setNewUser', payload)
     },
     async deleteUser (context, payload) {
      await axios.delete(`http://localhost:3000/user/${payload.id}`)
      context.commit('deleteSelectedUser', payload.id)
     }
  },
  getters: {
    todoItems: state => state.todoItems,
    categories: state => state.categories,
    user: state => state.user.map(user => user),
    users: state => state.users
  }
})