<template>
    <ul>
        <li>Your Friends</li>
        <li v-for="friend in friends">
            {{friend}}
        </li>
    </ul>
</template>

<script>
import User from '@/services/User'
export default {
  name: 'Sidebar',
  data () {
    return {
        friends: User.showFriends("hello")
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
