import { Endereco } from "@prisma/client";

export interface CreateAlunoDTO {
    nome: string,
    email: string,
    telefone: string,
    dataNascimento: Date,
    endereco: Endereco,
    dataAdmissao: Date,
    nomeResponsavel: string,
    
}