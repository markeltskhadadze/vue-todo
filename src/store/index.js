import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItems: []  
  },
  mutations: {
    setNewTodo (state, data) {
      state.todoItems.unshift(data)
    },
    deleteTodo (state, data) {
      const index = state.todoItems.findIndex(item => item.id === data)
      state.todoItems.splice(index, 1)
    }
  },
  actions: {
     addNewTodo(context, payload) {
      context.commit('setNewTodo', payload)
    }
  },
  getters: {
    todoItems: state => state.todoItems
  }
})