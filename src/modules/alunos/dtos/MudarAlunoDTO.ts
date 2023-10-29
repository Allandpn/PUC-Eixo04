import { Endereco } from "@prisma/client";

export interface MudarAlunoDTO {
  nome?: string,
  email?: string,
  telefone?: string,
  dataNascimento?: Date,
  endereco?: Endereco,
  dataAdmissao?: Date,
  nomeResponsavel?: string,
  alunoId: number
}

export interface MudarAlunoPayload {
  nome?: string,
  email?: string,
  telefone?: string,
  dataNascimento?: Date,
  endereco?: Endereco,
  dataAdmissao?: Date,
  nomeResponsavel?: string,
}