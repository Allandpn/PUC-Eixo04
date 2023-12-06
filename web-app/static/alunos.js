import {
  getInstrumentosComEmprestimos,
  postInstrumentoApi,
  postEmprestimoIntrumentoApi,
} from "./instrumentosAPI.js";
import { getAlunos, getAlunoId } from "./alunosAPI.js";
import {
  getEmprestimoIdInstrumento,
  getEmprestimos,
  patchDevolverEmprestimo,
} from "./emprestimosAPI.js";
import { getUnidades } from "./unidadesAPI.js";
import { getTurmas, postCriarTurmaApi } from "./turmaAPI.js";

const fetchData = async () => {
  try {
    const turmas = getTurmas();
    const instrumentosComEmprestimos = await getInstrumentosComEmprestimos();
    const emprestimos = await getEmprestimos();
    const alunos = await getAlunos();
    const unidades = await getUnidades();
    //console.log(JSON.stringify(instrumentosComEmprestimos));
    return [instrumentosComEmprestimos, emprestimos, alunos, unidades, turmas];
  } catch (error) {
    console.error("Error fetching instrumentos", error);
  }
};

var dataInstrumentosComEmprestimos = {};
var emprestimos = {};
var alunos = {};
var unidades = {};
var turmas = {};

async function GetDataAndPopulateTable() {
  try {
    const [result, getEmprestimos, getAlunos, getUnidades, getTurmas] =
      await fetchData();
    //console.log(result);
    //console.log(result[0].emprestimoInstrumento);

    //console.log(result[0].emprestimoInstrumento.length);

    //console.log(dataInstrumentosComEmprestimos);
    unidades = getUnidades;
    alunos = getAlunos;
    emprestimos = getEmprestimos;
    turmas = getTurmas;
    dataInstrumentosComEmprestimos = result;

    populaTableAlunos(alunos, turmas);
  } catch (error) {
    console.error("Error get data and populate table", error);
  }
}

async function InserDataPageHtml() {
  try {
    await GetDataAndPopulateTable();

    //scriptJS();
  } catch (error) {
    console.error("Error get data and populate table", error);
  }
}

InserDataPageHtml();

function populaTableAlunos(alunos, turmas) {
  var tabela = document.querySelector("#table-alunos");

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

    registro +=
      /*html*/
      `<tr>
            <td>${alunos[i].id}</td>
            <td>${alunos[i].nome}</td>
            <td>Violão Básico I - Belo Horizonte</td>
            <td>Violão</td>
            <td>12/05/21</td>
            <td>
              <i class="fa fa-check text-info" aria-hidden="true"></i>
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
