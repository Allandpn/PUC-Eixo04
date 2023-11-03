
import { GetInstrumentosUnUseCase } from "../unidade/useCases/getInstrumentosUnidade/getInstrumentosUnUseCase";
import { Request, Response } from "express";
import { GetUnidadeUseCase } from "../unidade/useCases/getUnidade/getUnidadeUseCase";

export class GetInstrumentoLocalidadeController {
    async handle (req: Request, res: Response) {

        const getInstrumentosUnUseCase = new GetInstrumentosUnUseCase();
        const getUnidadeUseCase = new GetUnidadeUseCase();
        

        const unidadeCountInstrumento = await getInstrumentosUnUseCase.execute();
        const getUnidades = await getUnidadeUseCase.execute();

        
        const outputArray = unidadeCountInstrumento.map(item =>{
            const x = item.nomeInstrumento;
            const unidadeId = item.unidadeId;
            const count = item._count.unidadeId;

            return {
                x: x,
                unidadeId: unidadeId,
                contagem: count
            }

        })


        //criar mapa de unidades contendo o nro e o nome da unidade
        const mapUnidades : any = {};

        getUnidades.forEach(item => {
            const id = item.id;
            const nome = item.nome;
            mapUnidades[id] = nome;
        });

        //substituir o nro da unidade pelo nome
        outputArray.forEach(item => {
            const unidadeId = item.unidadeId;

            if(mapUnidades[unidadeId]){

                item.unidadeId = mapUnidades[unidadeId];
            }
        });


        //consolidar os dados por unidade
        const result : any = {}
        
        outputArray.forEach(item => {
            const x = item.x;
            const unidadeId = item.unidadeId;
            const contagem = item.contagem;
          
            // Create or update the result object
            if (!result[x]) {
              result[x] = {};
            }
            result[x][unidadeId] = contagem;
          });
        
        //tranformar dados para formato requerido pelo chartJs
        const result2 : any = []

        for (const x in result) {
            const item : any = { x: x };
            for (const unId in result[x]) {
              item[unId] = result[x][unId];
            }
            result2.push(item);
          }



        return res.status(200).json(result2);

    }
}