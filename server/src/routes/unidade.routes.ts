import { Router } from "express";
import { CreateUnidadeController } from "../modules/unidade/useCases/createUnidade/createUnidadeController";
import { GetUnidadesComQtdAlunosCoordenadoresInstrumentosController } from "../modules/unidade/useCases/getUnComQtdAlCoordInst/getUnComQtdAlCoordInstController";
import { GetUnidadeController } from "../modules/unidade/useCases/getUnidade/getUnidadeController";

const createUnidadeController = new CreateUnidadeController();
<<<<<<< HEAD
const getUnidadeController = new GetUnidadeController();
const getUnidadesComQtdAlunosCoordenadoresInstrumentosController = new GetUnidadesComQtdAlunosCoordenadoresInstrumentosController();
||||||| merged common ancestors
const getUnidadesComQtdAlunosCoordenadoresInstrumentosController = new GetUnidadesComQtdAlunosCoordenadoresInstrumentosController();
=======
const getUnidComQtdAluCoordInstrContr = new GetUnidadesComQtdAlunosCoordenadoresInstrumentosController();
>>>>>>> 7d329c7f0d63a2f085c7b3fd3fb3a15d3da7b6cb

const unidadeRoutes = Router();

<<<<<<< HEAD
unidadeRoutes.get("/qtdAlunosCursosCoordenadoresInstrumentos", getUnidadesComQtdAlunosCoordenadoresInstrumentosController.handle)
unidadeRoutes.get("/", getUnidadeController.handle)
||||||| merged common ancestors
unidadeRoutes.get("/qtdAlunosCursosCoordenadoresInstrumentos", getUnidadesComQtdAlunosCoordenadoresInstrumentosController.handle)
=======
unidadeRoutes.get("/qtdAlunosCursosCoordenadoresInstrumentos", getUnidComQtdAluCoordInstrContr.handle)
>>>>>>> 7d329c7f0d63a2f085c7b3fd3fb3a15d3da7b6cb
unidadeRoutes.post("/", createUnidadeController.handle)

export { unidadeRoutes }