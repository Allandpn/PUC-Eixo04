import { Response, Request } from "express";

import { prisma } from "../../../../prisma/client";
import { GetAlunoIdUseCase } from "./GetAlunoIdUseCase";

export class GetAlunoIdController {
  async handle(req: Request, res: Response) {

    const id_string = req.params.id;
    const id = parseInt(id_string);

    const getAlunoIdUseCase = new GetAlunoIdUseCase()

    const result = await getAlunoIdUseCase.execute(id);

    return res.status(200).json(result);
  }
}