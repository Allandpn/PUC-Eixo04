import { Router } from "express";
import { CreateCoordenadorController } from "../modules/coordenador/useCases/createCoordenador/createCoordenadorController";

const createCoordenadorController = new CreateCoordenadorController();

const coordenadorRoutes = Router();

coordenadorRoutes.post("/", createCoordenadorController.handle)

export { coordenadorRoutes };