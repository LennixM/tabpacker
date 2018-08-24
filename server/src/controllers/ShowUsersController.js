const {User} = require('../models')

module.exports = {
  async showUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'firstname', 'lastname']})
      res.send({
        users: users
      })
    }
    catch (err){
    }
  }
}
