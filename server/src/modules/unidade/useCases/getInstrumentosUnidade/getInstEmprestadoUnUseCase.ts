import { prisma } from "../../../../prisma/client";


export class GetInstrumentosUnEmprestadoUseCase {
    async execute() : Promise<any>{


        const instrumentoPorUnidadeEmprestado = await prisma.instrumento.groupBy({
            by: ['nomeInstrumento', 'unidadeId'],
            where: {
                isEmprestado: true
            },
          
            _count: {
                unidadeId: true
            }});

        
        return instrumentoPorUnidadeEmprestado;
    }

    
}