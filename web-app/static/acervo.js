import { getAlunoId } from "../services/alunosAPI";

const alunoId = await getAlunoId(1);

export { alunoId };
