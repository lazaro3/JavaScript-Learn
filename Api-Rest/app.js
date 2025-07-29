import dotenv from 'dotenv';
dotenv.config();
import {dirname, resolve} from 'path'

import './src/database';

import express from 'express';
import homeRoute from './src/routes/homeRoute';
import userRoutes from './src/routes/userRoutes';
import tokenRoute from './src/routes/tokenRoute';
import alunoRoutes from './src/routes/alunoRoutes';
import fotoRoute from './src/routes/fotoRoute';



class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

   routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoute);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoute);
    }
}

export default new App().app;
