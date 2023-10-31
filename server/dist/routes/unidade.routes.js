"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unidadeRoutes = void 0;
const express_1 = require("express");
const createUnidadeController_1 = require("../modules/unidade/useCases/createUnidade/createUnidadeController");
const getUnidadesComQtdAlunosCoordenadoresInstrumentosController_1 = require("../modules/unidade/useCases/getUnidadesComQtdAlunosCoordenadoresInstrumentos/getUnidadesComQtdAlunosCoordenadoresInstrumentosController");
const createUnidadeController = new createUnidadeController_1.CreateUnidadeController();
const getUnidadesComQtdAlunosCoordenadoresInstrumentosController = new getUnidadesComQtdAlunosCoordenadoresInstrumentosController_1.GetUnidadesComQtdAlunosCoordenadoresInstrumentosController();
const unidadeRoutes = (0, express_1.Router)();
exports.unidadeRoutes = unidadeRoutes;
unidadeRoutes.get("/qtdAlunosCursosCoordenadoresInstrumentos", getUnidadesComQtdAlunosCoordenadoresInstrumentosController.handle);
unidadeRoutes.post("/", createUnidadeController.handle);
//# sourceMappingURL=unidade.routes.js.map