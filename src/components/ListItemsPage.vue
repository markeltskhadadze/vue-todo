<template>
  <div>
    <div class="flex justify-center">
      <div class="flex flex-col items-center p-4 rounded bg-white mx-16 w-[600px]"
        v-for="category in categories" :key="category.id"
        @drop="onDrop($event, category.id)"
        @dragenter.prevent
        @dragover.prevent
      >
        <div class="flex">
          <h4 class="bg-slate-600 text-white w-[600px] rounded flex justify-center items-center">{{ category.title }}</h4>
          <button @click="deleteCategory(category.id)"
            class="border border-black p-2 rounded-md text-white bg-red-500 hover:bg-red-400 ml-3.5"
          >Delete</button>
        </div>
      <div class="flex mt-2">
        <input v-model="todoName" class="h-10 border border-black p-2 mr-2.5 rounded-md" type="text" placeholder="Enter todo name">
        <button @click="addTodo(category.id)" class="border border-black p-2 rounded-md text-white bg-emerald-500 hover:bg-green-400">Add</button>
      </div>
        <div v-for="(item, index) in todoItems.filter(item => item.categoryId === category.id)" :key="index" @dragstart="onDragStart($event, item)">
          <TodoItem
            :key="index"
            :item="item.name"
            :id="item.id"
            draggable="true"
          />
        </div>
      </div>
      <div class="flex mt-2 items-baseline">
        <input class="h-10 border border-black p-2 mr-2.5 rounded-md" type="text" v-model="categoryName">
        <button class="border border-black p-2 rounded-md text-white bg-emerald-500 hover:bg-green-400" @click="addCategory">Add new category</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import TodoItem from './TodoItem.vue'

export default {
  name: 'ListItemPage',
  components: {
    TodoItem
  },
  data: () => ({
    todoName: '',
    item: '',
    id: null,
    categoryId: '',
    selectedCategory: '',
    categoryName: ''
  }),
  methods: {
    ...mapActions(['addNewTodo', 'addNewCategory']),
    ...mapMutations(['deleteCategory']),
    onDragStart (event, item) {
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('itemID', item.id)
    },
    onDrop(event, categoryId) {
      const itemId = parseInt(event.dataTransfer.getData('itemID'))
      const item = this.todoItems.find(item => item.id === itemId)
      item.categoryId = categoryId
    },
    addTodo (categoryId) {
      this.addNewTodo({
        id: Math.floor(Math.random() * 11),
        name: this.todoName,
        categoryId: categoryId
      })
      this.todoName = ''
    },
    addCategory () {
      this.addNewCategory({
        id: Math.floor(Math.random() * 11),
        title: this.categoryName
      })
      this.categoryName = ''
    }
  },
  computed: {
    ...mapGetters(['todoItems', 'categories'])
  }
}

</script>
