import { prisma } from "../../../prisma/client";




export class GetCursosUseCase {

    async execute(): Promise<any>{

        const cursos = await prisma.curso.findMany()

        return cursos;
    }

}