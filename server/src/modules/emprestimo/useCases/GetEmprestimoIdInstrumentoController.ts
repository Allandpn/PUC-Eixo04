import { Request, Response } from "express";
import { GetEmprestimoIdInstrumentoUseCase } from "./GetEmprestimoIdInstrumentoUseCase";



export class GetEmprestimoIdInstrumentoController {

    async handle(req: Request, res: Response) {

        const id_string = req.params.idInstrumento;
        const id = parseInt(id_string);
        
        const getEmprestimoIdInstrumentoUseCase = new GetEmprestimoIdInstrumentoUseCase();

        const result = await getEmprestimoIdInstrumentoUseCase.execute(id);

        return res.status(200).json(result);

    }

}