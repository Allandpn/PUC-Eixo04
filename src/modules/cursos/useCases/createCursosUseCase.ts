import { Curso, Prisma } from "@prisma/client";
import { CreateCursoDTO } from "../dtos/createCursoDTO";
import { prisma } from '../../../prisma/client';


export class CreateCursosUseCase {
    async execute({nomeCurso, nomeInstrumento}: CreateCursoDTO) : Promise<Curso> {
        
        //verificar se nome do Curso é válido

        //verificar se nome do Instrumento é válido

        let curso: Prisma.CursoCreateInput

            curso = {
                nomeCurso,
                instrumentosCurso: {
                    connectOrCreate: {
                        where: {nomeInstrumento: nomeInstrumento},
                        create: {
                            nomeInstrumento: nomeInstrumento
                        },
                    },
                },
            }
        
        const createCurso = await prisma.curso.create({
            data: curso
        });

        return createCurso
    }
}