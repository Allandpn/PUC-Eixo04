import { Request, Response } from "express";
import { GetAlunosUseCase } from "../alunos/useCases/getAlunos/GetAlunosUseCase";


export class GetAlunosIdadeMediaController {

    async handle (req: Request, res: Response) {

        const getAlunosUseCase = new GetAlunosUseCase();
        const alunos = await getAlunosUseCase.execute()

        const idades : any = [];
        
        const criarIdade = alunos.map(item => {
            const date : any = new Date(item.dataNascimento);
            const dateNow: any = new Date();
            const timeDiff = dateNow - date;
            const idade = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
            idades.push(idade);
          });

          function calculateAverage(numbers: any) {
            if (numbers.length === 0) {
              return 0; // Handle empty array to avoid division by zero
            }
          
            const sum = numbers.reduce((accumulator: any, currentValue : any) => accumulator + currentValue, 0);
            const average = sum / numbers.length;
            return average;
          }

          const mediaDeIdade = calculateAverage(idades).toFixed(1);
          const json = { x : mediaDeIdade}

        return res.status(200).json(json);

    }}