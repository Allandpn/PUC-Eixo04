import { prisma } from '../../../prisma/client';
import { CreateCursoUseCase } from './createCursoUseCase';
import { Request, Response } from "express";


export class CreateCursoController {
    async handle(req: Request, res: Response){

        const {nomeCurso, nomeInstrumento} = req.body;

        const createCursoUseCase = new CreateCursoUseCase();

        const result = await createCursoUseCase.execute({nomeCurso, nomeInstrumento})

        return res.status(201).json(result);
    }
}