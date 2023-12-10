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



const fetchAlunos = async () => {
  try {
    const alunos = await getAlunos();
    //console.log(JSON.stringify(alunos));
    return alunos;
  } catch (error) {
    console.error("Error fetching alunos", error);
  }
};

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
    const emprestimos = await getEmprestimos();
    const alunos = await getAlunos();
    const unidades = await getUnidades();
    //console.log(JSON.stringify(instrumentosComEmprestimos));
    return [instrumentosComEmprestimos, emprestimos, alunos, unidades];
  } catch (error) {
    console.error("Error fetching instrumentos", error);
  }
};

var dataInstrumentosComEmprestimos = {};
var emprestimosDB = {};
var alunos = {};
var unidades = {};



async function GetDataAndPopulateTable() {
  try {
    const [result, getEmprestimos, getAlunos, getUnidades] = await fetchData();
   
    unidades = getUnidades;
    alunos = getAlunos;
    emprestimosDB = getEmprestimos;
    dataInstrumentosComEmprestimos = result;
    PopulateTable(result, unidades);
    listaIdInstrumentos(result);
    updateFieldInstrumentos(result);
  } catch (error) {
    console.error("Error get data and populate table", error);
  }
  // console.log(emprestimosDB)
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

// ----------- TELA INSTRUMENTO --------------

function PopulateTable(dados, unidades) {
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
    if (dados[i].isEmprestado == true) {
      isEmprestimo = "<i class='fa fa-check text-info' aria-hidden='true'></i>";
    } else {
      isEmprestimo = " - ";
    }

    var dataEmp = " - ";
    var alunoEmp = " - ";
    let emprestimos = dados[i].emprestimoInstrumento
    emprestimos.forEach(e => {
      if(!e.dataFinalEmprestimo){
        dataEmp = formatDate(e.dataInicialEmprestimo)
        alunoEmp = retornaNomeAluno(e.alunoId)
      } else {
        dataEmp = " - ";
        alunoEmp = " - "
      }
    });
    
    // if (dados[i].emprestimoInstrumento.length != 0) {
    //   // console.log(
    //   //   dados[i].emprestimoInstrumento[
    //   //     dados[i].emprestimoInstrumento.length - 1
    //   //   ].dataInicialEmprestimo
    //   // );
    //   var dataString =
    //     dados[i].emprestimoInstrumento[
    //       dados[i].emprestimoInstrumento.length - 1
    //     ].dataInicialEmprestimo;

    //   var dataObjeto = new Date(dataString);
    //   dataEmp = dataObjeto.toLocaleDateString("pt-br", {
    //     day: "numeric",
    //     month: "numeric",
    //     year: "numeric",
    //   });
    // } else {
    //   dataEmp = " - ";
    // }

    
    // if (!(dados[i].emprestimoInstrumento == "" || undefined || null)) {
    //   alunoEmp =
    //     dados[i].emprestimoInstrumento[
    //       dados[i].emprestimoInstrumento.length - 1
    //     ].alunoId;
    //   alunoEmp = retornaNomeAluno(alunoEmp);
    // } else {
    //   alunoEmp = " - ";
    // }

    registro +=
      /*html*/
      `
            <tr>                            
                <td>${dados[i].id}</td>
                <td>${
                  dados[i].nomeInstrumento
                }</td>                              
                <td>${
                  dados[i].marcaInstrumento
                }</td>                             
                <td>${isEmprestimo}</td>
                <td>${unidades[dados[i].unidadeId - 1].nome}</td> 
                <td>${dataEmp}</td>
                <td>${alunoEmp}</td>                          
                <td> 
                    <a href="#" class="open-info-instrumento toogle-hide ml-auto" data-element="#dataInfoInstrumento" value="${
                      dados[i].id
                    }"><i class='bx bx-file-find text-info mt-auto' style="font-size: 1.75rem"></i></a>                                 
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



// Popula tabela com os dados do instrumento selecionado
function PopulateTableSelect(id) {  
  var dadosinstrumento;
  dataInstrumentosComEmprestimos.forEach((e) => {
    if (e.id == id) {
      dadosinstrumento = e;
    }
  });
  document.getElementById("codigoInstrumento-at").value = dadosinstrumento.id;
  document.getElementById("nomeInstrumento-at").value = dadosinstrumento.nomeInstrumento;
  document.getElementById("marcaInstrumento-at").value = dadosinstrumento.marcaInstrumento;
  document.getElementById("estadoConserv-at").value = dadosinstrumento.estadoConservacaoDoInstrumento;
  document.getElementById("unidadeAcervo-at").value = unidades[dadosinstrumento.unidadeId - 1].nome;

  var emprestimos = dadosinstrumento.emprestimoInstrumento;
  var tabelaHistorico = document.querySelector(".tabela-instrumento-historico");
  var tabelaAtivo = document.querySelector(".tabela-instrumento-ativo");
  var registroHistorico = "";
  var registroAtivo = "";

  emprestimos.forEach((e) => {
    if(e.dataFinalEmprestimo){
      registroHistorico += `
            <tr>
                <td>${retornaNomeAluno(e.alunoId)}</td>                             
                <td>${formatDate(e.dataInicialEmprestimo)}</td>
                <td>${formatDate(e.dataFinalEmprestimo)}</td>
                <td> - </td> 
            </tr>
            `;
    } else {
      registroAtivo += `
            <tr>                
                <td>${retornaNomeAluno(e.alunoId)}</td>                            
                <td>${formatDate(e.dataInicialEmprestimo)}</td>                          
                <td> - </td>
                <td>
                  <a href="#" class="mb-auto btn-dev-instrumento toogle-hide ml-1" data-element="#telaDevolucaoInstrumento"><i class='bx bx-edit text-info'  style="font-size: 1.75rem"></i></a>
                </td> 
            </tr>
            `;
    }    
  });

  tabelaHistorico.innerHTML = registroHistorico;
  tabelaAtivo.innerHTML = registroAtivo;
  //ativa modal para editar instrumento e devolucao 
  scriptJSEditInstrumento(dadosinstrumento)
  scriptJSDevInstrumento(dadosinstrumento)
  
}




//Função de adicionar instrumento
//Adiciona função ao submit do form
document
  .querySelector(".post-Instrumento-Form")
  .addEventListener("submit", async function (e) {
    //e.preventDefault();

    const formData = new FormData(e.target);

    // Convert FormData to a JSON object
    const formDataJSON = {};
    formData.forEach((value, key) => {
      formDataJSON[key] = value;
    });

    formDataJSON.unidadeId = Number(formDataJSON.unidadeId);


    try {
      const responseData = await postInstrumentoApi(formDataJSON);
      console.log("Response: ", responseData);
    } catch (error) {
      console.log("Error: ", error);
    }
  });




//Adiciona função de criar empréstimos ao botão salvar
document
  .getElementById("post-instrumento-emprestimo")
  .addEventListener("submit", async function (e) {

    // Convert FormData to a JSON object
    const formDataJSON = {};
    formDataJSON.alunoId = document.getElementById(
      "matriculaUsuarioEmprestimo-em"
    ).value;
    formDataJSON.instrumentoId = document.getElementById(
      "codigoInstrumento-em"
    ).value;

    //Parse string para int
    formDataJSON.alunoId = Number(formDataJSON.alunoId);
    formDataJSON.instrumentoId = Number(formDataJSON.instrumentoId);
    //console.log(formDataJSON);

    try {
      const responseData = await postEmprestimoIntrumentoApi(formDataJSON);
      console.log("Response: ", responseData);
      window.location.reload();
    } catch (error) {
      console.log("Error: ", error);
    }
  });


  

//-------TELA DE EMPRÉSTIMOS------

//Emprestimo instrumento - funcao de popular valores ao alterar indice

document
  .querySelector(".codigoInstrumento")
  .addEventListener("change", updateFieldInstrumentos);

function updateFieldInstrumentos() {
  let dados = dataInstrumentosComEmprestimos;  

  var idInstrumento = document.getElementById("codigoInstrumento-em").value;
 
  //popula os dados dos campos conforme o select é alterado
  document.getElementById("nomeInstrumentoEmprestimo-em").value = dados[idInstrumento - 1].nomeInstrumento;
  document.getElementById("marcaInstrumentoEmprestimo-em").value = dados[idInstrumento - 1].marcaInstrumento;
  document.getElementById("estadoConservEmprestimo-em").value = dados[idInstrumento - 1].estadoConservacaoDoInstrumento;

  //popula campo data
  let registro
  let formData = document.querySelector(".form-data-emprestimo")

  if (dados[idInstrumento - 1].isEmprestado){
    let dataEmprestimoAtivo
    let emprestimos = dados[idInstrumento - 1].emprestimoInstrumento
    emprestimos.forEach(e => {
      dataEmprestimoAtivo = formatDate(e.dataInicialEmprestimo)
    });
    registro = `<label for="dataInstrumentoEmprestimo-em">Data Empréstimo</label>
    <input value="${dataEmprestimoAtivo}" id="dataInstrumentoEmprestimo-em" type="text" class="form-control bg-white" placeholder="" disabled>`
    document.getElementById("btn-emprestar").classList.add("disabled", "btn-secondary");
    $("#btn-emprestar").css({ "pointer-events": "none" });
  } else {
    registro = `<label for="dataDevolucao-dv">Data Empréstimo</label>
    <input value="" id="dataDevolucao-dv" type="date" class="form-control ml-2 p-1 date rounded  " style="border-color: gray;" required/>`
    document.getElementById("btn-emprestar").classList.replace("btn-secondary", "btn-primary");
    document.getElementById("btn-emprestar").classList.remove("disabled");
    $("#btn-emprestar").css({ "pointer-events": "auto" });
  }

  formData.innerHTML = registro  
}

function listaIdInstrumentos(dados) {
  var listaIdInstrumentos = document.getElementById("codigoInstrumento-em");
  var listaIdInstrumentoValues;

  for (let i in dados) {
    listaIdInstrumentoValues += /*html*/ `				
				<option value=${dados[i].id}>${dados[i].id}</option>`;
  }
  listaIdInstrumentos.innerHTML = listaIdInstrumentoValues;
}



//---------------MODAL------------------

function scriptJS() {
  // exibe tabela com informacoes do membro da equipe selecionado
  $(".open-info-instrumento").click(function (e) {
    const el = $(this).data("element");
    $(el).toggle();
    if ($(el).is(":visible")) {
      var td = e.target.parentNode.parentNode.parentNode;
      var id = td.children[0].textContent;
      PopulateTableSelect(id);
    }
  });

}



//Modal editar instrumento
function scriptJSEditInstrumento(dadosinstrumento) {
  // exibe modal editar emprestimo
  $(".btn-edit-instrumento").off("click")
  $(".btn-edit-instrumento").click(function (e) {
    const el = $(this).data("element");
    $(el).toggle();

    //popula modal
    document.getElementById("nomeInstrumento-ed").value = dadosinstrumento.nomeInstrumento;
    document.getElementById("marcaInstrumento-ed").value = dadosinstrumento.marcaInstrumento;
    document.getElementById("estadoConservacaoDoInstrumento-ed").value = dadosinstrumento.estadoConservacaoDoInstrumento;
    document.getElementById("unidadeId-ed").value = dadosinstrumento.unidadeId;
});
  
}



//Modal devolucao de instrumento
async function scriptJSDevInstrumento(dadosinstrumento) {

  let emprestimoID
  // exibe modal devolucao emprestimo
  $(".btn-dev-instrumento").off("click")
  $(".btn-dev-instrumento").click(function (e) {
    const el = $(this).data("element");
    $(el).toggle();
       
  });
    //popula modal 
    document.getElementById("codigoInstrumento-dv").value = dadosinstrumento.id;
    document.getElementById("nomeInstrumento-dv").value = dadosinstrumento.nomeInstrumento;
    document.getElementById("marcaInstrumento-dv").value = dadosinstrumento.marcaInstrumento;
    document.getElementById("estadoConserv-dv").value = dadosinstrumento.estadoConservacaoDoInstrumento;


    try {
      emprestimosDB = await getEmprestimoIdInstrumento(dadosinstrumento.id);
    } catch (error){
      console.log("Error: ", error);
    }
     
    emprestimosDB.forEach(e => {
      if(!e.dataFinalEmprestimo){
        emprestimoID = e.id
      }
    });

    
    //Adiciona funcao para devolver emrpestimos
    document
    .getElementById("patch-instrumento-emprestimo")
    .addEventListener("submit", async function(e) {
      try {
      const formatDataJSON = {};
      formatDataJSON.emprestimoId = emprestimoID  
        const responseData = await patchDevolverEmprestimo(formatDataJSON);
      } catch (error) {
        console.log("Error: ", error);
      }
      window.location.reload();
    })
    
}






// funcao para editar datas
function formatDate(date){
  return new Date(date).toLocaleDateString("pt-br", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
}
