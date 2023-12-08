import { Response, Request } from "express";
import { GetAlunosUseCase } from "./GetAlunosUseCase";
import { prisma } from "../../../../prisma/client";

export class GetAlunosController {
  async handle(req: Request, res: Response ) {
    const getAlunosUseCase = new GetAlunosUseCase()
    const result = await getAlunosUseCase.execute()

    return res.status(201).json(result);
  }
}