const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    user1: Sequelize.INTEGER,
    user2: Sequelize.INTEGER
  })
  return Friend
}
