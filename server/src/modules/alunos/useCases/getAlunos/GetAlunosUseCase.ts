import { Aluno } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAlunosUseCase {

  async execute(): Promise<Aluno[]> {
    const alunos = await prisma.aluno.findMany()
    return alunos
  }
}