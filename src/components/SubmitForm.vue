<template>
  <div>
    <h2>Subscribe to updates</h2>
    <div class="d-flex justify-content-around top-content">
      <img :class="{ 'image-banner': width > 1200, 'image-banner-modile': width < 1200 }" src="../../public/190827135829_mb073lo-2014-2034.jpeg" alt="">
      <div data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          class="banner-content">
        <input
          type="text"
          v-model.trim="$v.firstName.$model" placeholder="First Name *"
          required
          :class="$v.firstName.$error ? 'is-invalid' : ''">
        <p class="error-form-message mb-0" v-if="$v.firstName.$dirty && !$v.firstName.required">Required field</p>
        <p class="error-form-message mb-0" v-if="$v.firstName.$dirty && !$v.firstName.minLength">Name must be more than 1 character</p>
        <input type="text"
          v-model.trim="$v.lastName.$model" placeholder="Last Name *"
          required
          :class="$v.lastName.$error ? 'is-invalid' : ''">
        <p class="error-form-message mb-0" v-if="$v.lastName.$dirty && !$v.lastName.required">Required field</p>
        <p class="error-form-message mb-0" v-if="$v.lastName.$dirty && !$v.lastName.minLength">Name must be more than 1 character</p>
        <input type="text"
          v-model.trim="$v.email.$model" placeholder="Email Subject *"
          required
          :class="$v.email.$error ? 'is-invalid' : ''">
        <p class="error-form-message mb-0" v-if="$v.email.$dirty && !$v.email.required">Required field</p>
        <p class="error-form-message mb-0" v-if="$v.email.$dirty && !$v.email.email">Enter email</p>
        <textarea name="" placeholder="Write somthing here..." id="" cols="30" rows="10"></textarea>
        <b-button @click="test" variant="dark">Submit</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  name: 'SubmitForm',
  validations: {
    firstName: {
      required,
      minLength: minLength(1)
    },
    email: {
      required,
      email
    },
    lastName: {
      required,
      minLength: minLength(1)
    }
  },
  data: () => ({
    width: 0,
    firstName: '',
    email: '',
    lastName: ''
  }),
  methods: {
    ...mapActions(['sendReview']),
    async test() {
      await this.sendReview({
        fullName: 'fullName',
        reviewText: 'test review'
      })
    },
    updateWidth() {
      this.width = window.innerWidth
    }
  },
  created() {
    window.addEventListener('resize', this.updateWidth)
    this.updateWidth()
  }
}
</script>
<style scoped>
.banner-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 500px;
}
.top-content {
  padding: 20px 0px 50px 0px;
}
.image-banner {
  max-height: 530px;
  max-width: 880px;
}
h2 {
  font-size: 45px;
  margin-bottom: 40px;
}
input {
  border: 2px solid;
  border-radius: 6px;
  padding: 6px;
}
textarea {
  border: 2px solid;
  border-radius: 6px;
  padding: 6px;
}
.image-banner-modile {
  display: none;
}
.error-form-message {
  color: #ed3c0d;
  font-size: 13px;
  text-align: left;
}
</style>