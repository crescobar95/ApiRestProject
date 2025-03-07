import { Router } from "express";
import {createproducto,getproducto,deleteproducto,putproducto} from "../controllers/producto.controller.js";

const router = Router();

router.get('/producto',getproducto);
router.post('/producto',createproducto);
router.put('/producto/:id',putproducto);
router.delete('/producto/:id',deleteproducto);
router.get('/producto/:id');

export default router;
