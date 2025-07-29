import Sequelize, { Model } from "sequelize";

export default class aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Nome precisa ter entre 3 a 255 caracteres",
            },
          },
        },

        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Nome precisa ter entre 3 a 255 caracteres",
            },
          },
        },

        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique:{
            msg: 'Email ja existe'
          },
          validate: {
            isEmail: {
              msg: "Email ivalido",
            },
          },
        },

        idade: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Idade precisa ser um numero inteiro",
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Peso precisa ser um numero inteiro ou de ponto flutuante",
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Altura precisa ser um numero inteiro ou de ponto flutuante",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(model){
    this.hasMany(model.foto, {foreignKey: 'aluno_id'});
  }
}
