// import { response } from "express";
// import { password } from "../config/database";
import User from "../models/user";

class UserController {
  async store(req, res) {

    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });

    }

  };

  //index
  async index(req,res){
    try {
      const users = await User.findAll({attributes: [ 'id', 'nome', 'email' ] });

      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  //Show
  async show(req,res){
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email, } = user;
      return res.json( { id, nome, email, });
    } catch (e) {
      return res.json(null);
    }
  }

  //Update
  async update(req,res){
    try {
      const user = await User.findByPk(req.userId);

      if(!user) {
        return res.status(400).json({
          errors: ['Usuario nao existe']
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados
      return res.json({ id, nome, email });
    } catch (error) {

      res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  //DELETE
  async delete(req,res){
    try {

      const user = await User.findByPk(req.params.id);

      if(!user) {
        return res.status(400).json({
          errors: ['Usuario nao existe']
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (error) {

      res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}
export default new UserController();
