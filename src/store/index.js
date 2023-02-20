import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
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
    }
  },
  actions: {
     addNewTodo(context, payload) {
      context.commit('setNewTodo', payload)
    },
    async addNewCategory(context, payload) {
      // let id = context.state.user.map(user => user.id).join()
      // await axios.get(`http://localhost:3000/user/${id}`, payload)
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
        router.push('/todo')
      } else {
        localStorage.setItem('enter', false)
      }
     }
  },
  getters: {
    todoItems: state => state.todoItems,
    categories: state => state.categories,
    user: state => state.user.map(user => user)
  }
})