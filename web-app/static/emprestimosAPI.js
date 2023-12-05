import { apiBase } from "./api.js";

export const getEmprestimoIdInstrumento = async (idInstrumento) => {
  try {
    const response = await apiBase.get(`api/emprestimo/${idInstrumento}`);
    if (response.status >= 200 || response.status < 300) {
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar emprestimo", error);
    throw error;
  }
};

export const getEmprestimos = async () => {
  try {
    const response = await apiBase.get(`api/emprestimo`);
    if (response.status >= 200 || response.status < 300) {
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar emprestimo", error);
    throw error;
  }
};
