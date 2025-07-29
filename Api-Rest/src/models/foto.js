import Sequelize, { Model } from "sequelize";
import appConfig from "../config/appConfig";

export default class foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              msg: "Campo nao pode ficar vazio",
            },
          },
        },

        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              msg: "Campo nao pode ficar vazio",
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue('filename')}`;
          }
        }
      },
      {
        sequelize,
        tableName: 'fotos',
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.aluno, {foreignKey: 'aluno_id'})
  }
}
