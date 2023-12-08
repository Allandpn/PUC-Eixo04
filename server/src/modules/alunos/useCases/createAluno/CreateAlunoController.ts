import { prisma } from '../../../../prisma/client';
import { CreateAlunoUseCase } from './CreateAlunoUseCase';
import { Request, Response } from "express";

export class CreateAlunoController {
    async handle(req: Request, res: Response){
        const {nome, email, telefone, dataNascimento, endereco, dataAdmissao, nomeResponsavel, telefoneResponsavel, emailResponsavel, 
            anotacoesAluno, turmaId} = req.body;

        const createAlunoUseCase = new CreateAlunoUseCase();

        const result = await createAlunoUseCase.execute({nome, email, telefone, dataNascimento, endereco, dataAdmissao, nomeResponsavel, telefoneResponsavel, emailResponsavel, 
            anotacoesAluno, turmaId});

        return res.status(201).json(result);
    }
}