import { Router } from "express";
import userControllers from "../controllers/UserControllers";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();


// router.get('/', userControllers.index);
// router.get('/', userControllers.show);

router.post('/',loginRequered, userControllers.store);
router.put('/',loginRequered, userControllers.update);
router.delete('/',loginRequered, userControllers.delete);


export default router

/*
  index -> lista todos os usuarios -> GET
  store/create -> cria novo usuario -> POST
  delete -> apaga o usuario -> DELETE
  show -> monstra o usuario -> GET
  update -> atualiza o usuario -> PATCH/PUT
*/


// "nome": "Luis huj",
// 	"sobrenome":"cuine",
// 	"password": "12345",
// 	"email": "luijol@gmail.com"
