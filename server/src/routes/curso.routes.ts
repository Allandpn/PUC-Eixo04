import { Router } from "express";
import { CreateCursoController } from "../modules/cursos/useCases/createCursoController";
import { GetCursosController } from "../modules/cursos/useCases/getCursosController";


const createCursoController = new CreateCursoController();
const getCursosController = new GetCursosController();

const cursoRoutes = Router();

cursoRoutes.get("/", getCursosController.handle)
cursoRoutes.post("/", createCursoController.handle)

export { cursoRoutes };

