<template>
  <div id="timeline">
    <h1>Hello {{$store.state.user.firstname}}</h1>
    <OtherUsers></OtherUsers>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import OtherUsers from './OtherUsers.vue'
import Sidebar from './Sidebar.vue'
export default {
  name: 'Timeline',
  components: {
    OtherUsers,
    Sidebar
  }
}
</script>

<style scoped>
</style>
