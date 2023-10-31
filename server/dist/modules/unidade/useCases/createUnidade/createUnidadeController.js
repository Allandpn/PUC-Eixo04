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
exports.CreateUnidadeController = void 0;
const createUnidadeUseCase_1 = require("./createUnidadeUseCase");
class CreateUnidadeController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, endereco } = req.body;
            const createUnidadeUseCase = new createUnidadeUseCase_1.CreateUnidadeUseCase();
            const result = yield createUnidadeUseCase.execute({ nome, endereco });
            return res.status(200).json(result);
        });
    }
}
exports.CreateUnidadeController = CreateUnidadeController;
//# sourceMappingURL=createUnidadeController.js.map