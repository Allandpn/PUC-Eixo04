import { Router } from "express";
import { CreateTurmaController } from "../modules/turmas/useCases/createTurma/createTurmaController";


const createTurmaController = new CreateTurmaController();

const turmaRoutes = Router();

turmaRoutes.post("/", createTurmaController.handle)

export { turmaRoutes }