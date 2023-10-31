import { Router } from "express";
import { CreateEmprestimoController } from "../modules/emprestimo/useCases/CreateEmprestimoController"


const createEmprestimoController = new CreateEmprestimoController();

const emprestimoRoutes = Router();

emprestimoRoutes.post("/", createEmprestimoController.handle)

export { emprestimoRoutes }