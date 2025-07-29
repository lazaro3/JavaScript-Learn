import multer from "multer";
import multerConfig from "../config/multerConfig";

import foto from "../models/foto";
const upload = multer(multerConfig).single('foto');


class fotoController {
 store(req, res) {
    return upload(req, res,  async (error) => {
      if(error) {
        return res.status(400).json({
          errors: [error.code]
        });
      }

      try {
        const { originalname,  filename} = req.file;
        const { aluno_id } = req.body
        const Foto = await foto.create({ originalname, filename, aluno_id })

      return res.json(Foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno nao existe']
        })
      }
    });
  }
}
export default new fotoController();
