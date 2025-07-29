const { NOT } = require("sequelize/lib/deferrable");

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
         primaryKey: true,
        autoIncrement: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
        filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
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


  down: (queryInterface) => queryInterface.dropTable('fotos'),
};
