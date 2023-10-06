import { Admin } from "@prisma/client";
import { CreateAdminDTO } from "../../dtos/CreateAdminDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class CreateAdminUseCase {
    async execute({nome, email, telefone, dataNascimento, senha} : CreateAdminDTO) : Promise<Admin>{
        //verificar se nome é nulo
        
        //verificar se email já existe
        const adminAlreadyExists = await prisma.admin.findUnique({
            where: {
                email: email,
            }
        })
        if (adminAlreadyExists){
            //erro
            throw new AppError("Admin já existe no bd");
        }


        //verificar se telefone é nulo ou se possui caracteres

        //verificar se data de nascimento é nula ou verificar formato
        // Para DateTime verificar https://github.com/prisma/prisma-client-js/issues/658 deve-se usar ISO 8601 - 2020-05-04T14:05:23Z

        //verificar se senha é nula


        //Criar o Admin
        const admin = await prisma.admin.create({
            data: {
                nome,
                email,
                telefone,
                dataNascimento,
                senha
            }
        });

        return admin;
    }
}