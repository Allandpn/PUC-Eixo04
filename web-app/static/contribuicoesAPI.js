import { apiBase } from "./api.js";

export const getContribuicoes = async () => {
  try {
    const response = await apiBase.get(`api/contribuicao`);
    if (response.status >= 200 || response.status < 300) {
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar enderecos", error);
    throw error;
  }
};
