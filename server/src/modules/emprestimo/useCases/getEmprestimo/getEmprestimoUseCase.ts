import { prisma } from "../../../../prisma/client";

export class GetEmprestimoUseCase {
    async execute(): Promise<any>{

        const emprestimo = await prisma.emprestimoInstrumento.findMany()

        return emprestimo;
    }
}