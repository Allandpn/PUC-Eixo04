import { Router } from "express";
import { CreateAlunoController } from "../modules/alunos/useCases/createAluno/CreateAlunoController";
import { GetAlunosController } from "../modules/alunos/useCases/getAlunos/GetAlunosController";
import { MudarAlunoController } from "../modules/alunos/useCases/mudarDadoDoAluno/mudarAlunoController";


const createAlunoController = new CreateAlunoController();
const getAlunosController = new GetAlunosController();
const mudarAlunoController = new MudarAlunoController();
const alunoRoutes = Router();

alunoRoutes.post("/", createAlunoController.handle)
alunoRoutes.get("/", getAlunosController.handle)
alunoRoutes.put("/", mudarAlunoController.handle)


export { alunoRoutes };