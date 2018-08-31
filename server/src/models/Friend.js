
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    user1: {type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      }
    },
    user2: {type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      }
    },
    accepted: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false}
  })
  return Friend
}
