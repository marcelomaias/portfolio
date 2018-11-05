<template>
  <section id="page-contact">
    <h1>Get in touch<span class="cursor">_</span></h1>
    
    <div class="contact-intro">
      <p>You can use the form bellow to get in touch, or if you prefer, use the social links on the left side of the site.</p>
    </div>

    <form @submit.prevent="processForm" v-if="!mailSent">
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" v-model="name" v-validate="'required'">
        <div class="holder">
          <span class="error" v-if="errors.has('name')">{{ errors.first('name') }}</span>
        </div>
      </div>
      <input class="lastname" type="text" name="lastname" v-model="lastname">
      <div>
        <label for="email">Email</label>
        <input v-validate="'required|email'" id="email" type="email" name="email" v-model="email">
        <div class="holder">
          <span class="error" v-if="errors.has('email')">{{ errors.first('email') }}</span>
        </div>
      </div>

      <div>
        <label for="message">Message</label>
        <textarea v-validate="'required'" id="message" rows="8" name="message" v-model="message"/>
        <div class="holder">
          <span class="error" v-if="errors.has('message')">{{ errors.first('message') }}</span>
        </div>
      </div>

      <div>
        <input type="submit" :disabled="!formIsValid" value="Send">
      </div>
    </form>

    <div v-if="mailSent" class="success">Hi <strong>{{ name }}</strong>,thanks for your message! I will get back to you within 24hs.</div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      mailSent: false,
      lastname: ''
    }
  },
  computed: {
    formIsValid() {
      return this.name !== '' && this.email !== '' && this.message !== '' && this.lastname == ''
    }
  },
  methods: {
    processForm() {
      const content = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      const thisForm = this
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      axios
        .post('https://hooks.zapier.com/hooks/catch/3107201/lqp2co/', content, config)
        .then(function(response) {
          // console.log(response)
          thisForm.mailSent = true
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>

