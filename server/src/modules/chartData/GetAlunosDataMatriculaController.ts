import { Request, Response } from "express";
import { GetAlunosDataMatriculaUseCase } from "../alunos/useCases/getAlunosDataMatricula/GetAlunosDataMatriculaUseCase";



export class GetAlunosDataMatriculaController {
    async handle (req: Request, res: Response) {
              
     const getAlunosDataMatriculaUseCase = new GetAlunosDataMatriculaUseCase();

     const alunosDataMatricula = await getAlunosDataMatriculaUseCase.execute()

     const transformSelecionarAno = alunosDataMatricula.map(item => {
        const date = new Date(item.dataAdmissao);
        const year = date.getFullYear();
        item.dataAdmissao = year.toString();
        return item;
      });


        // Initialize an object to store the aggregated data
        const aggregatedData : any = {};

        // Iterate over the data and perform the aggregation
        transformSelecionarAno.forEach(item  => {
        const year = item.dataAdmissao;
        const nomeUnidade = item.nomeUnidade;

        // Initialize the year if it doesn't exist
        if (!aggregatedData[year]) {
            aggregatedData[year] = {};
        }

        // Initialize the count for the "nomeUnidade" if it doesn't exist
        if (!aggregatedData[year][nomeUnidade]) {
            aggregatedData[year][nomeUnidade] = 0;
        }

        // Increment the count for the "nomeUnidade"
        aggregatedData[year][nomeUnidade]++;
        });


        //tranformar dados para formato requerido pelo chartJs
        const transformFinal : any = []

        for (const ano in aggregatedData) {
            const item : any = { ano: ano };
            for (const unId in aggregatedData[ano]) {
                item[unId] = aggregatedData[ano][unId];
            }
            transformFinal.push(item);
            }




     return res.status(200).json(transformFinal);

    }
}