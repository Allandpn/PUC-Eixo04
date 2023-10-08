import { Router } from "express";
import { CreateCursoController } from "../modules/cursos/useCases/createCursoController";


const createCursoController = new CreateCursoController();

const cursoRoutes = Router();

cursoRoutes.post("/", createCursoController.handle)

export { cursoRoutes };

