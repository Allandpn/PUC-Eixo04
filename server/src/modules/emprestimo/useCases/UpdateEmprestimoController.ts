import { UpdateEmprestimoUseCase } from "./UpdateEmprestimoUseCase";
import { Request, Response } from "express";


export class UpdateEmprestimoController {

    async handle(req: Request, res: Response){
        const {emprestimoId} = req.body;

        const updateEmprestimoUseCase = new UpdateEmprestimoUseCase();

        const result = await updateEmprestimoUseCase.execute({emprestimoId});

        return res.status(200).json(result);

    }

}