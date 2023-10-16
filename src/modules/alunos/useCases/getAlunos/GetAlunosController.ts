import { Response } from "express";
import { GetAlunosUseCase } from "./GetAlunosUseCase";
import { prisma } from "../../../../prisma/client";

export class GetAlunosController {
  async handle(res: Response) {
    const getAlunosUseCase = new GetAlunosUseCase()
    const result = await getAlunosUseCase.execute().then(async () => {
      await prisma.$disconnect()
    })
      .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()

      });

    return res.status(201).json(result);
  }
}