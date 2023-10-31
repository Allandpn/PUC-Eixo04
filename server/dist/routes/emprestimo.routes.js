"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emprestimoRoutes = void 0;
const express_1 = require("express");
const CreateEmprestimoController_1 = require("../modules/emprestimo/useCases/CreateEmprestimoController");
const createEmprestimoController = new CreateEmprestimoController_1.CreateEmprestimoController();
const emprestimoRoutes = (0, express_1.Router)();
exports.emprestimoRoutes = emprestimoRoutes;
emprestimoRoutes.post("/", createEmprestimoController.handle);
//# sourceMappingURL=emprestimo.routes.js.map