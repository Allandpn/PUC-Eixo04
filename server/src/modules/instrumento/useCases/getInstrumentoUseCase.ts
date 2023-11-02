import { prisma } from "../../../prisma/client";



export class GetInstrumentoUseCase {

    async execute(): Promise<any>{

        const instrumentos = await prisma.instrumento.findMany()

        return instrumentos;
    }

}