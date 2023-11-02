"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unidadeRoutes = void 0;
const express_1 = require("express");
const createUnidadeController_1 = require("../modules/unidade/useCases/createUnidade/createUnidadeController");
const getUnidComQtdAluCoordInstrContr_1 = require("../modules/unidade/useCases/getUnidadesComQtdAlunosCoordenadoresInstrumentos/getUnidComQtdAluCoordInstrContr");
const createUnidadeController = new createUnidadeController_1.CreateUnidadeController();
const getUnidComQtdAluCoordInstrContr = new getUnidComQtdAluCoordInstrContr_1.GetUnidadesComQtdAlunosCoordenadoresInstrumentosController();
const unidadeRoutes = (0, express_1.Router)();
exports.unidadeRoutes = unidadeRoutes;
unidadeRoutes.get("/qtdAlunosCursosCoordenadoresInstrumentos", getUnidComQtdAluCoordInstrContr.handle);
unidadeRoutes.post("/", createUnidadeController.handle);
//# sourceMappingURL=unidade.routes.js.map