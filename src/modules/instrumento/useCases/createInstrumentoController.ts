import { Request, Response } from "express";
import { CreateInstrumentoUseCase } from "./createInstrumentoUseCase";
import { prisma } from "../../../prisma/client";

export class CreateInstrumentoController {

    async handle(req: Request, res: Response) {
        const {nomeInstrumento, marcaInstrumento, estadoConservacaoDoInstrumento, isEmprestado} = req.body;;

        const createinstrumentoUseCase = new CreateInstrumentoUseCase();

        const result = await createinstrumentoUseCase.execute({nomeInstrumento, marcaInstrumento, estadoConservacaoDoInstrumento, isEmprestado})
            .then(async () => {
                await prisma.$disconnect();
            })
            .catch(async (e) => {
                console.error(e);
                await prisma.$disconnect();
            });

        return res.status(201).json(result);

    }
}