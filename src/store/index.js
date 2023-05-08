import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: [],
    isAuthenticated: false,
    user: [],
    profile: [],
    users: [],
    todoItems: [],
    categories: [],
    reviews: [],
    posts: []
  },
  mutations: {
    setToken (state, token) {
      if (token) {
        state.token = token
        localStorage.setItem('token', token)
        state.isAuthenticated = true
        axios.defaults.headers.common.Authorization = `${token}`
      }
    },
    removeToken (state) {
      state.token = null
      localStorage.removeItem('token')
      state.isAuthenticated = false
      axios.defaults.headers.common.Authorization = null
    },
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
    setProfile (state, data) {
      state.profile = data
    },
    setAllUsers (state, data) {
      state.profile = data
    },
    setNewUser (state, data) {
      state.users.push(data)
    },
    deleteSelectedUser (state, data) {
      const index = state.users.findIndex(user => user._id === data)
      state.users.splice(index, 1)
    },
    setReviews (state, data) {
      state.reviews = data
    },
    setPosts (state, data) {
      state.posts = data
    },
    setNewReviews (state, data) {
      state.reviews = [...state.reviews, data]
    },
    setNewPost (state, data) {
      state.posts = [...state.posts, data]
    }
  },
  actions: {
     addNewTodo(context, payload) {
      context.commit('setNewTodo', payload)
    },
    async addNewCategory(context, payload) {
      let id = context.state.user.map(user => user.id).join()
      await axios.patch(`https://node-and-mongo-project.herokuapp.com/api/users/${id}`, payload)
      context.commit('setNewCategory', payload)
    },
    async login (context, payload) {
      try {
        const result = await axios.post('https://node-and-mongo-project.herokuapp.com/api/login', payload)
        context.commit('setToken', result.data.token)    
        context.commit('setUserData', payload)
        router.push('/admin/dashboard')
      } catch (error) {
        console.log(error)
      }
    },
    async getAllUsers (context) {
      const result = await axios.get('https://node-and-mongo-project.herokuapp.com/api/users')
      context.commit('setAllUsers', result.data)
    },
    async getProfile (context) {
      const result = await axios.get('https://node-and-mongo-project.herokuapp.com/api/profile')
      context.commit('setProfile', result.data)
    },
    async addNewUser (context, payload) {
      await axios.post('https://node-and-mongo-project.herokuapp.com/api/add-user', payload)
      context.commit('setNewUser', payload)
    },
    async deleteUser (context, payload) {
      await axios.post('https://node-and-mongo-project.herokuapp.com/api/remove', payload)
      context.commit('deleteSelectedUser', payload._id)
    },
    async getReviews (context) {
      const result = await axios.get('https://node-and-mongo-project.herokuapp.com/api/reviews')
      context.commit('setReviews', result.data)
    },
    async getPosts (context) {
      const result = await axios.get('https://node-and-mongo-project.herokuapp.com/api/posts')
      context.commit('setPosts', result.data)
    },
    async sendReview (context, payload) {
      await axios.post('https://node-and-mongo-project.herokuapp.com/api/add-reviews', payload)
      context.commit('setNewReviews', payload)
    },
    async submitNewPost (context, payload) {
      await axios.post('https://node-and-mongo-project.herokuapp.com/api/add-post', payload)
      context.commit('setNewPost', payload)
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    todoItems: state => state.todoItems,
    categories: state => state.categories,
    user: state => state.user.map(user => user),
    profile: state => state.profile,
    users: state => state.users,
    posts: state => state.posts,
    reviews: state => state.reviews
  }
})