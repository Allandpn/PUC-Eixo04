
import { prisma } from "../../../../prisma/client";

export class GetUnidadesComQtdAlunosCoordenadoresInstrumentosUseCase {
    async execute() : Promise<any>{
        

        const qtdInstrumentosPorUnidade = await prisma.unidade.findMany({
            select: { 
                id: true,
                _count: {
                    select:{
                        instrumentoId: true,                   
                     },
                },
            },},
        )

        const qtdCursosPorUnidade = await prisma.$queryRaw<any>`SELECT un.id as idUnidade, CAST(COUNT(cs.id) AS REAL) AS numeroDeCursos FROM ((unidades un INNER JOIN turmas tr ON un.id = tr.unidadeId) INNER JOIN cursos cs ON cs.id = tr.cursoId ) GROUP BY idUnidade`
        
        const qtdAlunosPorUnidade = await prisma.$queryRaw<any>`SELECT un.id as idUnidade, CAST(COUNT(al.id) AS REAL) AS numeroDeAlunos FROM ((unidades un INNER JOIN turmas tr ON un.id = tr.unidadeId) INNER JOIN alunos al ON al.turmaId = tr.id ) GROUP BY idUnidade`
        
        const qtdCoordenadorPorUnidade = await prisma.$queryRaw<any>`SELECT un.id as idUnidade, CAST(COUNT(tr.coordenadorId) AS REAL) AS numeroDeCoordenadores FROM (unidades un INNER JOIN turmas tr ON un.id = tr.unidadeId) GROUP BY idUnidade`
               
        var jsons = new Array();
        jsons.push(qtdAlunosPorUnidade);
        jsons.push(qtdCursosPorUnidade);
        jsons.push(qtdCoordenadorPorUnidade);
        jsons.push(qtdInstrumentosPorUnidade);

        return jsons

    }
}