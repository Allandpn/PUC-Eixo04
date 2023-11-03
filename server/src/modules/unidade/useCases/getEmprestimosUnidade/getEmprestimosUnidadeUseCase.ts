import { prisma } from "../../../../prisma/client";

export class GetEmprestimosUnidadeUseCase {
    async execute() : Promise<any> {

        const qtdEmprestimosUnidade = await prisma.unidade.findMany{
            select: {
                id: true,
                nome: true,
                _count: {
                    select: {
                        emprestimo: true,
                    },
                },

            }
        }

        const emprestimos = await prisma.emprestimoInstrumento.findMany{
            select: {
                id: true,
                unidadeId: true,
                instrumentoId: true,
                nomeInstrumento: true,
                unidade: {
                    select:{
                        nome: true,
                    }
                }
                
            }
        }

        const emprestimoUnidade = await prisma.emprestimoInstrumento.groupBy({
            by: ['nomeInstrumento', 'unidadeId'],

            _count: {
                emprestimoId: true,
            }
        })

        return emprestimoUnidade;
        }
        
}

