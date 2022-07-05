'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        require: true
      },
      price: {
        type: Sequelize.INTEGER,
        require: true
      },
      imageurl: {
        type: Sequelize.STRING,
        require: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('data');
  }
};