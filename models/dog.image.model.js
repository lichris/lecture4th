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

  DogImage.prototype.toJSON = function () {
    const values = Object.assign({}, this.get())

    delete values.id
    delete values.dogId

    return values
  }

  return DogImage
}