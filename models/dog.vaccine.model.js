'use strict'

module.exports = (sequelize, DataTypes) => {
  const DogVaccine = sequelize.define(
    'DogVaccine',
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
      type: {
        allowNull: false,
        type: DataTypes.STRING
      },
      img: {
        allowNull: false,
        type: DataTypes.STRING
      },
      vaccinatedAt: {
        allowNull: false,
        type: DataTypes.DATEONLY
      }
    },
    {
      tableName: 'dog_vaccines',
      timestamps: false
    }
  )

  return DogVaccine
}