import { prisma } from "../../../prisma/client";



export class GetInstrumentoMaisPopularUseCase {

    async execute(): Promise<any>{

        const instrumentos = await prisma.instrumento.groupBy({
            by: ['nomeInstrumento'],
            _count: {
                nomeInstrumento: true,
            },
            orderBy: {
                 _count: {
                     nomeInstrumento: 'desc',
                 },
             },
             take: 1,
            
        });     


        return instrumentos;
    }

}