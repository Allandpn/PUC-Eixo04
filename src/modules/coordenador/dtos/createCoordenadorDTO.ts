import { Turma, Endereco, TiposDeInstrumento } from "@prisma/client";


export interface CreateCoordenadorDTO{
    nome: string,
    email: string,
    telefone: string,
    dataNascimento: Date,
    salario: number;
    endereco: Endereco;
    instrumentosLeciona: string[];
}