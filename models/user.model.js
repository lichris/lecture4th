'use strict'

import bcrypt from 'bcrypt'
import { generate } from '../utils/uid.util'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      uid: {
        allowNull: false,
        unique: true,
        type: 'BINARY(6)',
        defaultValue: () => {
          return Buffer(generate(), 'hex')
        },
        get: function () {
          return Buffer(this.getDataValue('uid')).toString('hex')
        }
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

  // eslint-disable-next-line no-unused-vars
  User.beforeSave(async (user, options) => {
    if (user.changed('password')) {
      const salt = await bcrypt.genSalt(10)
      // eslint-disable-next-line require-atomic-updates
      user.password = await bcrypt.hash(user.password, salt)
    }
  })

  return User
}