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
exports.GetUnidadesComQtdAlunosCoordenadoresInstrumentosUseCase = void 0;
const client_1 = require("../../../../prisma/client");
class GetUnidadesComQtdAlunosCoordenadoresInstrumentosUseCase {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const qtdInstrumentosPorUnidade = yield client_1.prisma.unidade.findMany({
                select: {
                    id: true,
                    _count: {
                        select: {
                            instrumentoId: true,
                        },
                    },
                },
            });
            const qtdCursosPorUnidade = yield client_1.prisma.$queryRaw `SELECT un.id as idUnidade, CAST(COUNT(cs.id) AS REAL) AS numeroDeCursos FROM ((unidades un INNER JOIN turmas tr ON un.id = tr.unidadeId) INNER JOIN cursos cs ON cs.id = tr.cursoId ) GROUP BY idUnidade`;
            const qtdAlunosPorUnidade = yield client_1.prisma.$queryRaw `SELECT un.id as idUnidade, CAST(COUNT(al.id) AS REAL) AS numeroDeAlunos FROM ((unidades un INNER JOIN turmas tr ON un.id = tr.unidadeId) INNER JOIN alunos al ON al.turmaId = tr.id ) GROUP BY idUnidade`;
            const qtdCoordenadorPorUnidade = yield client_1.prisma.$queryRaw `SELECT un.id as idUnidade, CAST(COUNT(tr.coordenadorId) AS REAL) AS numeroDeCoordenadores FROM (unidades un INNER JOIN turmas tr ON un.id = tr.unidadeId) GROUP BY idUnidade`;
            var jsons = new Array();
            jsons.push(qtdAlunosPorUnidade);
            jsons.push(qtdCursosPorUnidade);
            jsons.push(qtdCoordenadorPorUnidade);
            jsons.push(qtdInstrumentosPorUnidade);
            return jsons;
        });
    }
}
exports.GetUnidadesComQtdAlunosCoordenadoresInstrumentosUseCase = GetUnidadesComQtdAlunosCoordenadoresInstrumentosUseCase;
//# sourceMappingURL=getUnidComQtdAluCoordInstrUseCase.js.map
