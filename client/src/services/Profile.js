import Api from '@/services/Api'

export default {
  showInfo(info) {
    return Api().get('profile/' + info.id)
  }
}
