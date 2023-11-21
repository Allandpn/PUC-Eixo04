import { Aluno } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAlunoIdUseCase {

  async execute(id: number): Promise<any> {
    const alunoPorId = await prisma.aluno.findFirst({
        where: {
            id: id,
        }
    })
    return alunoPorId
  }
}