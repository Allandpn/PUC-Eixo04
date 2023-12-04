import { Router } from "express";
import { CreateInstrumentoController } from "../modules/instrumento/useCases/createInstrumentoController";
import { GetInstrumentoController } from "../modules/instrumento/useCases/getInstrumentoController";
import { GetInstrumentoComEmprestimoController } from "../modules/instrumento/useCases/getInstrumentoComEmprestimoController";
import { GetInstrumentoIdController } from "../modules/instrumento/useCases/getInstrumentoIdController";

const createInstrumentoController = new CreateInstrumentoController();
const getInstrumentoController = new GetInstrumentoController();
const getInstrumentoComEmprestimoController = new GetInstrumentoComEmprestimoController();
const getInstrumentoIdController = new GetInstrumentoIdController()

const instrumentoRoutes = Router();

instrumentoRoutes.post("/", createInstrumentoController.handle);
instrumentoRoutes.get("/emprestimo", getInstrumentoComEmprestimoController.handle);
instrumentoRoutes.get("/", getInstrumentoController.handle);
instrumentoRoutes.get("/:id", getInstrumentoIdController.handle);


export { instrumentoRoutes };
