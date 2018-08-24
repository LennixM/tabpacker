const Joi = require('joi')


module.exports = {
  register (req, res, next) {
    const schema = {
      firstname: Joi.string(),
      lastname: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }
    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch(error.details[0].context.key) {
        case 'firstname':
          res.status(400).send({
            error: 'You must provide a valid firstname'
          })
          break
        case 'lastname':
          res.status(400).send({
            error: 'You must provide a valid lastname'
          })
          break
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Your password is invalid.'
          })
          break
        default:
          res.status(400).send({
            error: 'Error'
          })
        break
      }
    } else {
        next()
    }

  }
}
