import { Endereco } from "@prisma/client";

export interface MudarCoordenadorDTO {
  nome?: string,
  email?: string,
  telefone?: string,
  dataNascimento?: Date,
  salario?: number;
  endereco?: Endereco;
  instrumentoLeciona?: string;
  coordenadorId: number
}

export interface MudarCoordenadorPayload {
  nome?: string,
  email?: string,
  telefone?: string,
  dataNascimento?: Date,
  salario?: number;
  endereco?: Endereco;
  instrumentoLeciona?: string;
}