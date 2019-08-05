'use strict'

module.exports = (sequelize, DataTypes) => {
  const DogImage = sequelize.define(
    'DogImage',
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
      img: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      tableName: 'dog_imgs',
      timestamps: false
    }
  )

  return DogImage
}