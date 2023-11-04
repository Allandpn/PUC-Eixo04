import { prisma } from "../../../../prisma/client";


export class GetInstrumentosUnNaoEmprestadoUseCase {
    async execute() : Promise<any>{


        const instrumentoPorUnidadeNaoEmprestado = await prisma.instrumento.groupBy({
            by: ['nomeInstrumento', 'unidadeId'],
            where: {
                isEmprestado: false
            },
          
            _count: {
                unidadeId: true
            }});

        
        return instrumentoPorUnidadeNaoEmprestado;
    }

    
}