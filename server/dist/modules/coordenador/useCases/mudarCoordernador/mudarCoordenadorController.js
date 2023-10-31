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
exports.MudarCoordenadorController = void 0;
const mudarCoordenadorUseCase_1 = require("./mudarCoordenadorUseCase");
const client_1 = require("../../../../prisma/client");
class MudarCoordenadorController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, telefone, dataNascimento, salario, endereco, instrumentoLeciona, coordenadorId } = req.body;
            const mudarCoordenadorUseCase = new mudarCoordenadorUseCase_1.MudarCoordenadorUseCase();
            const result = yield mudarCoordenadorUseCase.execute({ nome, email, telefone, dataNascimento, salario, endereco, instrumentoLeciona, coordenadorId })
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield client_1.prisma.$disconnect();
            }))
                .catch((e) => __awaiter(this, void 0, void 0, function* () {
                console.error(e);
                yield client_1.prisma.$disconnect();
            }));
            return res.status(201).json(result);
        });
    }
}
exports.MudarCoordenadorController = MudarCoordenadorController;
//# sourceMappingURL=mudarCoordenadorController.js.map