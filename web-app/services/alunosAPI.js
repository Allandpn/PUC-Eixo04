import { apiBase } from "./api";

export const getAlunoId = async (id) => {
  try {
    const response = await apiBase.get(`api/aluno/${id}`);
    if (response.status >= 200 || response.status < 300) {
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar instrumentos", error);
    throw error;
  }
};
