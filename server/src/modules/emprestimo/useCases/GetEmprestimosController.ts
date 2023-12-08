import { GeEmprestimosUseCase } from "./GetEmprestimosUseCase";
import { Request, Response } from "express";



export class GetEmprestimosController {

    async handle(req: Request, res: Response){
        
        const geEmprestimosUseCase = new GeEmprestimosUseCase();

        const result = await geEmprestimosUseCase.execute();

        return res.status(200).json(result);

    }

}