const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Club = sequelize.define('Club', {
    user1: Sequelize.INTEGER,
    user2: Sequelize.INTEGER
  })
  return Friend
}
