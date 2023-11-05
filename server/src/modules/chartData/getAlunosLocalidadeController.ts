import { Request, Response } from "express";
import { GetUnidadeUseCase } from "../unidade/useCases/getUnidade/getUnidadeUseCase";
import { GetAlunosUnUseCase } from "../unidade/useCases/getAlunosUnidade/getAlunosUnidadeUseCase";

export class GetAlunosLocalidadeController {

    async handle (req: Request, res: Response) {

        const getAlunosUnUseCase = new GetAlunosUnUseCase();
        const alunosUn = await getAlunosUnUseCase.execute();

        const getUnidadeUseCase = new GetUnidadeUseCase();
        const getUnidades = await getUnidadeUseCase.execute();


            //criar mapa de unidades contendo o nro e o nome da unidade
            const mapUnidades : any = {};

            getUnidades.forEach(item => {
                const id = item.id;
                const nome = item.nome;
                mapUnidades[id] = nome;
            });


            
        //substituir o nro da unidade pelo nome
        // outputArray.forEach(item => {
        //     const unidadeId = item.unidadeId;

        //     if(mapUnidades[unidadeId]){

        //         item.unidadeId = mapUnidades[unidadeId];
        //     }
        // });
        return res.status(200).json(alunosUn);

    }


}