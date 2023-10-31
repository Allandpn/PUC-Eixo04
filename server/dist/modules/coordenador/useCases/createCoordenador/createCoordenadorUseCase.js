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
exports.CreateCoordenadorUseCase = void 0;
const client_1 = require("../../../../prisma/client");
const AppError_1 = require("../../../../errors/AppError");
class CreateCoordenadorUseCase {
    execute({ nome, email, telefone, dataNascimento, salario, endereco, instrumentosLeciona }) {
        return __awaiter(this, void 0, void 0, function* () {
            //verificar se nome é nulo ou se tem caracteres proibidos
            //verificar se email existe no banco de dados
            const coordenadorAlreadyExists = yield client_1.prisma.coordenador.findUnique({
                where: {
                    email: email,
                }
            });
            if (coordenadorAlreadyExists) {
                //erro
                throw new AppError_1.AppError("Coordenador já existe no bd");
            }
            //verificar se data de nascimento é nula ou verificar formato
            // Para DateTime verificar https://github.com/prisma/prisma-client-js/issues/658 deve-se usar ISO 8601 - 2020-05-04T14:05:23Z
            //verificar se salario é número
            //variáveis para retornar endereço
            const rua = endereco.rua;
            const numero = endereco.numero;
            const complemento = endereco.complemento;
            const bairro = endereco.bairro;
            const cidade = endereco.cidade;
            const CEP = endereco.CEP;
            //verificar se endereço é válido
            //variáveis relativas a turma
            // selecionar ou criar instrumentos
            let coordenador;
            coordenador = {
                nome,
                email,
                telefone,
                dataNascimento,
                salario,
                endereco: {
                    create: {
                        rua: rua,
                        numero: numero,
                        complemento: complemento,
                        bairro: bairro,
                        cidade: cidade,
                        CEP: CEP,
                    },
                },
                // instrumentosLeciona: {
                //     connectOrCreate: {
                //         where: {nomeInstrumento: instrumentoLeciona},
                //         create: {
                //             nomeInstrumento: instrumentoLeciona
                //         },
                //     } ,         
                // },                
            };
            const createCoordenador = yield client_1.prisma.coordenador.create({
                data: coordenador
            });
            let coordenadorUpdate;
            // instrumentosLeciona.forEach(async (instrumento) => {
            //     await prisma.coordenador.update({
            //         where: {email: email},
            //         data: {
            //             instrumentosLeciona: {
            //                 connectOrCreate: {
            //                     where: {nomeInstrumento: instrumento},
            //                     create: {nomeInstrumento: instrumento},
            //                 },
            //             }
            //         }
            //     })
            // })
            for (const instrumento of instrumentosLeciona) {
                coordenadorUpdate = yield client_1.prisma.coordenador.update({
                    where: { email: email },
                    data: {
                        instrumentosLeciona: {
                            connectOrCreate: {
                                where: { nomeInstrumento: instrumento },
                                create: { nomeInstrumento: instrumento },
                            },
                        }
                    }
                });
            }
            //retorna coordenador
            const result = yield client_1.prisma.coordenador.findUnique({
                where: {
                    email: email
                },
            });
            return result;
        });
    }
}
exports.CreateCoordenadorUseCase = CreateCoordenadorUseCase;
//# sourceMappingURL=createCoordenadorUseCase.js.map