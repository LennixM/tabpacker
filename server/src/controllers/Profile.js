const {User} = require('../models')

module.exports = {
  async showInfo(req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id
        }
      })
      res.send({
        user: user.toJSON()
      })
    }
    catch (err){
    }
  }
}
