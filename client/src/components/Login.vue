<template>
  <div class="login">
    <h1>Login</h1>
    <v-container id="form">
      <v-layout justify-center column fill-height>
        <v-flex>
          <v-form @submit.prevent="login">
            <v-text-field
              v-model="email"
              label="E-Mail"
              required>
            </v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              :type="'password'"
              required>
            </v-text-field>
            <div class="error" v-html="error">
            </div>
            <v-btn @click="login" to="/">login</v-btn>
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
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = "Your login information is incorrect"
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
