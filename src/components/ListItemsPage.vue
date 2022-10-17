<template>
  <div>
    <input v-model="todoName" class="h-10 border border-black p-2 mr-2.5 rounded-md" type="text" placeholder="Enter todo name">
    <button @click="addTodo" class="border border-black p-2 rounded-md text-white bg-emerald-500 hover:bg-green-400">Add</button>
    <TodoItem
      v-for="(item, index) in todoItems"
      :key="index"
      :item="item.name"
      :id="item.id"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TodoItem from './TodoItem.vue'

export default {
  name: 'ListItemPage',
  components: {
    TodoItem
  },
  data: () => ({
    todoName: '',
    item: '',
    id: null
  }),
  methods: {
    ...mapActions(['addNewTodo']),
    addTodo () {
      this.addNewTodo({
        id: Math.floor(Math.random() * 11),
        name: this.todoName
      })
      this.todoName = ''
    }
  },
  computed: {
    ...mapGetters(['todoItems'])
  }
}

</script>
