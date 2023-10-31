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
exports.CreateUnidadeUseCase = void 0;
const client_1 = require("../../../../prisma/client");
const AppError_1 = require("../../../../errors/AppError");
class CreateUnidadeUseCase {
    execute({ nome, endereco }) {
        return __awaiter(this, void 0, void 0, function* () {
            // validar se nome é válido
            //validar se nome existe no bd
            const unidadeAlreadyExists = yield client_1.prisma.unidade.findUnique({
                where: {
                    nome: nome,
                }
            });
            if (unidadeAlreadyExists) {
                //erro
                throw new AppError_1.AppError("Existe unidade com este nome no bd");
            }
            let unidade;
            unidade = {
                nome,
                endereco: {
                    create: {
                        rua: endereco.rua,
                        numero: endereco.numero,
                        complemento: endereco.complemento,
                        bairro: endereco.bairro,
                        cidade: endereco.cidade,
                        CEP: endereco.CEP,
                    }
                },
            };
            const createUnidade = yield client_1.prisma.unidade.create({
                data: unidade
            });
            return createUnidade;
        });
    }
}
exports.CreateUnidadeUseCase = CreateUnidadeUseCase;
//# sourceMappingURL=createUnidadeUseCase.js.map