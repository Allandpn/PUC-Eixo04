import { Endereco } from "@prisma/client";

export interface CreateUnidadeDTO{
    nome: string,
    endereco: Endereco
}