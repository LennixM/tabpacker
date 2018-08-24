import Api from '@/services/Api'

export default {
  addFriend(users) {
    return Api().post('addFriend', users)
  }
}
