"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coordenadorRoutes = void 0;
const express_1 = require("express");
const createCoordenadorController_1 = require("../modules/coordenador/useCases/createCoordenador/createCoordenadorController");
const mudarCoordenadorController_1 = require("../modules/coordenador/useCases/mudarCoordernador/mudarCoordenadorController");
const createCoordenadorController = new createCoordenadorController_1.CreateCoordenadorController();
const mudarCoordenadorController = new mudarCoordenadorController_1.MudarCoordenadorController();
const coordenadorRoutes = (0, express_1.Router)();
exports.coordenadorRoutes = coordenadorRoutes;
coordenadorRoutes.post("/", createCoordenadorController.handle);
coordenadorRoutes.put('/', mudarCoordenadorController.handle);
//# sourceMappingURL=coordenador.routes.js.map