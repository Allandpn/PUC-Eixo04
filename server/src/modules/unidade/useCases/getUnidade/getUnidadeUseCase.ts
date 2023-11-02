import { prisma } from "../../../../prisma/client";


export class GetUnidadeUseCase {

    async execute(): Promise<any>{
        const unidades = await prisma.unidade.findMany();

        return unidades;
    }

}