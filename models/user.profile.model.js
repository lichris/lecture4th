'use strict'

module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define(
    'UserProfile',
    {
      userId: {
        references: {
          model: 'users',
          key: 'id'
        },
        type: DataTypes.INTEGER.UNSIGNED,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING
      },
      age: {
        allowNull: false,
        type: DataTypes.TINYINT.UNSIGNED
      },
      gender: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.ENUM('m', 'f')
      }
    },
    {
      tableName: 'user_profiles',
      timestamps: false
    }
  )

  return UserProfile
}