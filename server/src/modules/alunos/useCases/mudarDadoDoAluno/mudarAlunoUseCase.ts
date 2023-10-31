import { prisma } from "../../../../prisma/client";
import { MudarAlunoDTO, MudarAlunoPayload } from "../../dtos/MudarAlunoDTO";

export class MudarAlunoUseCase {
  async execute({ nome, email, telefone, dataNascimento, endereco, dataAdmissao, nomeResponsavel, alunoId }: MudarAlunoDTO): Promise<void> {

    const payload: MudarAlunoPayload = {
      nome, email, telefone, dataNascimento, endereco, dataAdmissao, nomeResponsavel,
    }

    const data = JSON.parse(JSON.stringify(payload));

    const aluno = await prisma.aluno.update({
      where: { id: alunoId },
      data: { ...data }
    })
    return
  }

}

