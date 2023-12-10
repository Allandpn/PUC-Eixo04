import { GetContribuicoesUseCase } from "./getContribuicoesUseCase";
import { Response, Request } from "express";



export class GetContribuicoesController {
    async handle(req: Request, res: Response ) {
      const getContribuicoesUseCase = new GetContribuicoesUseCase()
      const result = await getContribuicoesUseCase.execute()
  
      return res.status(201).json(result);
    }
  }