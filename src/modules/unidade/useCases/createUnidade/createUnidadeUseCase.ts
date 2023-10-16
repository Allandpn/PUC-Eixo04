import { Prisma, Unidade } from "@prisma/client";
import { CreateUnidadeDTO } from "../../dtos/createUnidadeDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class CreateUnidadeUseCase {
    async execute({nome, endereco}: CreateUnidadeDTO) : Promise<Unidade>{
        
        // validar se nome é válido

        //validar se nome existe no bd
        const unidadeAlreadyExists = await prisma.unidade.findUnique({
            where: {
                nome: nome,
            }
        })
        if (unidadeAlreadyExists){
            //erro
            throw new AppError("Existe unidade com este nome no bd");
        }

        let unidade: Prisma.UnidadeCreateInput

        unidade = {
            nome,
            endereco: {  
                create: {
                    rua: endereco.rua,
                    numero: endereco.numero,
                    complemento: endereco.complemento,
                    bairro: endereco.bairro,
                    cidade: endereco.cidade,
                    CEP: endereco.CEP,
                }                 
            },
        }

        const createUnidade = await prisma.unidade.create({
            data: unidade
        })

        return createUnidade


    }
}