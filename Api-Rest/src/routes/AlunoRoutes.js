import { Router } from "express";
import AlunoControllers from "../controllers/alunoControllers";
const router = new Router();

import loginRequired from "../middlewares/loginRequered"

router.get('/', AlunoControllers.index);
router.post('/', loginRequired, AlunoControllers.store);
router.put('/:id', loginRequired, AlunoControllers.update);
router.get('/:id', AlunoControllers.show);
router.delete('/:id', loginRequired, AlunoControllers.delete);


export default router

