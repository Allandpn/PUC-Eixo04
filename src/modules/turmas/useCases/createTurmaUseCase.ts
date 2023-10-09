import { Prisma, Turma } from "@prisma/client";
import { CreateTurmaDTO } from "../dtos/createTurmaDTO";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../../errors/AppError";

export class CreateTurmaUseCase {
    async execute({nome, diaDaSemanaInt, horario, nomeCurso} : CreateTurmaDTO): Promise<Turma | null> {

        //verificar se nome é nulo ou se tem caracteres proibidos

        //verificar se nome existe no banco de dados
        const turmaAlreadyExists = await prisma.turma.findUnique({
            where: {
                nome: nome,
            }
        })
        if (turmaAlreadyExists){
            //erro
            throw new AppError("Coordenador já existe no bd");
        }

        //verificar se horario é válido e se está em formato válido

        // verificar se nomeCurso existe no bd curso, só se pode criar a turma caso exista o curso

        let turma : Prisma.TurmaCreateInput
        // Problema SQLite não aceita uma lista de escalares para conectar mais de um dia da semana de uma vez

        turma = {
            nome,
            horario,
            // diaDaSemana: {
            //     connect: {
            //         diaDaSemanaInt: diaDaSemanaInt
            //     },                    
            //     },
            curso: {
                connect:{
                    nomeCurso: nomeCurso
                },
            },
        }
       
        //Criar turma
        const createTurma = await prisma.turma.create({
            data: turma
        });

        
        let turmaUpdate;
        for (const dia of diaDaSemanaInt){
            turmaUpdate = await prisma.turma.update({
                where: {nome: nome},
                data: { 
                    diaDaSemana: {
                        connect:{
                            diaDaSemanaInt: dia,
                        },
                    },
                },            
            })
        }
        
        const result = await prisma.turma.findUnique({
            where: {
                nome: nome,
            }
        })
        
        return result

    }
}