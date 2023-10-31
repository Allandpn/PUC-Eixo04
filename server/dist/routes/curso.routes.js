"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursoRoutes = void 0;
const express_1 = require("express");
const createCursoController_1 = require("../modules/cursos/useCases/createCursoController");
const createCursoController = new createCursoController_1.CreateCursoController();
const cursoRoutes = (0, express_1.Router)();
exports.cursoRoutes = cursoRoutes;
cursoRoutes.post("/", createCursoController.handle);
//# sourceMappingURL=curso.routes.js.map