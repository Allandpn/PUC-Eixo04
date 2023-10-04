import { CreateAdminUseCase } from './CreateAdminUseCase';
import { Request, Response } from "express";

export class CreateAdminController {
    async handle(req: Request, res: Response){
        const {nome, email, telefone, dataNascimento, senha} = req.body;

        const createAdminUseCase = new CreateAdminUseCase();

        const result = await createAdminUseCase.execute({nome, email, telefone, dataNascimento, senha});

        return res.status(201).json(result);
    }
}