import { Router } from "express";
import { CreateCoordenadorController } from "../modules/coordenador/useCases/createCoordenador/createCoordenadorController";
import { MudarCoordenadorController } from "../modules/coordenador/useCases/mudarCoordernador/mudarCoordenadorController";

const createCoordenadorController = new CreateCoordenadorController();
const mudarCoordenadorController = new MudarCoordenadorController()

const coordenadorRoutes = Router();

coordenadorRoutes.post("/", createCoordenadorController.handle)
coordenadorRoutes.put('/', mudarCoordenadorController.handle)

export { coordenadorRoutes };