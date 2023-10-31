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
exports.CreateCoordenadorController = void 0;
const createCoordenadorUseCase_1 = require("./createCoordenadorUseCase");
class CreateCoordenadorController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, telefone, dataNascimento, salario, endereco, instrumentosLeciona } = req.body;
            ;
            const createCoordenadorUseCase = new createCoordenadorUseCase_1.CreateCoordenadorUseCase();
            const result = yield createCoordenadorUseCase.execute({ nome, email, telefone, dataNascimento, salario, endereco, instrumentosLeciona });
            // .then(async () => {
            //     await prisma.$disconnect();
            // })
            // .catch(async (e) => {
            //     console.error(e);
            //     await prisma.$disconnect();
            // });
            return res.status(201).json(result);
        });
    }
}
exports.CreateCoordenadorController = CreateCoordenadorController;
//# sourceMappingURL=createCoordenadorController.js.map