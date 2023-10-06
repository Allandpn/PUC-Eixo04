import { prisma } from '../../../../prisma/client';
import { CreateAdminUseCase } from './CreateAdminUseCase';
import { Request, Response } from "express";

export class CreateAdminController {
    async handle(req: Request, res: Response){
        const {nome, email, telefone, dataNascimento, senha} = req.body;

        const createAdminUseCase = new CreateAdminUseCase();

        const result = await createAdminUseCase.execute({nome, email, telefone, dataNascimento, senha})
            .then(async () => {
                await prisma.$disconnect()
            })
            .catch(async (e) => {
                console.error(e)
                await prisma.$disconnect()
                
            });
            
        return res.status(201).json(result);
    }
}