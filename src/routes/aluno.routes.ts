import { Router } from "express";
import { CreateAlunoController } from "../modules/alunos/useCases/createAluno/CreateAlunoController";


const createAlunoController = new CreateAlunoController();

const alunoRoutes = Router();

alunoRoutes.post("/", createAlunoController.handle)

export { alunoRoutes };