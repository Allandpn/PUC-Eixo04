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
exports.CreateAdminUseCase = void 0;
const client_1 = require("../../../../prisma/client");
const AppError_1 = require("../../../../errors/AppError");
class CreateAdminUseCase {
    execute({ nome, email, telefone, dataNascimento, senha }) {
        return __awaiter(this, void 0, void 0, function* () {
            //verificar se nome é nulo
            //verificar se email já existe
            const adminAlreadyExists = yield client_1.prisma.admin.findUnique({
                where: {
                    email: email,
                }
            });
            if (adminAlreadyExists) {
                //erro
                throw new AppError_1.AppError("Admin já existe no bd");
            }
            //verificar se telefone é nulo ou se possui caracteres
            //verificar se data de nascimento é nula ou verificar formato
            // Para DateTime verificar https://github.com/prisma/prisma-client-js/issues/658 deve-se usar ISO 8601 - 2020-05-04T14:05:23Z
            //verificar se senha é nula
            //Criar o Admin
            const admin = yield client_1.prisma.admin.create({
                data: {
                    nome,
                    email,
                    telefone,
                    dataNascimento,
                    senha
                }
            });
            return admin;
        });
    }
}
exports.CreateAdminUseCase = CreateAdminUseCase;
//# sourceMappingURL=CreateAdminUseCase.js.map