import {
  getInstrumentosComEmprestimos,
  postInstrumentoApi,
  postEmprestimoIntrumentoApi,
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

var dataInstrumentosComEmprestimos = {};
var emprestimos = {};
var alunos = {};
var unidades = {};
var turmas = {};
var cursos = {};

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
    //console.log(turmas);
    //await mapeiaPromiseTurmas(turmasPromise);
    dataInstrumentosComEmprestimos = result;

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
  console.log(cursos);

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
      console.log(instrumentoAluno);
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
    console.log(el);
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
  var dadosinstrumento;
  dataInstrumentosComEmprestimos.forEach((e) => {
    if (e.id == id) {
      dadosinstrumento = e;
    }
  });
  console.log(dadosinstrumento);
  document.getElementById("codigoInstrumento").value = dadosinstrumento.id;
  document.getElementById("nomeInstrumento").value =
    dadosinstrumento.nomeInstrumento;
  document.getElementById("marcaInstrumento").value =
    dadosinstrumento.marcaInstrumento;
  document.getElementById("estadoConserv-e").value =
    dadosinstrumento.estadoConservacaoDoInstrumento;
  document.getElementById("unidadeAcervo-e").value =
    unidades[dadosinstrumento.unidadeId - 1].nome;

  var emprestimos = dadosinstrumento.emprestimoInstrumento;
  var tabela = document.querySelector(".tabela-instrumento-historico");
  var registro = "";

  emprestimos.forEach((e) => {
    registro += `
            <tr>                            
                <td>${e.dataInicialEmprestimo}</td>
                <td> - </td>                          
                <td>${e.dataFinalEmprestimo}</td>
                <td> - </td> 
            </tr>
            `;
  });

  tabela.innerHTML = registro;
}
