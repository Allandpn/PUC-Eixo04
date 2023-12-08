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

export const postCreateAlunoApi = async (formData) => {
  try {
    //console.log(formData);
    // transforma turmaId de string para nro
    if (formData.turmaId == 0) {
      formData.turmaId = null;
    } else {
      formData.turmaId = Number(formData.turmaId);
    }

    // transforma data em ISO
    console.log(formData.dataAdmissao);
    if (formData.dataAdmissao !== null || 0 || "" || undefined) {
      const dataAdmissaoObjeto = new Date(formData.dataAdmissao);
      const dataAdmissaoISO = dataAdmissaoObjeto.toISOString();
      formData.dataAdmissao = dataAdmissaoISO;
    } else {
      formData.dataAdmissao = null;
    }

    const dataNascimentoObjeto = new Date(formData.dataNascimento);
    const dataNascimentoISO = dataNascimentoObjeto.toISOString();
    formData.dataNascimento = dataNascimentoISO;

    console.log(formData);

    const response = await apiBase.post("api/aluno", formData);
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
