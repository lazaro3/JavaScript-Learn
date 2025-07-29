import { response } from "express";
import User from "../models/user";
import jwt from 'jsonwebtoken'

class tokenController {
  async store(req, res) {
    try {
      const { password ='', email = '' } = req.body;
      console.log(email);
      console.log(password);

      if (!email || !password) {
        return res.status(401).json({
          errors: ["Crediciais invalidos"],
        });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
          errors: "Usuario nao existe",
        });
      }

      if(!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          error: 'Senha ivalida',
        });
      }

      const { id } = user;
      const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION
      })

      return res.json({token});

    } catch (error) {
      console.log(error);
    }
  }
}
export default new tokenController();
