import { Coordenador } from './../../../../../node_modules/.prisma/client/index.d';
import { CreateCoordenadorDTO } from "../../dtos/createCoordenadorDTO";
import { prisma } from '../../../../prisma/client';
import { AppError } from '../../../../errors/AppError';
import { Prisma } from '@prisma/client';


export class CreateCoordenadorUseCase {
    async execute({nome, email, telefone, dataNascimento, salario, endereco, instrumentosLeciona }:CreateCoordenadorDTO) : Promise<Coordenador | null>{

        //verificar se nome é nulo ou se tem caracteres proibidos

        //verificar se email existe no banco de dados
        const coordenadorAlreadyExists = await prisma.coordenador.findUnique({
            where: {
                email: email,
            }
        })
        if (coordenadorAlreadyExists){
            //erro
            throw new AppError("Coordenador já existe no bd");
        }

        //verificar se data de nascimento é nula ou verificar formato
        // Para DateTime verificar https://github.com/prisma/prisma-client-js/issues/658 deve-se usar ISO 8601 - 2020-05-04T14:05:23Z

        //verificar se salario é número


        //variáveis para retornar endereço
        const rua = endereco.rua;
        const numero = endereco.numero; 
        const complemento = endereco.complemento;
        const bairro = endereco.bairro;
        const cidade = endereco.cidade;
        const CEP = endereco.CEP;
        
        //verificar se endereço é válido

        //variáveis relativas a turma
        
        // selecionar ou criar instrumentos
               
       


        let coordenador: Prisma.CoordenadorCreateInput

        coordenador = {
            nome,
            email,
            telefone,
            dataNascimento,
            salario,
            endereco: {  
                create: {
                    rua: rua,
                    numero: numero,
                    complemento: complemento,
                    bairro: bairro,
                    cidade: cidade,
                    CEP: CEP,
                },                 
            },
            // instrumentosLeciona: {
            //     connectOrCreate: {
            //         where: {nomeInstrumento: instrumentoLeciona},
            //         create: {
            //             nomeInstrumento: instrumentoLeciona
            //         },
            //     } ,         
            // },                
        }

        const createCoordenador = await prisma.coordenador.create({
            data: coordenador
        });

        let coordenadorUpdate;
        

        // instrumentosLeciona.forEach(async (instrumento) => {
        //     await prisma.coordenador.update({
        //         where: {email: email},
        //         data: {
        //             instrumentosLeciona: {
        //                 connectOrCreate: {
        //                     where: {nomeInstrumento: instrumento},
        //                     create: {nomeInstrumento: instrumento},
        //                 },
        //             }
        //         }
        //     })
        // })

        for ( const instrumento of instrumentosLeciona ){
            coordenadorUpdate = await prisma.coordenador.update({
                where: {email: email},
                data: {
                    instrumentosLeciona: {
                        connectOrCreate: {
                            where: {nomeInstrumento: instrumento},
                            create: {nomeInstrumento: instrumento},
                        },
                    }
                }
            })
        }


        //retorna coordenador
        const result = await prisma.coordenador.findUnique({
            where: {
                email: email
            },
        })
        
        return result
    }
}