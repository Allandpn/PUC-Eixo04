import { prisma } from "../../../../prisma/client";


export class GetAlunosDataMatriculaUseCase {
    async execute() : Promise<any>{

            //const teste = await prisma.$queryRaw<any>`SELECT un.id as idUnidade, CAST(COUNT(cs.id) AS REAL) AS numeroDeCursos FROM ((unidades un INNER JOIN turmas tr ON un.id = tr.unidadeId) INNER JOIN cursos cs ON cs.id = tr.cursoId ) GROUP BY idUnidade`

            try {
                //const teste = await prisma.$queryRaw<any>`SELECT strftime('%Y', al.created_at) as ano un.id as idUnidade, CAST(COUNT(cs.id) AS REAL) AS numeroDeCursos FROM ((unidades un INNER JOIN turmas tr ON un.id = tr.unidadeId) INNER JOIN cursos cs ON cs.id = tr.cursoId ) GROUP BY ano`;
                
                const teste = await prisma.$queryRaw<any>`SELECT  al.id as idAluno, un.nome as nomeUnidade, al.dataAdmissao FROM ((unidades un INNER JOIN turmas tr ON un.id = tr.unidadeId) INNER JOIN alunos al ON al.turmaId = tr.id )`;
                
                return teste;
              } catch (error) {
                // Handle the error, e.g., log it or return an error response
                throw error;
              }


        //return teste;
    } 
}
