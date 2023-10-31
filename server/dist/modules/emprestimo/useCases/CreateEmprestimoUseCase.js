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
exports.CreateEmprestimoUseCase = void 0;
const client_1 = require("../../../prisma/client");
const AppError_1 = require("../../../errors/AppError");
class CreateEmprestimoUseCase {
    execute({ instrumentoId, alunoId }) {
        return __awaiter(this, void 0, void 0, function* () {
            //verificar se instrumentoId existe no bd
            const instrumentoAlreadyExists = yield client_1.prisma.instrumento.findUnique({
                where: {
                    id: instrumentoId,
                }
            });
            if (!instrumentoAlreadyExists) {
                //erro
                throw new AppError_1.AppError("Instrumento não existe no bd");
            }
            //verificar se alunoId existe no bd
            const alunoAlreadyExists = yield client_1.prisma.aluno.findUnique({
                where: {
                    id: alunoId,
                }
            });
            if (!alunoAlreadyExists) {
                //erro
                throw new AppError_1.AppError("Aluno não existe no bd");
            }
            //verificar se o instrumento está emprestado
            let emprestimo;
            emprestimo = {
                aluno: {
                    connect: {
                        id: alunoId,
                    },
                },
                instrumento: {
                    connect: {
                        id: instrumentoId,
                    },
                    // create: {
                    //     isEmprestado: true,
                    // }
                }
            };
            //Cria o empréstimo
            const createEmprestimo = yield client_1.prisma.emprestimoInstrumento.create({
                data: emprestimo
            });
            //Atualiza o campo isEmprestado do instrumento
            const updateInstrumento = yield client_1.prisma.instrumento.update({
                where: { id: instrumentoId },
                data: {
                    isEmprestado: true,
                }
            });
            if (!updateInstrumento) {
                //erro
                throw new AppError_1.AppError("Estado de empréstimo não atualizado no banco de dados");
            }
            const result = yield client_1.prisma.emprestimoInstrumento.findUnique({
                where: {
                    id: createEmprestimo.id,
                }
            });
            return result;
        });
    }
}
exports.CreateEmprestimoUseCase = CreateEmprestimoUseCase;
//# sourceMappingURL=CreateEmprestimoUseCase.js.map