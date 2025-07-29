import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init ({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O campo nome deve ter entre 3 a 255 carateres',
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O campo sobrenome deve ter entre 3 a 255 carateres',
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: "Email js existe",
        },
        validate: {
          isEmail: {
            args: [3, 255],
            msg: 'Email invalido',
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'A senha ter entre 3 a 255 carateres',
          }
        }
      },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
    type: Sequelize.DATE,
    allowNull: true,
    }
      // timestamps: false,
  }, {
    sequelize,
});

  this.addHook('beforeSave', async user => {

    if(user.password){
    user.password_hash = await bcrypt.hash(user.password, 8);
    }
  });

    return this;
  }

  passwordIsValid(password){
    return bcrypt.compare(password, this.password_hash);
  }
}
