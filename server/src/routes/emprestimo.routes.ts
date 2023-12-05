import { Router } from "express";
import { CreateEmprestimoController } from "../modules/emprestimo/useCases/CreateEmprestimoController"
import { UpdateEmprestimoController } from "../modules/emprestimo/useCases/UpdateEmprestimoController";
import { GetEmprestimoIdInstrumentoController } from "../modules/emprestimo/useCases/GetEmprestimoIdInstrumentoController";


const createEmprestimoController = new CreateEmprestimoController();
const updateEmprestimoController = new UpdateEmprestimoController();
const getEmprestimoIdInstrumentoController= new GetEmprestimoIdInstrumentoController()

const emprestimoRoutes = Router();

emprestimoRoutes.get("/:idInstrumento", getEmprestimoIdInstrumentoController.handle)
emprestimoRoutes.post("/", createEmprestimoController.handle) 
emprestimoRoutes.patch("/", updateEmprestimoController.handle)

export { emprestimoRoutes }