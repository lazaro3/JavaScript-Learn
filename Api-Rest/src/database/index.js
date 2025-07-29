import Sequelize from "sequelize";
import databaseConfig from '../config/database';
import aluno from '../models/aluno';
import User from '../models/user';
import foto from "../models/foto";


const models = [aluno, User, foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

