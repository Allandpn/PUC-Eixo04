import { Instrumento } from "@prisma/client"
import { prisma } from "../../../prisma/client"



export class GetInstrumentoIdUseCase {

    async execute(id: number): Promise<Instrumento | null> {
      const instrumentoPorId = await prisma.instrumento.findFirst({
          where: {
              id: id,
          }
      })
      return instrumentoPorId
    }
  }