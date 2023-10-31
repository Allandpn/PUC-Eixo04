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
exports.GetAlunosController = void 0;
const GetAlunosUseCase_1 = require("./GetAlunosUseCase");
const client_1 = require("../../../../prisma/client");
class GetAlunosController {
    handle(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAlunosUseCase = new GetAlunosUseCase_1.GetAlunosUseCase();
            const result = yield getAlunosUseCase.execute().then(() => __awaiter(this, void 0, void 0, function* () {
                yield client_1.prisma.$disconnect();
            }))
                .catch((e) => __awaiter(this, void 0, void 0, function* () {
                console.error(e);
                yield client_1.prisma.$disconnect();
            }));
            return res.status(201).json(result);
        });
    }
}
exports.GetAlunosController = GetAlunosController;
//# sourceMappingURL=GetAlunosController.js.map