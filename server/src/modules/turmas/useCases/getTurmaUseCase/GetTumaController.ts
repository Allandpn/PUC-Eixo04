import { Request, Response } from "express";
import { GetTurmaUseCase } from "./getTurmaUseCase";


export class GetTurmaController {

    async handle(req: Request, res: Response){
       
        const getTurmaUseCase = new GetTurmaUseCase();

        const result = await getTurmaUseCase.execute();

        return res.status(200).json(result);

    }

}