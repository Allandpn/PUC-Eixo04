import { Request, Response } from "express";
import { GetEmprestimoUseCase } from "./getEmprestimoUseCase";

export class GetEmprestimoController {
    async handle(req: Request, res: Response) {

        const getEmprestimoUseCase = new GetEmprestimoUseCase();

        const result = await getEmprestimoUseCase.execute()

        return res.status(200).json(result);
    }
}