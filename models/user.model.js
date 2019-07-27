'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      uid: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      nickname: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      profileImg: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
        validate: {
          isUrl: true
        }
      }
    },
    {
      tableName: 'users',
      timestamps: true
    }
  )

  return User
}