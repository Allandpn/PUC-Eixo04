import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";
import { MudarAlunoUseCase } from "./mudarAlunoUseCase";

export class MudarAlunoController {
  async handle(req: Request, res: Response) {
    const { nome, email, telefone, dataNascimento, endereco, dataAdmissao, nomeResponsavel, alunoId } = req.body;

    const mudarAlunoUseCase = new MudarAlunoUseCase()

    const result = await mudarAlunoUseCase.execute({ nome, email, telefone, dataNascimento, endereco, dataAdmissao, nomeResponsavel, alunoId })
      .then(async () => {
        await prisma.$disconnect()
      })
      .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()

      });

    return res.status(201).json(result);

  }
}