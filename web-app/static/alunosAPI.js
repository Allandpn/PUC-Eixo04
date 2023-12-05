import { apiBase } from "./api.js";

export const getAlunoId = async (id) => {
  try {
    const response = await apiBase.get(`api/aluno/${id}`);
    if (response.status >= 200 || response.status < 300) {
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar aluno", error);
    throw error;
  }
};

export const getAlunos = async () => {
  try {
    const response = await apiBase.get("api/aluno");
    if (response.status >= 200 || response.status < 300) {
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar alunos", error);
    throw error;
  }
};
