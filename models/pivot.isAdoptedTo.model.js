'use strict'

module.exports = (sequelize, DataTypes) => {
  const IsAdoptedTo = sequelize.define(
    'IsAdoptedTo',
    {
      dogId: {
        references: {
          model: 'dogs',
          key: 'id'
        },
        type: DataTypes.INTEGER.UNSIGNED,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      userId: {
        references: {
          model: 'users',
          key: 'id'
        },
        type: DataTypes.INTEGER.UNSIGNED,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM('pending', 'approved', 'declined')
      },
      doneAt: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.DATE
      }
    },
    {
      tableName: '_is_adopted_to_',
      timestamps: false
    }
  )

  return IsAdoptedTo
}