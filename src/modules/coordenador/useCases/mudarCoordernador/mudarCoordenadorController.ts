import { Request, Response } from "express";
import { MudarCoordenadorUseCase } from "./mudarCoordenadorUseCase";
import { prisma } from "../../../../prisma/client";

export class MudarCoordenadorController {
  async handle(req: Request, res: Response) {
    const { nome, email, telefone, dataNascimento, salario, endereco, instrumentoLeciona, coordenadorId } = req.body;

    const mudarCoordenadorUseCase = new MudarCoordenadorUseCase()

    const result = await mudarCoordenadorUseCase.execute({ nome, email, telefone, dataNascimento, salario, endereco, instrumentoLeciona, coordenadorId })
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