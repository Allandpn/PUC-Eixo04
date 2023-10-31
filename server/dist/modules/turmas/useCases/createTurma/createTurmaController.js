"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTurmaController = void 0;
const createTurmaUseCase_1 = require("./createTurmaUseCase");
class CreateTurmaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, diaDaSemanaInt, horario, nomeCurso, nomeUnidade } = req.body;
            const createTurmaUseCase = new createTurmaUseCase_1.CreateTurmaUseCase();
            const result = yield createTurmaUseCase.execute({ nome, diaDaSemanaInt, horario, nomeCurso, nomeUnidade });
            return res.status(200).json(result);
        });
    }
}
exports.CreateTurmaController = CreateTurmaController;
//# sourceMappingURL=createTurmaController.js.map