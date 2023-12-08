import { Request, Response } from "express";
import { GetInstrumentoIdUseCase } from "./getInstrumentoIdUseCase";


export class GetInstrumentoIdController {

    async handle(req: Request, res: Response) {

        const id_string = req.params.id;
        const id = parseInt(id_string);
        
        const getInstrumentoIdUseCase = new GetInstrumentoIdUseCase();

        const result = await getInstrumentoIdUseCase.execute(id);

        return res.status(200).json(result);

    }

}