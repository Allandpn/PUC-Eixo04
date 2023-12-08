import { EmprestimoInstrumento } from "@prisma/client"
import { prisma } from "../../../prisma/client"




export class GetEmprestimoIdInstrumentoUseCase {

    async execute(idInstrumento: number): Promise<EmprestimoInstrumento[] | null> {
      const emprestimoIdInstrumento = await prisma.emprestimoInstrumento.findMany({
          where: {
              instrumentoId: idInstrumento,
          }
      })
      return emprestimoIdInstrumento
    }
  }