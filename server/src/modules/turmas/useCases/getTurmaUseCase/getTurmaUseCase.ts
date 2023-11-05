import { prisma } from "../../../../prisma/client";




export class GetTurmaUseCase {

    async execute(): Promise<any>{

        const turmas = await prisma.turma.findMany()

        return turmas;
    }

}