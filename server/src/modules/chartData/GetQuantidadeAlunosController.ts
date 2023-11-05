import { Request, Response } from "express";
import { GetAlunosUseCase } from "../alunos/useCases/getAlunos/GetAlunosUseCase";


export class GetQuantidadeAlunosController {
    async handle(req:Request, res: Response) {
      
      const getAlunosUseCase = new GetAlunosUseCase();
      const result = await getAlunosUseCase.execute();

      return res.status(200).json(result.length);

    }
}