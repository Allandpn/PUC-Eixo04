import { Router } from "express";
import { CreateUnidadeController } from "../modules/unidade/useCases/createUnidade/createUnidadeController";
import { GetUnidadesComQtdAlunosCoordenadoresInstrumentosController } from "../modules/unidade/useCases/getUnComQtdAlCoordInst/getUnComQtdAlCoordInstController";

const createUnidadeController = new CreateUnidadeController();
const getUnidComQtdAluCoordInstrContr = new GetUnidadesComQtdAlunosCoordenadoresInstrumentosController();

const unidadeRoutes = Router();

unidadeRoutes.get("/qtdAlunosCursosCoordenadoresInstrumentos", getUnidComQtdAluCoordInstrContr.handle)
unidadeRoutes.post("/", createUnidadeController.handle)

export { unidadeRoutes }