import { prisma } from "../../../../prisma/client";


export class GetInstMatriculasUnidadeUseCase {
    async execute() : Promise<any>{


        const popularidadeInstrumentoUnidade = await prisma.$queryRaw<any>`
                                    SELECT un.nome as unidade, 
                                    cs.instrumentosCursoNome as instrumento,
                                    CAST(COUNT(al.id) AS REAL) AS popularidade
                                    FROM (((unidades un INNER JOIN turmas tr ON un.id = tr.unidadeId) 
                                    INNER JOIN cursos cs ON cs.id = tr.cursoId ) 
                                    INNER JOIN alunos al ON al.turmaId = tr.id ) 
                                    GROUP BY instrumento, unidade`

        
        return popularidadeInstrumentoUnidade;
    }

    
}