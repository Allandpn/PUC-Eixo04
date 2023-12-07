import { GetCursosUseCase } from "./getCursosUseCase";
import { Request, Response } from "express";



export class GetCursosController {

    async handle(req: Request, res: Response){
        
        const getCursosUseCase = new GetCursosUseCase();

        const result = await getCursosUseCase.execute();

        return res.status(200).json(result);

    }

}