import { prisma } from "../../../../prisma/client";



export class GetAlunosUnUseCase{
    async execute() : Promise<any>{

        const alunosPorUnidade = await prisma.$queryRaw<any>`SELECT un.nome as unidade, CAST(COUNT(al.id) AS REAL) AS alunos FROM ((unidades un INNER JOIN turmas tr ON un.id = tr.unidadeId) INNER JOIN alunos al ON al.turmaId = tr.id ) GROUP BY unidade`

        return alunosPorUnidade
    }
}