const {Friend} = require('../models')

module.exports = {
  async add(req, res) {
    try {
      Friend.create()
    }
    catch (err){
    }
  }
}
