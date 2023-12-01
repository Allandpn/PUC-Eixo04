import {
  getInstrumentosComEmprestimos,
  postInstrumentoApi,
} from "./instrumentosAPI.js";
import { getAlunos, getAlunoId } from "./alunosAPI.js";

const fetchAlunos = async () => {
  try {
    const alunos = await getAlunos();
    //console.log(JSON.stringify(alunos));
    return alunos;
  } catch (error) {
    console.error("Error fetching alunos", error);
  }
};
//Popula variável com nome de alunos
var alunos = await fetchAlunos();

//Retorna o nome do aluno com base na variável global que armazena os alunos
function retornaNomeAluno(id) {
  for (let i in alunos) {
    //console.log(alunos[i].id);
    if (alunos[i].id == id) {
      return alunos[i].nome;
    }
  }
}

const fetchData = async () => {
  try {
    const instrumentosComEmprestimos = await getInstrumentosComEmprestimos();
    //console.log(JSON.stringify(instrumentosComEmprestimos));
    return instrumentosComEmprestimos;
  } catch (error) {
    console.error("Error fetching instrumentos", error);
  }
};

async function GetDataAndPopulateTable() {
  try {
    const result = await fetchData();
    //console.log(result);
    //console.log(result[0].emprestimoInstrumento);

    //console.log(result[0].emprestimoInstrumento.length);
    PopulateTable(result);
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

function PopulateTable(dados) {
  var tabela = document.querySelector("#tabela-instrumentos-geral");

  var registro =
    /*html*/
    `<table class="table table-hover">
        <thead class="bg-gray">
            <tr>
                <th scope="col"><span class="mr-3 ">Cód.</span><a href="#" ><i class="fa fa-sm fa-sort text-muted" aria-hidden="true"></i></a></th>
                <th scope="col"><span class="mr-3 ">Instrumento</span><a href="#" ><i class="fa fa-sm fa-sort text-muted" aria-hidden="true"></i></a></th>
                <th scope="col"><span class="mr-3 ">Marca</span><a href="#"><i class="fa fa-sm fa-sort text-muted mr-0" aria-hidden="true"></i></a></th>
                <th scope="col"><span class="mr-3 ">Emprestado</span><a href="#"><i class="fa fa-sm fa-sort text-muted" aria-hidden="true"></i></a></th>
                <th scope="col"><span class="mr-3 ">Unidade Responsável</span><a href="#"><i class="fa fa-sm fa-sort text-muted" aria-hidden="true"></i></a></th>
                <th scope="col"><span class="mr-3 ">Data Empr.</span><a href="#"><i class="fa fa-sm fa-sort text-muted" aria-hidden="true"></i></a></th>
                <th scope="col"><span class="mr-3 ">Aluno</span><a href="#"><i class="fa fa-sm fa-sort text-muted" aria-hidden="true"></i></a></th>
								<th scope="col"><span class="mr-3 ">Info</span><a href="#"><i class="fa fa-sm fa-sort text-muted" aria-hidden="true"></i></a></th>
						</tr>
        </thead>
        <tbody>`;

  for (let i in dados) {
    //console.log(!(dados[i].emprestimoInstrumento == "" || undefined || null));

    var isEmprestimo = "";
    // O correto é essa validação ser dados[i].isEmprestado == true, porém no bd não foi seguida essa ordem
    if (!(dados[i].emprestimoInstrumento == "" || undefined || null)) {
      isEmprestimo = "<i class='fa fa-check text-info' aria-hidden='true'></i>";
    } else {
      isEmprestimo = " - ";
    }

    var dataEmp = "";
    if (dados[i].emprestimoInstrumento.length != 0) {
      // console.log(
      //   dados[i].emprestimoInstrumento[
      //     dados[i].emprestimoInstrumento.length - 1
      //   ].dataInicialEmprestimo
      // );
      dataEmp =
        dados[i].emprestimoInstrumento[
          dados[i].emprestimoInstrumento.length - 1
        ].dataInicialEmprestimo;
    } else {
      dataEmp = " - ";
    }

    var alunoEmp = "";
    if (!(dados[i].emprestimoInstrumento == "" || undefined || null)) {
      alunoEmp =
        dados[i].emprestimoInstrumento[
          dados[i].emprestimoInstrumento.length - 1
        ].alunoId;
      alunoEmp = retornaNomeAluno(alunoEmp);
    } else {
      alunoEmp = " - ";
    }

    registro +=
      /*html*/
      `
            <tr>                            
                <td>${dados[i].id}</td>
                <td>${dados[i].nomeInstrumento}</td>                              
                <td>${dados[i].marcaInstrumento}</td>                             
                <td>${isEmprestimo}</td>
                <td>${dados[i].unidadeId}</td> 
                <td>${dataEmp}</td>
                <td>${alunoEmp}</td>                          
                <td> 
                    <a href="#" class="open-info-instrumento toogle-hide ml-auto" data-element="#dataInfoInstrumento" value="${i.id}"><i class='bx bx-file-find text-info mt-auto' style="font-size: 1.75rem"></i></a>                                 
                </td>
            </tr>
            `;
  }

  registro +=
    /*html*/
    `</tbody>
  		</table>`;

  tabela.innerHTML = registro;
}

// ----------- TELA INSTRUMENTO --------------

// exibe modal com cadastro instrumento
function scriptJS() {
  $(".btn-add-instrumento").click(function (e) {
    e.preventDefault();
    const el = $(this).data("element");
    $(el).toggle();
  });

  // exibe tabela com informacoes do membro da equipe selecionado
  $(".open-info-instrumento").click(function (e) {
    e.preventDefault();
    const el = $(this).data("element");
    $(el).toggle();
    if ($(el).is(":visible")) {
      console.log("visibel");
      PopulateTableSelect();
    }
  });

  // exibe modal com cadastro emprestimo
  $(".btn-emp-instrumento").click(function (e) {
    e.preventDefault();
    const el = $(this).data("element");
    $(el).toggle();
  });

  // exibe modal com devolucao instrumento
  $(".btn-dev-instrumento").click(function (e) {
    e.preventDefault();
    const el = $(this).data("element");
    $(el).toggle();
  });
}

//Função de adicionar instrumento
//Adiciona função ao submit do form
document
  .getElementById("post-Instrumento-Form")
  .addEventListener("submit", async function (e) {
    //e.preventDefault();

    const formData = new FormData(e.target);

    // Convert FormData to a JSON object
    const formDataJSON = {};
    formData.forEach((value, key) => {
      formDataJSON[key] = value;
    });

    formDataJSON.unidadeId = Number(formDataJSON.unidadeId);

    //console.log(formDataJSON);

    try {
      const responseData = await postInstrumentoApi(formDataJSON);
      console.log("Response: ", responseData);
    } catch (error) {
      console.log("Error: ", error);
    }
  });
