'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Sheets', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'add-fk-to-userid',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstaint('Sheets', 'add-fk-to-userid')
  }
};
