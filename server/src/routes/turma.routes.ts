import { Router } from "express";
import { CreateTurmaController } from "../modules/turmas/useCases/createTurma/createTurmaController";
import { GetTurmaController } from "../modules/turmas/useCases/getTurmaUseCase/GetTumaController";


const createTurmaController = new CreateTurmaController();
const getTurmaController= new GetTurmaController();

const turmaRoutes = Router();

turmaRoutes.get("/", getTurmaController.handle)
turmaRoutes.post("/", createTurmaController.handle)

export { turmaRoutes }