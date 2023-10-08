import { Request, Response } from "express";
import { CreateInstrumentoUseCase } from "./createInstrumentoUseCase";
import { prisma } from "../../../prisma/client";

export class CreateInstrumentoController {

    async handle(req: Request, res: Response) {
        const {nomeInstrumento, marcaInstrumento, estadoConservacaoDoInstrumento, isEmprestado} = req.body;;

        const createinstrumentoUseCase = new CreateInstrumentoUseCase();

        const result = await createinstrumentoUseCase.execute({nomeInstrumento, marcaInstrumento, estadoConservacaoDoInstrumento})

        return res.status(201).json(result);

    }
}