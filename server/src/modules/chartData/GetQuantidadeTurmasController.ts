import { Request, Response } from "express";
import { GetTurmaUseCase } from "../turmas/useCases/getTurmaUseCase/getTurmaUseCase";




export class GetQuantidadeTurmasController {
    async handle(req:Request, res: Response) {
      
      const getTurmaUseCase = new GetTurmaUseCase();
      const result = await getTurmaUseCase.execute();

      return res.status(200).json(result.length);

    }
}