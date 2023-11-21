
import { Request, Response } from "express";
import { GetInstrumentoComEmprestimoUseCase } from "./getInstrumentoComEmprestimoUseCase";


export class GetInstrumentoComEmprestimoController {

    async handle(req: Request, res: Response) {
        
        const getInstrumentoComEmprestimoUseCase = new GetInstrumentoComEmprestimoUseCase();

        const result = await getInstrumentoComEmprestimoUseCase.execute();

        return res.status(200).json(result);

    }

}