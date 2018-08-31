<template>
  <div id="otherUsers">
    <ul>
      <li v-for="user in users">
        <div v-if="user.id==$store.state.user.id">
        </div>
        <div v-else>
          {{user.firstname + " " + user.lastname}}
          <v-btn @click="addFriend(user.id)" flat>
            <v-icon>person_add</v-icon>
          </v-btn>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import OtherUsers from '@/services/OtherUsers.js'
import AddFriend from '@/services/AddFriend.js'
export default {
  name: 'otherUsers',
  data () {
    return {
      users: []
    }
  },
  mounted: async function () {
    const response = await OtherUsers.showUsers()
    this.users = response.data.users
  },
  methods: {
    addFriend(newFriend) {
      AddFriend.addFriend({user1: this.$store.state.user.id, user2: newFriend})
    }
  }
}
</script>

<style scoped>
</style>
