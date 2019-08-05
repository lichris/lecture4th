'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dog_vaccines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      dogId: {
        references: {
          model: 'dogs',
          key: 'id'
        },
        type: Sequelize.INTEGER.UNSIGNED,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      img: {
        allowNull: false,
        type: Sequelize.STRING
      },
      vaccinatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    })
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dog_vaccines')
  }
}
