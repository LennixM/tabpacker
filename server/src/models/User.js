const Sequelize = require('sequelize');
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user, options) {
  const SALT_FACTOR = 8
  if (!user.changed('password')) {
    return;
  }
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: Sequelize.STRING,
    }, {
      hooks: {
        beforeUpdate: hashPassword,
        beforeSave: hashPassword
      }
    })

    User.prototype.comparePassword = function (password) {
      return bcrypt.compareAsync(password, this.password)
    }

    return User
}
