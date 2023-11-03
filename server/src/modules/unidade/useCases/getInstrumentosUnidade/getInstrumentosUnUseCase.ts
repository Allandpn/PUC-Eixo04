import { prisma } from "../../../../prisma/client";


export class GetInstrumentosUnUseCase {
    async execute() : Promise<any>{

        const qtdInstrumentosPorUnidade = await prisma.unidade.findMany({
            select: { 
                id: true,
                nome: true,
                _count: {
                    select:{
                        instrumentoId: true,                   
                     },
                },
            },},
        );

        const instrumento = await prisma.instrumento.findMany({
            select: {
                unidadeId:true,
                nomeInstrumento:true,
                unidade: {
                    select: {
                        nome: true,
                },
            },
        }});

        const instrumento2 = await prisma.instrumento.groupBy({
            by: ['nomeInstrumento', 'unidadeId'],
          
            _count: {
                unidadeId: true
            }});

        
        return instrumento2;
    }

    
}