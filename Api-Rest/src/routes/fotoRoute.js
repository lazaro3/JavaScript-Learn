import { Router } from "express";
import loginRequered from '../middlewares/loginRequered'

import fotoControllers from "../controllers/fotoControllers";

const router = new Router();

router.post("/",loginRequered, fotoControllers.store);

export default router;
