import { Router } from "express";
import { CreateUnidadeController } from "../modules/unidade/useCases/createUnidade/createUnidadeController";
import { GetUnidadesComQtdAlunosCoordenadoresInstrumentosController } from "../modules/unidade/useCases/getUnidadesComQtdAlunosCoordenadoresInstrumentos/getUnidadesComQtdAlunosCoordenadoresInstrumentosController";

const createUnidadeController = new CreateUnidadeController();
const getUnidadesComQtdAlunosCoordenadoresInstrumentosController = new GetUnidadesComQtdAlunosCoordenadoresInstrumentosController();

const unidadeRoutes = Router();

unidadeRoutes.get("/qtdAlunosCursosCoordenadoresInstrumentos", getUnidadesComQtdAlunosCoordenadoresInstrumentosController.handle)
unidadeRoutes.post("/", createUnidadeController.handle)

export { unidadeRoutes }