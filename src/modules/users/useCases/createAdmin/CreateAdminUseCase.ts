import { Admin } from "@prisma/client";
import { CreateAdminDTO } from "../../dtos/CreateAdminDTO";
import { prisma } from "../../../../prisma/client";

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

        }


        //verificar se telefone é nulo ou se possui caracteres

        //verificar se data de nascimento é nula ou verificar formato

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