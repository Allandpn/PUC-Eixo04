import {
  getInstrumentosComEmprestimos,
  postInstrumentoApi,
  postEmprestimoIntrumentoApi,
  getInstrumentos,
} from "./instrumentosAPI.js";
import { getAlunos, getAlunoId, postCreateAlunoApi } from "./alunosAPI.js";
import {
  getEmprestimoIdInstrumento,
  getEmprestimos,
  patchDevolverEmprestimo,
} from "./emprestimosAPI.js";
import { getUnidades } from "./unidadesAPI.js";
import { getTurmas, postCriarTurmaApi } from "./turmaAPI.js";
import { getCursos } from "./cursosAPI.js";
import { getEnderecos } from "./enderecosAPI.js";
import { getContribuicoes } from "./contribuicoesAPI.js";

var dataInstrumentosComEmprestimos = {};
var emprestimos = {};
var alunos = {};
var unidades = {};
var turmas = {};
var cursos = {};
var enderecos = {};
var instrumentos = {};
var contribuicoes = {};

const fetchData = async () => {
  try {
    let turmasFetch;
    getTurmas()
      .then((data) => {
        turmasFetch = data;
        //console.log(turmasFetch);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    let cursosFetch;
    getCursos()
      .then((data) => {
        cursosFetch = data;
        //console.log(turmasFetch);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    let enderecosFetch;
    getEnderecos()
      .then((data) => {
        enderecosFetch = data;
        //console.log(enderecosFetch);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    let instrumentosFetch;
    getInstrumentos()
      .then((data) => {
        instrumentosFetch = data;
        //console.log(enderecosFetch);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    let contribuicoesFetch;
    getContribuicoes()
      .then((data) => {
        contribuicoesFetch = data;
        //console.log(enderecosFetch);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const instrumentosComEmprestimos = await getInstrumentosComEmprestimos();
    const emprestimos = await getEmprestimos();
    const alunos = await getAlunos();
    const unidades = await getUnidades();
    //console.log(JSON.stringify(instrumentosComEmprestimos));
    return [
      instrumentosComEmprestimos,
      emprestimos,
      alunos,
      unidades,
      turmasFetch,
      cursosFetch,
      enderecosFetch,
      instrumentosFetch,
      contribuicoesFetch,
    ];
  } catch (error) {
    console.error("Error fetching instrumentos", error);
  }
};

async function GetDataAndPopulateTable() {
  try {
    const [
      result,
      getEmprestimos,
      getAlunos,
      getUnidades,
      getTurmas,
      getCursos,
      getEnderecos,
      getInstrumentos,
      getContribuicoes,
    ] = await fetchData();
    //console.log(result);
    //console.log(result[0].emprestimoInstrumento);

    //console.log(result[0].emprestimoInstrumento.length);

    //console.log(dataInstrumentosComEmprestimos);
    unidades = getUnidades;
    alunos = getAlunos;
    emprestimos = getEmprestimos;
    turmas = getTurmas;
    cursos = getCursos;
    enderecos = getEnderecos;
    instrumentos = getInstrumentos;
    //console.log(turmas);
    //await mapeiaPromiseTurmas(turmasPromise);
    dataInstrumentosComEmprestimos = result;
    contribuicoes = getContribuicoes;

    populaTableAlunos(alunos, turmas, cursos);
  } catch (error) {
    console.error("Error get data and populate table", error);
  }
}

async function InserDataPageHtml() {
  try {
    await GetDataAndPopulateTable();

    scriptJS();
  } catch (error) {
    console.error("Error get data and populate table", error);
  }
}

InserDataPageHtml();

function populaTableAlunos(alunos, turmas, cursos) {
  var tabela = document.querySelector("#table-alunos");
  //console.log(cursos);

  var registro =
    /*html*/
    `<table class="table table-hover" id="table-alunos">
        <thead class="bg-gray">
            <tr>
                <th scope="col"><span class="mr-3 ">Matricula</span><a href="#" ><i class="fa fa-sort text-muted" aria-hidden="true"></i></a></th>
                <th scope="col"><span class="mr-3 ">Nome</span><a href="#" ><i class="fa fa-sort text-muted" aria-hidden="true"></i></a></th>
                <th scope="col"><span class="mr-3 ">Turma</span><a href="#"><i class="fa fa-sort text-muted mr-0" aria-hidden="true"></i></a></th>
                <th scope="col"><span class="mr-3 ">Instrumento</span><a href="#"><i class="fa fa-sort text-muted" aria-hidden="true"></i></a></th>
                <th scope="col"><span class="mr-3 ">Data de Início</span><a href="#"><i class="fa fa-sort text-muted" aria-hidden="true"></i></a></th>
                <th scope="col"><span class="mr-3 ">Ativo</span><a href="#"><i class="fa fa-sort text-muted" aria-hidden="true"></i></a></th>
                <th scope="col"><span class="mr-3 ">Info</span><a href="#"><i class="fa fa-sort text-muted" aria-hidden="true"></i></a></th>  
            </tr>
        </thead>
        <tbody>`;

  for (let i in alunos) {
    //apresentação de turma do aluno ou valor vazio " - "
    var turmaAluno;
    var instrumentoAluno;
    //console.log(alunos[i].turmaId);

    //popula turma do aluno e instrumento da turma
    if (alunos[i].turmaId !== null || undefined || "") {
      turmaAluno = turmas[alunos[i].turmaId - 1].nome;
      instrumentoAluno =
        cursos[turmas[alunos[i].turmaId - 1].cursoId - 1].instrumentosCursoNome;
      //console.log(instrumentoAluno);
    } else {
      turmaAluno = " - ";
      instrumentoAluno = " - ";
    }

    //popula campo de data de admissão
    var dataAdmissao;
    if (alunos[i].dataAdmissao !== null || undefined || "") {
      const dataAdmissaoObjeto = new Date(alunos[i].dataAdmissao);
      dataAdmissao = dataAdmissaoObjeto.toLocaleDateString("pt-br", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });
    } else {
      dataAdmissao = " - ";
    }

    var isAtivo;
    if (alunos[i].dataDesligamento == null || undefined || "") {
      isAtivo = `<i class="fa fa-check text-info" aria-hidden="true"></i>`;
    } else {
      dataAdmissao = " - ";
    }

    registro +=
      /*html*/
      `<tr>
            <td>${alunos[i].id}</td>
            <td>${alunos[i].nome}</td>
            <td>${turmaAluno}</td>
            <td>${instrumentoAluno}</td>
            <td>${dataAdmissao}</td>
            <td>
            ${isAtivo}
            </td>
            <td>
              <a
                href="#"
                class="open-info-aluno toogle-hide ml-auto"
                data-element="#dataInfoAluno"
              >
                <i
                  class="bx bx-file-find text-info mt-auto"
                  style="font-size: 1.75rem"
                ></i>
              </a>
            </td>
          </tr>`;
  }

  registro +=
    /*html*/
    `
    </tbody>
    </table>;
    `;

  tabela.innerHTML = registro;
}

//Função de adicionar aluno
//Adiciona função ao submit do form
document
  .getElementById("post-add-aluno-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Convert FormData to a JSON object
    const formDataJSON = {
      nome: formData.get("nome-modal"),
      dataNascimento: formData.get("dataNascimento-modal"),
      email: formData.get("emailAluno-modal"),
      endereco: {
        rua: formData.get("ruaEndereco-modal"),
        numero: formData.get("nroEndereco-modal"),
        complemento: formData.get("nroComplementoEndereco-modal"),
        bairro: formData.get("bairroEndereco-modal"),
        cidade: formData.get("cidadeEndereco-modal"),
        CEP: formData.get("cepEndereco-modal"),
      },
      telefone: formData.get("telefoneAluno-modal"),
      nomeResponsavel: formData.get("nomeResponsavel-modal"),
      telefoneResponsavel: formData.get("telefoneResponsavel-modal"),
      emailResponsavel: formData.get("emailResponsavel-modal"),
      turmaId: formData.get("turmaAluno-modal"),
      dataAdmissao: formData.get("dataMatricula-modal"),
      anotacoesAluno: formData.get("anotacoesAluno-modal"),
    };

    try {
      const responseData = await postCreateAlunoApi(formDataJSON);
      console.log("Response: ", responseData);
    } catch (error) {
      console.log("Error: ", error);
    }
  });

// ----------- TELA DETALHE ALUNO MODAL --------------

function scriptJS() {
  // exibe tabela com informacoes do membro da equipe selecionado
  $(".open-info-aluno").click(function (e) {
    e.preventDefault();
    const el = $(this).data("element");
    //console.log(el);
    $(el).toggle();
    if ($(el).is(":visible")) {
      var td = e.target.parentNode.parentNode.parentNode; //.parentNode.parentNode.parentNode;
      var id = td.children[0].textContent;
      PopulateTableSelect(id);
    }
  });
}

// Popula tabela com os dados do aluno selecionado
function PopulateTableSelect(id) {
  var dadosAlunos;
  var dadosAlunosEndereco;
  var dadosAlunosEmprestimo = [];
  var dadosAlunosContribuicoes = [];

  alunos.forEach((e) => {
    if (e.id == id) {
      dadosAlunos = e;
    }
  });

  enderecos.forEach((e) => {
    if (e.alunoId == id) {
      dadosAlunosEndereco = e;
    }
  });

  emprestimos.forEach((e) => {
    console.log(e.alunoId);
    if (e.alunoId == id) {
      //console.log(e);
      dadosAlunosEmprestimo.push(e);
    }
  });

  contribuicoes.forEach((e) => {
    if (e.alunoId == id) {
      console.log(e);
      dadosAlunosContribuicoes.push(e);
    }
  });
  //console.log(dadosAlunosContribuicoes);

  //console.log(dadosAlunos);
  document.getElementById("nomeAluno-modal-selecao").value = dadosAlunos.nome;
  document.getElementById("dataNascimento-modal-selecao").value = new Date(
    dadosAlunos.dataNascimento
  ).toLocaleDateString("pt-br", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const enderecoString =
    "Rua: " +
    dadosAlunosEndereco.rua +
    ", nro. " +
    dadosAlunosEndereco.numero +
    ", complemento: " +
    dadosAlunosEndereco.complemento +
    ", Bairro: " +
    dadosAlunosEndereco.bairro +
    ", Cidade: " +
    dadosAlunosEndereco.cidade +
    ", CEP: " +
    dadosAlunosEndereco.CEP;

  document.getElementById("enderecoAluno-modal-selecao").value = enderecoString;
  document.getElementById("email-modal-selecao").value = dadosAlunos.email;
  document.getElementById("telefone-modal-selecao").value =
    dadosAlunos.telefone;

  if (dadosAlunos.nomeResponsavel !== null || "" || undefined) {
    document.getElementById("nomeResponsavel-modal-selecao").value =
      dadosAlunos.nomeResponsavel;
  }
  if (dadosAlunos.telefoneResponsavel !== null || "" || undefined) {
    document.getElementById("telefoneResponsavel-modal-selecao").value =
      dadosAlunos.tefefoneResponsavel;
  }
  if (dadosAlunos.emailResponsavel !== null || "" || undefined) {
    document.getElementById("emailResponsavel-modal-selecao").value =
      dadosAlunos.emailResponsavel;
  }

  var turmaAlunoModal;
  var instrumentoAlunoModal;
  if (dadosAlunos.turmaId !== null || undefined || "") {
    turmaAlunoModal = turmas[dadosAlunos.turmaId - 1].nome;
    instrumentoAlunoModal =
      cursos[turmas[dadosAlunos.turmaId - 1].cursoId - 1].instrumentosCursoNome;
  } else {
    turmaAlunoModal = " - ";
    instrumentoAlunoModal = " - ";
  }
  document.getElementById("turmaAluno-modal-selecao").value = turmaAlunoModal;
  document.getElementById("instrumentoAluno-modal-selecao").value =
    instrumentoAlunoModal;

  document.getElementById("dataMatricula-modal-selecao").value = new Date(
    dadosAlunos.dataAdmissao
  ).toLocaleDateString("pt-br", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  var tabela = document.querySelector(
    "#tabela-emprestimos-alunos-modal-selecao-body"
  );
  //console.log(tabela);
  var registro = "";

  dadosAlunosEmprestimo.forEach((e) => {
    //console.log(e);

    let inicioEmprestimo;
    if (e.dataInicialEmprestimo !== null || undefined) {
      inicioEmprestimo = new Date(e.dataInicialEmprestimo).toLocaleDateString(
        "pt-br",
        {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }
      );
    } else {
      inicioEmprestimo = " - ";
    }
    //console.log(inicioEmprestimo);

    let finalEmprestimo;
    if (e.dataFinalEmprestimo !== null || undefined) {
      finalEmprestimo = new Date(e.dataFinalEmprestimo).toLocaleDateString(
        "pt-br",
        {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }
      );
    } else {
      finalEmprestimo = " - ";
    }
    //console.log(finalEmprestimo);
    //console.log(instrumentos);

    registro += `
            <tr>                            
                <td>${instrumentos[e.instrumentoId - 1].nomeInstrumento}</td>
                <td> ${e.instrumentoId} </td>                          
                <td>${inicioEmprestimo}</td>
                <td> ${finalEmprestimo} </td> 
            </tr>
            `;
  });

  tabela.innerHTML = registro;

  var tabelaContribuicoes = document.querySelector(
    "#tabela-emprestimos-alunos-modal-selecao-contribuicao"
  );
  console.log(tabelaContribuicoes);
  var registroContribuição = "";

  dadosAlunosContribuicoes.forEach((e) => {
    console.log(e);

    let dataContribuicaoModal;
    if (e.dataContribuicao !== null || undefined) {
      dataContribuicaoModal = new Date(e.dataContribuicao).toLocaleDateString(
        "pt-br",
        {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }
      );
    } else {
      dataContribuicaoModal = " - ";
    }

    registroContribuição += `
            <tr>                            
                <td>${e.valorContribuicao}</td>
                <td> ${dataContribuicaoModal} </td>                                           
            </tr>
            `;
  });

  tabelaContribuicoes.innerHTML = registroContribuição;

  if (dadosAlunos.anotacoesAluno !== null || "" || undefined) {
    document.getElementById("anotacoesAluno-modal-selecao").value =
      dadosAlunos.anotacoesAluno;
  }

  let dataDesligamentoModal;
  if (dadosAlunos.dataDesligamento !== null || undefined) {
    dataDesligamentoModal = new Date(
      dadosAlunos.anotacoesAluno
    ).toLocaleDateString("pt-br", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } else {
    dataDesligamentoModal = " - ";
  }

  document.getElementById("dataDesligamento-modal-selecao").value =
    dataDesligamentoModal;
}
