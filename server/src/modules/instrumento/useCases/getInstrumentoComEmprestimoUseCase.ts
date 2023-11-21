import { prisma } from "../../../prisma/client";



export class GetInstrumentoComEmprestimoUseCase {

    async execute(): Promise<any>{

        const instrumentosComEmprestimo = await prisma.instrumento.findMany({
            include: {
                emprestimoInstrumento: {
                    select: {
                        dataInicialEmprestimo: true,
                        dataFinalEmprestimo: true,
                        alunoId: true,

                    }
                }
            }
        })

        return instrumentosComEmprestimo;
    }

}