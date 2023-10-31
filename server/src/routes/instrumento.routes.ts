import { Router } from "express";
import { CreateInstrumentoController } from "../modules/instrumento/useCases/createInstrumentoController";

const createInstrumentoController = new CreateInstrumentoController();

const instrumentoRoutes = Router();

instrumentoRoutes.post("/", createInstrumentoController.handle);

export { instrumentoRoutes };
