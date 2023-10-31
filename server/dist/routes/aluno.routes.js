"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alunoRoutes = void 0;
const express_1 = require("express");
const CreateAlunoController_1 = require("../modules/alunos/useCases/createAluno/CreateAlunoController");
const GetAlunosController_1 = require("../modules/alunos/useCases/getAlunos/GetAlunosController");
const mudarAlunoController_1 = require("../modules/alunos/useCases/mudarDadoDoAluno/mudarAlunoController");
const createAlunoController = new CreateAlunoController_1.CreateAlunoController();
const getAlunosController = new GetAlunosController_1.GetAlunosController();
const mudarAlunoController = new mudarAlunoController_1.MudarAlunoController();
const alunoRoutes = (0, express_1.Router)();
exports.alunoRoutes = alunoRoutes;
alunoRoutes.post("/", createAlunoController.handle);
alunoRoutes.get("/", getAlunosController.handle);
alunoRoutes.put("/", mudarAlunoController.handle);
//# sourceMappingURL=aluno.routes.js.map