import { Request, Response } from "express";
import { GetUnidadesComQtdAlunosCoordenadoresInstrumentosUseCase } from "./getUnComQtdAlCoordInstUseCase";


export class GetUnidadesComQtdAlunosCoordenadoresInstrumentosController {
    async handle(req: Request, res: Response){
        

        const getUnidadesComQtdAlunosCoordenadoresInstrumentosUseCase = new GetUnidadesComQtdAlunosCoordenadoresInstrumentosUseCase();

        const result = await getUnidadesComQtdAlunosCoordenadoresInstrumentosUseCase.execute();

        return res.status(200).json(result);
    }
}