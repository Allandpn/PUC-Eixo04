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
exports.CreateInstrumentoUseCase = void 0;
const client_1 = require("../../../prisma/client");
class CreateInstrumentoUseCase {
    execute({ nomeInstrumento, marcaInstrumento, estadoConservacaoDoInstrumento, unidadeId }) {
        return __awaiter(this, void 0, void 0, function* () {
            //verificar instrumento já existe
            let instrumento;
            instrumento = {
                nomeInstrumento,
                marcaInstrumento,
                estadoConservacaoDoInstrumento,
                unidade: {
                    connect: {
                        id: unidadeId
                    }
                }
            };
            const createInstrumento = yield client_1.prisma.instrumento.create({
                data: instrumento
            });
            return createInstrumento;
        });
    }
}
exports.CreateInstrumentoUseCase = CreateInstrumentoUseCase;
//# sourceMappingURL=createInstrumentoUseCase.js.map