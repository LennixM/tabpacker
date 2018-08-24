<template>
  <v-toolbar fixed dark color="primary">
    <v-toolbar-items>
      <v-btn flat to="/">
        Society
      </v-btn>
      <v-btn flat @click="showProfile($store.state.user.id)">
        {{$store.state.user.firstname}}
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>
        <v-icon>
          person_add
        </v-icon>
      </v-btn>
      <v-btn flat>
        <v-icon>
          email
        </v-icon>
      </v-btn>
      <v-btn flat>
        <v-icon>
          graphic_eq
        </v-icon>
      </v-btn>
      <v-menu offset-y>
        <v-btn
          slot="activator"
          flat
        >
          <v-icon>expand_more</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile
            @click="logout"
          >
            <v-list-tile-title>Log Out</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'HeaderLoggedIn',
  data () {
    return {
    }
  },
  methods: {
    async logout () {
      try {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
      } catch (error) {
        this.error = error.response
      }
    },
    showProfile(id) {
      try {
        console.log(this.$router)
        this.$router.push('/profile/' + id)
      } catch (err) {

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
