<template>
  <div class="helloWorld">
    <v-container v-if="!$store.state.isUserLoggedIn">
      <h1>you're not logged in</h1>
    </v-container>
    <v-container v-else>
      <Timeline></Timeline>
    </v-container>
  </div>
</template>

<script>
import Timeline from './Timeline.vue'
export default {
  name: 'helloWorld',
  components: {
    Timeline
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
