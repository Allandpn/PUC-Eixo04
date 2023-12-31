import { Unidade } from '.prisma/client';
import { Aluno, Endereco, Prisma, PrismaClient } from "@prisma/client";
import { CreateAlunoDTO } from "../../dtos/CreateAlunoDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class CreateAlunoUseCase {
    async execute({nome, email, telefone, dataNascimento, endereco, dataAdmissao, 
                    nomeResponsavel, telefoneResponsavel, emailResponsavel, 
                    anotacoesAluno, turmaId  } : CreateAlunoDTO) : Promise<Aluno>{
        //verificar se nome é nulo
        
        //verificar se email já existe
        const alunoAlreadyExists = await prisma.aluno.findUnique({
            where: {
                email: email,
            }
        })
        if (alunoAlreadyExists){
            //erro
            throw new AppError("Aluno já existe no bd");
        }


        //verificar se telefone é nulo ou se possui caracteres

        //verificar se data de nascimento é nula ou verificar formato
        // Para DateTime verificar https://github.com/prisma/prisma-client-js/issues/658 deve-se usar ISO 8601 - 2020-05-04T14:05:23Z

        //variáveis para retornar endereço
        const rua = endereco.rua;
        const numero = endereco.numero; 
        const complemento = endereco.complemento;
        const bairro = endereco.bairro;
        const cidade = endereco.cidade;
        const CEP = endereco.CEP;
        
        //verificar se endereço é válido
        



        //verificar se senha é nula

        let aluno: Prisma.AlunoCreateInput

        aluno = {
            nome,
            email,
            telefone,
            dataNascimento,
            endereco: {  
                create: {
                    rua: rua,
                    numero: numero,
                    complemento: complemento,
                    bairro: bairro,
                    cidade: cidade,
                    CEP: CEP,
                }                 
            },
            nomeResponsavel,
            dataAdmissao,
            telefoneResponsavel,
            emailResponsavel,
            anotacoesAluno,
            turma: {
                connect: {
                    id: turmaId
                }
            }


            
        }
        //Criar o Aluno
        const createAluno = await prisma.aluno.create({
            data: aluno
        });

        return createAluno;
    }
}