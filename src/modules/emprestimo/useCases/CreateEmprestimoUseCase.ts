import { Instrumento, Prisma } from './../../../../node_modules/.prisma/client/index.d';
import { EmprestimoInstrumento } from "@prisma/client";
import { CreateEmprestimoDTO } from "../dtos/createEmprestimoDTO";
import { prisma } from '../../../prisma/client';
import { AppError } from '../../../errors/AppError';


export class CreateEmprestimoUseCase {
    async execute({instrumentoId, alunoId} : CreateEmprestimoDTO) : Promise<EmprestimoInstrumento | null> {

        //verificar se instrumentoId existe no bd
        const instrumentoAlreadyExists = await prisma.instrumento.findUnique({
            where: {
                id: instrumentoId,
            }
        })
        if (!instrumentoAlreadyExists){
            //erro
            throw new AppError("Instrumento não existe no bd");
        }
        //verificar se alunoId existe no bd
        const alunoAlreadyExists = await prisma.aluno.findUnique({
            where: {
                id: alunoId,
            }
        })
        if (!alunoAlreadyExists){
            //erro
            throw new AppError("Aluno não existe no bd");
        }

       
        //verificar se o instrumento está emprestado
       
        let emprestimo : Prisma.EmprestimoInstrumentoCreateInput;

        emprestimo = {
            aluno: {
                connect: {
                   id:  alunoId,
                },
            },
            instrumento: {
                connect: {
                    id: instrumentoId,
                },
                // create: {
                //     isEmprestado: true,
                // }
            }
        }

        //Cria o empréstimo
        const createEmprestimo = await prisma.emprestimoInstrumento.create({
           data: emprestimo
        });

        //Atualiza o campo isEmprestado do instrumento
        const updateInstrumento = await prisma.instrumento.update({
            where: {id: instrumentoId},
            data: {
                isEmprestado: true,
            }
        })

        const result = await prisma.emprestimoInstrumento.findUnique({
            where: {
                id: createEmprestimo.id,
            }
        })       

        return result;

    }
}