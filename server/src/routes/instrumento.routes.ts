import { Router } from "express";
import { CreateInstrumentoController } from "../modules/instrumento/useCases/createInstrumentoController";
import { GetInstrumentoController } from "../modules/instrumento/useCases/getInstrumentoController";

const createInstrumentoController = new CreateInstrumentoController();
const getInstrumentoController = new GetInstrumentoController();

const instrumentoRoutes = Router();

instrumentoRoutes.post("/", createInstrumentoController.handle);
instrumentoRoutes.get("/", getInstrumentoController.handle);

export { instrumentoRoutes };
