import { Contribuicao } from "@prisma/client"
import { prisma } from "../../prisma/client"



export class GetContribuicoesUseCase {

    async execute(): Promise<Contribuicao[]> {
      const contribuicao = await prisma.contribuicao.findMany()
      return contribuicao
    }
  }