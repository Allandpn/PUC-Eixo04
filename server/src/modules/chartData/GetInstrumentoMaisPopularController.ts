import { Request, Response } from "express";
import { GetInstrumentoMaisPopularUseCase } from "../instrumento/useCases/getInstrumentoMaisPopularUseCase";


export class GetInstrumentoMaisPopularController {
    async handle(req:Request, res: Response) {
      
      const getInstrumentoMaisPopularUseCase = new GetInstrumentoMaisPopularUseCase();
      const result = await getInstrumentoMaisPopularUseCase.execute();

      return res.status(200).json(result[0]['nomeInstrumento']);

    }
}