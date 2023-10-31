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
exports.CreateAlunoController = void 0;
const CreateAlunoUseCase_1 = require("./CreateAlunoUseCase");
class CreateAlunoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, telefone, dataNascimento, endereco, dataAdmissao, nomeResponsavel } = req.body;
            const createAlunoUseCase = new CreateAlunoUseCase_1.CreateAlunoUseCase();
            const result = yield createAlunoUseCase.execute({ nome, email, telefone, dataNascimento, endereco, dataAdmissao, nomeResponsavel });
            // .then(async () => {
            //     await prisma.$disconnect()
            // })
            // .catch(async (e) => {
            //     console.error(e)
            //     await prisma.$disconnect()
            // });
            return res.status(201).json(result);
        });
    }
}
exports.CreateAlunoController = CreateAlunoController;
//# sourceMappingURL=CreateAlunoController.js.map