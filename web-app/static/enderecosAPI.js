import { apiBase } from "./api.js";

export const getEnderecos = async () => {
  try {
    const response = await apiBase.get(`api/endereco`);
    if (response.status >= 200 || response.status < 300) {
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar enderecos", error);
    throw error;
  }
};
