import { Instrumento, Prisma } from '.prisma/client';
import { EmprestimoInstrumento } from "@prisma/client";
import { CreateEmprestimoDTO } from "../dtos/createEmprestimoDTO";
import { prisma } from '../../../prisma/client';
import { AppError } from '../../../errors/AppError';
import { UpdateEmprestimoDTO } from '../dtos/updateEmprestimoDTO';


export class UpdateEmprestimoUseCase {
    async execute({emprestimoId} : UpdateEmprestimoDTO) : Promise<EmprestimoInstrumento | null> {

        //verificar se instrumentoId existe no bd
        const emprestimoAlreadyExists = await prisma.emprestimoInstrumento.findUnique({
            where: {
                id: emprestimoId,
            }
        })
        if (!emprestimoAlreadyExists){
            //erro
            throw new AppError("Emprestimo não existe no bd");
        }      


        //Cria o empréstimo
        const updateEmprestimo = await prisma.emprestimoInstrumento.update({
            where: {
                id: emprestimoId,
            },
            data: {
                dataFinalEmprestimo: new Date(),
                instrumento:{
                    update: {
                        isEmprestado: false,
                    }
                }
            }                         
        });  

        return updateEmprestimo;

    }
}