import { apiBase } from "./api.js";

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

export const getInstrumentoId = async (id) => {
  try {
    const response = await apiBase.get(`api/instrumento/${id}`);
    if (response.status >= 200 || response.status < 300) {
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar instrumento", error);
    throw error;
  }
};

export const getInstrumentosComEmprestimos = async () => {
  try {
    const response = await apiBase.get("api/instrumento/emprestimo");
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

export const postInstrumentoApi = async (formData) => {
  try {
    console.log(formData);
    const response = await apiBase.post("api/instrumento", formData);
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

export const postEmprestimoIntrumentoApi = async (formData) => {
  try {
    //console.log(formData.instrumentoId);
    //console.log(formData[0].isEmprestado);Number(formData.instrumentoId)
    var instrumento = await getInstrumentoId(Number(formData.instrumentoId));

    console.log(instrumento);

    if (!instrumento.isEmprestado) {
      const response = await apiBase.post("api/emprestimo", formData);
      if (response.status >= 200 || response.status < 300) {
        return response.data;
      } else {
        console.log("Erro de status, valor retornado acima de 300");
        return response.data;
      }
    } else {
      return -1;
    }
  } catch (error) {
    console.error("Erro ao criar empréstimo: ", error);
  }
};
