import { Router } from "express";
import { CreateUnidadeController } from "../modules/unidade/useCases/createUnidade/createUnidadeController";
import { GetUnidadesComQtdAlunosCoordenadoresInstrumentosController } from "../modules/unidade/useCases/getUnComQtdAlCoordInst/getUnComQtdAlCoordInstController";
import { GetUnidadeController } from "../modules/unidade/useCases/getUnidade/getUnidadeController";

const createUnidadeController = new CreateUnidadeController();
const getUnidadeController = new GetUnidadeController();
const getUnidadesComQtdAlunosCoordenadoresInstrumentosController = new GetUnidadesComQtdAlunosCoordenadoresInstrumentosController();

const unidadeRoutes = Router();

unidadeRoutes.get("/qtdAlunosCursosCoordenadoresInstrumentos", getUnidadesComQtdAlunosCoordenadoresInstrumentosController.handle)
unidadeRoutes.get("/", getUnidadeController.handle)
unidadeRoutes.post("/", createUnidadeController.handle)

export { unidadeRoutes }