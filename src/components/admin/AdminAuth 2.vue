<template>
  <div class="container-popup">
    <div class="popup-main">
      <div>
        <p class="popup-title">Login</p>
      </div>
      <div class="main-popup">
            <input type="text"
            placeholder="name"
            v-model="name"
          >
          <input type="password"
          placeholder="password"
            v-model="password"
          >
          <div>
            <div class="btn-edit">
              <b-button
                @click="submitLoginData"
                size="lg"
              >LOGIN</b-button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AdminAuth',
  data: () => ({
    name: '',
    password: ''
  }),
  methods: {
    ...mapActions(['login']),
    async submitLoginData () {
      if (this.name && this.password) {
        await this.login ({
          login: this.name,
          password: this.password
        })
      }
    }
  },
  created () {
    // this.login()
  }
}

</script>

<style scoped>

* {
  box-sizing: border-box;
}
.popup-main {
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #3e3e3e96;
  border-radius: 5px;
  position: relative;
  border-radius: 30px;
  margin-top: 60px;
}

.main-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 250px;
}

.container-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: rgba(0,0,0,0.67059);
  overflow: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

input {
  padding:10px;
  border:0;
  background: #4c4c4c;
  border-bottom: 1px solid #fff;
}

input {
  outline: 0 !important;
}
.popup-title {
  text-align: center;
  font-weight: bold;
  font-size: 31px;
  color: #c9c9c9;
  padding: 10px;
  border-bottom: 1px solid #fff;
}

.field {
  color: #c9c9c9;
}

label {
  text-align: center;
  margin-bottom: 10px;
}

</style>