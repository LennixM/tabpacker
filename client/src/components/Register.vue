<template>
  <div class="register">
    <h1>Register</h1>
    <v-container id="form">
      <v-layout justify-center column fill-height>
        <v-flex>
          <v-form @submit.prevent="register"
            autocomplete="off">
            <v-text-field
              v-model="firstname"
              label="First Name"
              autocomplete="new-password"
              required>
            </v-text-field>
            <v-text-field
              v-model="lastname"
              label="Last Name"
              autocomplete="new-password"
              required>
            </v-text-field>
            <v-text-field
              v-model="email"
              label="E-Mail"
              autocomplete="new-password"
              required>
            </v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              :type="'password'"
              autocomplete="new-password"
              required>
            </v-text-field>
            <div class="error" v-html="error">
            </div>
            <v-btn @click="register" to="/">Register</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}

#form {
  max-width: 400px;
}
</style>
