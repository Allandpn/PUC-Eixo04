import { Endereco } from "@prisma/client"
import { prisma } from "../../prisma/client"


export class GetEnderecosUseCase {

    async execute(): Promise<Endereco[]> {
      const enderecos = await prisma.endereco.findMany()
      return enderecos
    }
  }