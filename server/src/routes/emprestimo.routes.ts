import { Router } from "express";
import { CreateEmprestimoController } from "../modules/emprestimo/useCases/CreateEmprestimoController"
import { UpdateEmprestimoController } from "../modules/emprestimo/useCases/UpdateEmprestimoController";


const createEmprestimoController = new CreateEmprestimoController();
const updateEmprestimoController = new UpdateEmprestimoController();

const emprestimoRoutes = Router();

emprestimoRoutes.post("/", createEmprestimoController.handle)
emprestimoRoutes.patch("/", updateEmprestimoController.handle)

export { emprestimoRoutes }