import { Request, Response } from "express";
import { GetUnidadeUseCase } from "../unidade/useCases/getUnidade/getUnidadeUseCase";

export class GetUnidadesFormatadasController {
    async handle (req: Request, res: Response) {

        const getUnidadeUseCase = new GetUnidadeUseCase();
        const getUnidades = await getUnidadeUseCase.execute();

        const result : any = [];

        getUnidades.forEach((element: { nome: string; }) => {
            const unidade = element.nome;
            result.push({unidade : unidade});
        });

        return res.status(200).json(result);
    }
}

