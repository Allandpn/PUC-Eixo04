import { Request, Response } from "express";
import { CreateEmprestimoUseCase } from './CreateEmprestimoUseCase';


export class CreateEmprestimoController {

    async handle(req: Request, res: Response){
        const {instrumentoId, alunoId} = req.body;

        const createEmprestimoUseCase = new CreateEmprestimoUseCase();

        const result = await createEmprestimoUseCase.execute({instrumentoId, alunoId});

        return res.status(200).json(result);

    }

}