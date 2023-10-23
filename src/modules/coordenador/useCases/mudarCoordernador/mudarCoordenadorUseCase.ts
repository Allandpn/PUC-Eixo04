import { prisma } from "../../../../prisma/client";
import { MudarCoordenadorDTO, MudarCoordenadorPayload } from "../../dtos/mudarCoordenadorDTO";

export class MudarCoordenadorUseCase {
  async execute({ nome, email, telefone, dataNascimento, salario, endereco, instrumentoLeciona, coordenadorId }: MudarCoordenadorDTO): Promise<void> {
    const payload: MudarCoordenadorPayload = { nome, email, telefone, dataNascimento, salario, endereco, instrumentoLeciona }
    const data = JSON.parse(JSON.stringify(payload));
    await prisma.coordenador.update({
      where: { id: coordenadorId },
      data: { ...data }
    })
  }
}