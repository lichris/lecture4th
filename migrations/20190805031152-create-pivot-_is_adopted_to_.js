'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('_is_adopted_to_', {
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
      userId: {
        references: {
          model: 'users',
          key: 'id'
        },
        type: Sequelize.INTEGER.UNSIGNED,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      doneAt: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.DATE
      }
    }).then(() => {
      return queryInterface.addIndex(
        '_is_adopted_to_',
        [
          'dogId',
          'userId'
        ],
        {
          type: 'unique'
        }
      )
    })
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('_is_adopted_to_')
  }
}
