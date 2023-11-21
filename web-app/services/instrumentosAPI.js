import { apiBase } from "./api";

export const getInstrumentos = async () => {
  try {
    const response = await apiBase.get("api/instrumento");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar instrumentos", error);
    throw error;
  }
};

export const getInstrumentosComEmprestimos = async () => {
  try {
    const response = await apiBase.get("api/instrumento/emprestimo");
    if (response.status >= 200 || response.status < 300) {
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar instrumentos", error);
    throw error;
  }
};
