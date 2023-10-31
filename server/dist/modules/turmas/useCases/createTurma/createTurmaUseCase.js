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
exports.CreateTurmaUseCase = void 0;
const client_1 = require("../../../../prisma/client");
const AppError_1 = require("../../../../errors/AppError");
class CreateTurmaUseCase {
    execute({ nome, diaDaSemanaInt, horario, nomeCurso, nomeUnidade }) {
        return __awaiter(this, void 0, void 0, function* () {
            //verificar se nome é nulo ou se tem caracteres proibidos
            //verificar se nome existe no banco de dados
            const turmaAlreadyExists = yield client_1.prisma.turma.findUnique({
                where: {
                    nome: nome,
                }
            });
            if (turmaAlreadyExists) {
                //erro
                throw new AppError_1.AppError("Turma já existe no bd");
            }
            //verificar se horario é válido e se está em formato válido
            // verificar se nomeCurso existe no bd curso, só se pode criar a turma caso exista o curso
            // verificar se unidade existe
            let turma;
            // Problema SQLite não aceita uma lista de escalares para conectar mais de um dia da semana de uma vez
            turma = {
                nome,
                horario,
                // diaDaSemana: {
                //     connect: {
                //         diaDaSemanaInt: diaDaSemanaInt
                //     },                    
                //     },
                curso: {
                    connect: {
                        nomeCurso: nomeCurso,
                    },
                },
                unidade: {
                    connect: {
                        nome: nomeUnidade,
                    },
                },
            };
            //Criar turma
            const createTurma = yield client_1.prisma.turma.create({
                data: turma
            });
            let turmaUpdate;
            for (const dia of diaDaSemanaInt) {
                turmaUpdate = yield client_1.prisma.turma.update({
                    where: { nome: nome },
                    data: {
                        diaDaSemana: {
                            connect: {
                                diaDaSemanaInt: dia,
                            },
                        },
                    },
                });
            }
            const result = yield client_1.prisma.turma.findUnique({
                where: {
                    nome: nome,
                }
            });
            return result;
        });
    }
}
exports.CreateTurmaUseCase = CreateTurmaUseCase;
//# sourceMappingURL=createTurmaUseCase.js.map