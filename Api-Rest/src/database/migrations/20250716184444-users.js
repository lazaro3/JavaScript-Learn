const { NOT } = require("sequelize/lib/deferrable");
const { password } = require("../../config/database");

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
         primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
         type: Sequelize.STRING,
        allowNull: false,
      },
        created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      update_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),


  down: (queryInterface) => queryInterface.dropTable('users'),
};
