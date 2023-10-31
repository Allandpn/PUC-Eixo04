"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.turmaRoutes = void 0;
const express_1 = require("express");
const createTurmaController_1 = require("../modules/turmas/useCases/createTurma/createTurmaController");
const createTurmaController = new createTurmaController_1.CreateTurmaController();
const turmaRoutes = (0, express_1.Router)();
exports.turmaRoutes = turmaRoutes;
turmaRoutes.post("/", createTurmaController.handle);
//# sourceMappingURL=turma.routes.js.map