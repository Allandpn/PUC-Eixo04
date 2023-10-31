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
exports.MudarAlunoUseCase = void 0;
const client_1 = require("../../../../prisma/client");
class MudarAlunoUseCase {
    execute({ nome, email, telefone, dataNascimento, endereco, dataAdmissao, nomeResponsavel, alunoId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                nome, email, telefone, dataNascimento, endereco, dataAdmissao, nomeResponsavel,
            };
            const data = JSON.parse(JSON.stringify(payload));
            const aluno = yield client_1.prisma.aluno.update({
                where: { id: alunoId },
                data: Object.assign({}, data)
            });
            return;
        });
    }
}
exports.MudarAlunoUseCase = MudarAlunoUseCase;
//# sourceMappingURL=mudarAlunoUseCase.js.map