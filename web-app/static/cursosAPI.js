import { apiBase } from "./api.js";

export const getCursos = async () => {
  try {
    const response = await apiBase.get("api/curso");
    if (response.status >= 200 || response.status < 300) {
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar alunos", error);
    throw error;
  }
};
