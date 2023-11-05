import { Request, Response } from "express";
import { GetInstrumentoUseCase } from "../instrumento/useCases/getInstrumentoUseCase";



export class GetQuantidadeInstrumentosController {
    async handle(req:Request, res: Response) {
      
      const getInstrumentoUseCase = new GetInstrumentoUseCase();
      const result = await getInstrumentoUseCase.execute();

      return res.status(200).json(result.length);

    }
}