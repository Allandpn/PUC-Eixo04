import { apiBase } from "./api.js";

export const getTurmas = async () => {
  try {
    const response = await apiBase.get(`api/turma`);
    if (response.status >= 200 || response.status < 300) {
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar aluno", error);
    throw error;
  }
};

export const postCriarTurmaApi = async (formData) => {
  try {
    //console.log(formData);
    const response = await apiBase.post("api/turma", formData);
    if (response.status >= 200 || response.status < 300) {
      return response.data;
    } else {
      console.log("Erro de status, valor retornado acima de 300");
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar instrumentos", error);
    throw error;
  }
};
