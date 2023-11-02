import { GetInstrumentoUseCase } from "./getInstrumentoUseCase";
import { Request, Response } from "express";


export class GetInstrumentoController {

    async handle(req: Request, res: Response) {
        
        const getInstrumentoUseCase = new GetInstrumentoUseCase();

        const result = await getInstrumentoUseCase.execute();

        return res.status(200).json(result);

    }

}