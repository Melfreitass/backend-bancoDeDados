import { Router } from "express";
import * as BruxosController from './../controllers/bruxosControllers.js'

const router = Router();

//rota getall em /
router.get("/", BruxosController.listarTodos);
//rota getbyid em /
router.get("/:id", BruxosController.listarUm);
//rota post
router.post("/", BruxosController.criar)
//Rota delete
router.delete("/:id", BruxosController.apagar)


export default router