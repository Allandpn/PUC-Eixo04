import { Request, Response } from "express";
import { CreateCoordenadorUseCase } from "./createCoordenadorUseCase";
import { prisma } from "../../../../prisma/client";


export class CreateCoordenadorController {

    async handle(req: Request, res: Response) {
        const {nome, email, telefone, dataNascimento, salario, endereco, instrumentoLeciona} = req.body;;

        const createCoordenadorUseCase = new CreateCoordenadorUseCase();

        const result = await createCoordenadorUseCase.execute({nome, email, telefone, dataNascimento, salario, endereco, instrumentoLeciona})
            .then(async () => {
                await prisma.$disconnect();
            })
            .catch(async (e) => {
                console.error(e);
                await prisma.$disconnect();
            });

        return res.status(201).json(result);

    }
}