<template>
  <div id="timeline">
    <h1>Hello {{$store.state.user.firstname}}</h1>
    <OtherUsers></OtherUsers>
  </div>
</template>

<script>
import OtherUsers from './OtherUsers.vue'
export default {
  name: 'Timeline',
  components: {
    OtherUsers
  }
}
</script>

<style scoped>
</style>
