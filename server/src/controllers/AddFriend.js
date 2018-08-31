const {Friend} = require('../models')

module.exports = {
  async add(req, res) {
    try {
      Friend.create(req.body)
      res.send("Success")
    }
    catch (err){
      res.status(400).send()
    }
  }
}
