<template>
  <div id="profile">
    <ul>
      <li>
        {{user.firstname}}
      </li>
      <li>
        {{user.lastname}}
      </li>
      <li>
        {{user.email}}
      </li>
    </ul>
  </div>
</template>

<script>
import Profile from '@/services/Profile'
export default {
  name: 'Profile',
  data () {
    return {
      user: null
    }
  },
  mounted: async function () {
    const response = await Profile.showInfo({
      id: this.$route.params.id
    })
    console.log(response.data)
    this.user = response.data.user
  }
}
</script>

<style scoped>
</style>
