'use strict'

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    'Admin',
    {
      userId: {
        references: {
          model: 'users',
          key: 'id'
        },
        type: DataTypes.INTEGER.UNSIGNED,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    },
    {
      tableName: 'admins',
      timestamps: false
    }
  )

  return Admin
}
