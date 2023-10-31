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
exports.CreateCursoUseCase = void 0;
const client_1 = require("../../../prisma/client");
class CreateCursoUseCase {
    execute({ nomeCurso, nomeInstrumento }) {
        return __awaiter(this, void 0, void 0, function* () {
            //verificar se nome do Curso é válido
            //verificar se nome do Instrumento é válido
            let curso;
            curso = {
                nomeCurso,
                instrumentosCurso: {
                    connectOrCreate: {
                        where: { nomeInstrumento: nomeInstrumento },
                        create: {
                            nomeInstrumento: nomeInstrumento
                        },
                    },
                },
            };
            const createCurso = yield client_1.prisma.curso.create({
                data: curso
            });
            return createCurso;
        });
    }
}
exports.CreateCursoUseCase = CreateCursoUseCase;
//# sourceMappingURL=createCursoUseCase.js.map