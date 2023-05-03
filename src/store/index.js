import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [],
    users: [],
    todoItems: [],
    categories: [],
    reviews: [],
    posts: []
    // posts: [
    //   {
    //     id: 1,
    //     img: '190827135829_mb073lo-2014-2034.jpeg',
    //     title: 'Test 1',
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae eos obcaecati illo incidunt."
    //   },
    //   {
    //     id: 2,
    //     img: '190827135829_mb073lo-2014-2034.jpeg',
    //     title: 'Test 2',
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae eos obcaecati illo incidunt."
    //   },
    //   {
    //     id: 3,
    //     img: '190827135829_mb073lo-2014-2034.jpeg',
    //     title: 'Test 3',
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae eos obcaecati illo incidunt."
    //   }
    // ]
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
    }
  },
  actions: {
     addNewTodo(context, payload) {
      context.commit('setNewTodo', payload)
    },
    async addNewCategory(context, payload) {
      let id = context.state.user.map(user => user.id).join()
      await axios.patch(`http://localhost:3000/api/users/${id}`, payload)
      context.commit('setNewCategory', payload)
    },
    async login (context, payload) {
      const result = await axios.get('http://localhost:3000/api/users', payload)
      const filterUserData = result.data.filter(user => 
        user.name === payload.login &&
        user.password === payload.password)
      context.commit('setUserData', filterUserData)  
      if (filterUserData.length) {
        localStorage.setItem('enter', true)
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
      const result = await axios.get('http://localhost:3000/api/users')
      context.commit('setAllUsers', result.data)
     },
     async addNewUser (context, payload) {
      await axios.post('http://localhost:3000/api/add-user', payload)
      context.commit('setNewUser', payload)
     },
     async deleteUser (context, payload) {
      await axios.post('http://localhost:3000/api/remove', payload)
      context.commit('deleteSelectedUser', payload._id)
     },
     async getReviews (context) {
      const result = await axios.get('http://localhost:3000/api/reviews')
      context.commit('setReviews', result.data)
     },
     async getPosts (context) {
      const result = await axios.get('http://localhost:3000/api/posts')
      context.commit('setPosts', result.data)
     },
     async sendReview (context, payload) {
      await axios.post('http://localhost:3000/api/add-reviews', payload)
      context.commit('setNewReviews', payload)
     }
  },
  getters: {
    todoItems: state => state.todoItems,
    categories: state => state.categories,
    user: state => state.user.map(user => user),
    users: state => state.users,
    posts: state => state.posts,
    reviews: state => state.reviews
  }
})