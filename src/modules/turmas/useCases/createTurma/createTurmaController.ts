import { CreateTurmaUseCase } from './createTurmaUseCase';
import { Request, Response } from "express";


export class CreateTurmaController {

    async handle(req: Request, res: Response){
        const {nome, diaDaSemanaInt, horario, nomeCurso, nomeUnidade} = req.body;

        const createTurmaUseCase = new CreateTurmaUseCase();

        const result = await createTurmaUseCase.execute({nome, diaDaSemanaInt, horario, nomeCurso, nomeUnidade});

        return res.status(200).json(result);

    }

}