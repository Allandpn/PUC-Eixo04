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

export const patchDevolverEmprestimo = async (formData) => {
  try {
    console.log(formData);
    const response = await apiBase.patch("api/emprestimo", formData);
    if (response.status >= 200 || response.status < 300) {
      return response.data;
    } else {
      console.log("Erro de status, valor retornado acima de 300");
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao devolver instrumento", error);
    throw error;
  }
};
