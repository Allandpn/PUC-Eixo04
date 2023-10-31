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
exports.CreateAlunoUseCase = void 0;
const client_1 = require("../../../../prisma/client");
const AppError_1 = require("../../../../errors/AppError");
class CreateAlunoUseCase {
    execute({ nome, email, telefone, dataNascimento, endereco, dataAdmissao, nomeResponsavel }) {
        return __awaiter(this, void 0, void 0, function* () {
            //verificar se nome é nulo
            //verificar se email já existe
            const alunoAlreadyExists = yield client_1.prisma.aluno.findUnique({
                where: {
                    email: email,
                }
            });
            if (alunoAlreadyExists) {
                //erro
                throw new AppError_1.AppError("Aluno já existe no bd");
            }
            //verificar se telefone é nulo ou se possui caracteres
            //verificar se data de nascimento é nula ou verificar formato
            // Para DateTime verificar https://github.com/prisma/prisma-client-js/issues/658 deve-se usar ISO 8601 - 2020-05-04T14:05:23Z
            //variáveis para retornar endereço
            const rua = endereco.rua;
            const numero = endereco.numero;
            const complemento = endereco.complemento;
            const bairro = endereco.bairro;
            const cidade = endereco.cidade;
            const CEP = endereco.CEP;
            //verificar se endereço é válido
            //verificar se senha é nula
            let aluno;
            aluno = {
                nome,
                email,
                telefone,
                dataNascimento,
                endereco: {
                    create: {
                        rua: rua,
                        numero: numero,
                        complemento: complemento,
                        bairro: bairro,
                        cidade: cidade,
                        CEP: CEP,
                    }
                },
                nomeResponsavel,
                dataAdmissao
            };
            //Criar o Aluno
            const createAluno = yield client_1.prisma.aluno.create({
                data: aluno
            });
            return createAluno;
        });
    }
}
exports.CreateAlunoUseCase = CreateAlunoUseCase;
//# sourceMappingURL=CreateAlunoUseCase.js.map