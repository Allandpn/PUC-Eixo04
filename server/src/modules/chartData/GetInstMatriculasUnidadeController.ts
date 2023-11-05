

import { Request, Response } from "express";
import { GetUnidadeUseCase } from "../unidade/useCases/getUnidade/getUnidadeUseCase";
import { GetInstMatriculasUnidadeUseCase } from "../unidade/useCases/getInstrumentosUnidade/getInstMatriculasUnidadeUseCase";

export class GetInstMatriculasUnidadeController {
    async handle (req: Request, res: Response) {

        const getInstMatriculasUnidadeUseCase = new GetInstMatriculasUnidadeUseCase();
        
        

        const popularidadeInstrumentoUnidade = await getInstMatriculasUnidadeUseCase.execute();
        
        // Create an object to store the transformed data
        const transformedData : any = {};

        // Iterate over the data and perform the transformation
        popularidadeInstrumentoUnidade.forEach(item => {
          const instrumento = item.instrumento;
          const unidade = item.unidade;
          const popularidade = item.popularidade;

          if (!transformedData[instrumento]) {
            transformedData[instrumento] = {};
          }

          transformedData[instrumento][unidade] = popularidade;
        });


        //tranformar dados para formato requerido pelo chartJs
        const result : any = []

        for (const instrumento in transformedData) {
            const item : any = { instrumento: instrumento };
            for (const unId in transformedData[instrumento]) {
              item[unId] = transformedData[instrumento][unId];
            }
            result.push(item);
          }


        return res.status(200).json(result);

    }
}