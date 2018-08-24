import Api from '@/services/Api'

export default {
  showUsers() {
    return Api().get('otherUsers')
  }
}
