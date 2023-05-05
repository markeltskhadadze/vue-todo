<template>
  <div>
    <h2>Add new blog</h2>
    <div class="form-blog">
      <input v-model="title" type="text" placeholder="Title blog">
      <input v-model="description" type="text" placeholder="Description blog">
      <input @change="getPostImg" type="file" placeholder="Image blog">
      <b-button @click="submitPost">Add</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddBlog',
  data: () => ({
    title: '',
    description: '',
    img: []
  }),
  methods: {
    ...mapActions(['submitNewPost']),
    submitPost () {
      if (this.title && this.description) {
        this.submitNewPost({
          title: this.title,
          description: this.description
        })
      } else {
        console.log('error')
      }
    },
    getPostImg (e) {
      let regex = /\.(jpg|jpeg|png|mp4)$/i;
      let tgt = e.target,
          files = tgt.files,
          maxSize = 100000000
      for (let image in files) {
        if(files[image].name.search(regex) != -1 && files[image].size <= maxSize) {
          this.img.push(files[image])
        }
      }
    }
  }
}
</script>

<style scoped>
.form-blog {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

</style>