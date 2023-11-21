import { Router } from "express";
import { CreateAlunoController } from "../modules/alunos/useCases/createAluno/CreateAlunoController";
import { GetAlunosController } from "../modules/alunos/useCases/getAlunos/GetAlunosController";
import { MudarAlunoController } from "../modules/alunos/useCases/mudarDadoDoAluno/mudarAlunoController";
import { GetAlunoIdController } from "../modules/alunos/useCases/getAlunoId/GetAlunoIdController";


const createAlunoController = new CreateAlunoController();
const getAlunosController = new GetAlunosController();
const getAlunoIdController= new GetAlunoIdController();
const mudarAlunoController = new MudarAlunoController();
const alunoRoutes = Router();

alunoRoutes.post("/", createAlunoController.handle)
alunoRoutes.get("/", getAlunosController.handle)
alunoRoutes.get("/:id", getAlunoIdController.handle)
alunoRoutes.put("/", mudarAlunoController.handle)


export { alunoRoutes };