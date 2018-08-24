<template>
  <HeaderNotLoggedIn v-if="!$store.state.isUserLoggedIn"></HeaderNotLoggedIn>
  <HeaderLoggedIn v-else></HeaderLoggedIn>
</template>

<script>
import HeaderLoggedIn from "./HeaderLoggedIn.vue"
import HeaderNotLoggedIn from "./HeaderNotLoggedIn.vue"
export default {
  name: 'Header',
  components: {
    HeaderLoggedIn,
    HeaderNotLoggedIn
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
