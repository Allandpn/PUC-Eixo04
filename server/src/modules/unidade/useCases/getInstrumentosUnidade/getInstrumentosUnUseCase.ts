import { prisma } from "../../../../prisma/client";


export class GetInstrumentosUnUseCase {
    async execute() : Promise<any>{


        const instrumentoPorUnidade = await prisma.instrumento.groupBy({
            by: ['nomeInstrumento', 'unidadeId'],
          
            _count: {
                unidadeId: true
            }});

        
        return instrumentoPorUnidade;
    }

    
}