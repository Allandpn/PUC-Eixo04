import { GetUnidadeUseCase } from "./getUnidadeUseCase"
import { Request, Response } from "express";

export class GetUnidadeController {

    async handle(req: Request, res: Response) {
        const getUnidadeUseCase = new GetUnidadeUseCase();

        const result = await getUnidadeUseCase.execute();

        return res.status(200).json(result);
    }
}