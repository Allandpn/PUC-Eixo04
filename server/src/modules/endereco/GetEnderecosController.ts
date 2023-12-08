import { GetEnderecosUseCase } from "./getEnderecosUseCase";
import { Response, Request } from "express";



export class GetEnderecosController {
    async handle(req: Request, res: Response ) {
      const getEnderecosUseCase = new GetEnderecosUseCase()
      const result = await getEnderecosUseCase.execute()
  
      return res.status(201).json(result);
    }
  }