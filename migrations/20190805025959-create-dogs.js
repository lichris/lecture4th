'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      uid: {
        allowNull: false,
        unique: true,
        type: 'BINARY(6)'
      },
      isAdopted: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      },
      age: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.TINYINT.UNSIGNED
      },
      gender: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.ENUM('m', 'f')
      },
      thumbnailImg: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dogs')
  }
}
