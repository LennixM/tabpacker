<template>
  <v-toolbar fixed dark color="primary">
    <v-toolbar-items>
      <v-btn flat to="/">
        Society
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat to="/login">
        Login
      </v-btn>
      <v-btn flat to="/register">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
