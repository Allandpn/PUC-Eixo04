"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instrumentoRoutes = void 0;
const express_1 = require("express");
const createInstrumentoController_1 = require("../modules/instrumento/useCases/createInstrumentoController");
const createInstrumentoController = new createInstrumentoController_1.CreateInstrumentoController();
const instrumentoRoutes = (0, express_1.Router)();
exports.instrumentoRoutes = instrumentoRoutes;
instrumentoRoutes.post("/", createInstrumentoController.handle);
//# sourceMappingURL=instrumento.routes.js.map