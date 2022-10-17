<template>
  <div class="flex justify-between items-center p-2.5 h-24 my-4 mx-96 border border-black rounded-md">
    <p class="w-60">{{ item }}</p>
    <button @click="deleteTodo(id)"
    class="border border-black p-2 rounded-md text-white bg-red-500 hover:bg-red-400 mr-6"
    >Delete</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'TodoItem',
  props: {
    item: {
      type: String
    },
    id: {
      type: Number
    }
  },
  methods: {
    ...mapMutations(['deleteTodo'])
  }
}

</script>
