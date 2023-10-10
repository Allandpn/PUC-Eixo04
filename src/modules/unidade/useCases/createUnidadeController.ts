import { Request, Response } from "express";
import { CreateUnidadeUseCase } from "./createUnidadeUseCase";

export class CreateUnidadeController {
    async handle(req: Request, res: Response){
        const {nome, endereco} = req.body;

        const createUnidadeUseCase = new CreateUnidadeUseCase();

        const result = await createUnidadeUseCase.execute({nome, endereco});

        return res.status(200).json(result);
    }
}