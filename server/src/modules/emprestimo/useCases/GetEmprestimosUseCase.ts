import { EmprestimoInstrumento } from '@prisma/client';
import { prisma } from '../../../prisma/client';




export class GeEmprestimosUseCase {

    async execute(): Promise<any>{

        const emprestimos = await prisma.emprestimoInstrumento.findMany()

        return emprestimos;
    }

}