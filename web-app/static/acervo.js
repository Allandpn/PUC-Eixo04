import { getInstrumentosComEmprestimos } from "./instrumentosAPI.js";
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
GetDataAndPopulateTable();

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
    if (dados[i].isEmprestado == true) {
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
                    <a href="#" class="open-info-aluno toogle-hide ml-auto" data-element="#dataInfoInstrumento" value="${i.id}"><i class='bx bx-file-find text-info mt-auto' style="font-size: 1.75rem"></i></a>                                 
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

function populaTabela() {
  // /*html*/
  // tabela = `<table class="table table-hover">
  // <thead class="bg-gray">
  //     <tr>
  //         <th scope="col"><span class="mr-3 ">Cód.</span><a href="#" ><i class="fa fa-sm fa-sort text-muted" aria-hidden="true"></i></a></th>
  //         <th scope="col"><span class="mr-3 ">Instrumento</span><a href="#" ><i class="fa fa-sm fa-sort text-muted" aria-hidden="true"></i></a></th>
  //         <th scope="col"><span class="mr-3 ">Marca</span><a href="#"><i class="fa fa-sm fa-sort text-muted mr-0" aria-hidden="true"></i></a></th>
  //         <th scope="col"><span class="mr-3 ">Data Aquisição</span><a href="#"><i class="fa fa-sm fa-sort text-muted" aria-hidden="true"></i></a></th>
  //         <th scope="col"><span class="mr-3 ">Empréstimo</span><a href="#"><i class="fa fa-sm fa-sort text-muted" aria-hidden="true"></i></a></th>
  //         <th scope="col"><span class="mr-3 ">Responsável</span><a href="#"><i class="fa fa-sm fa-sort text-muted" aria-hidden="true"></i></a></th>
  //         <th scope="col"><span class="mr-3 ">Data Empr.</span><a href="#"><i class="fa fa-sm fa-sort text-muted" aria-hidden="true"></i></a></th>
  //         <th scope="col"><span class="mr-3 ">Info</span><a href="#"><i class="fa fa-sm fa-sort text-muted" aria-hidden="true"></i></a></th>
  //     </tr>
  // </thead>
  // <tbody>`
  // /*html*/
  // tabela += `         <tr>
  //                         <td>vlo01</td>
  //                         <td>Violão</td>
  //                         <td>Serenata</td>
  //                         <td>12/05/21</td>
  //                         <td ><i class="fa fa-check text-info" aria-hidden="true"></i></td>
  //                         <td>Leide Nunes</td>
  //                         <td>12/05/22</td>
  //                         <td>
  //                             <a href="#" class="open-info-aluno toogle-hide ml-auto" data-element="#dataInfoInstrumento"><i class='bx bx-file-find text-info mt-auto' style="font-size: 1.75rem"></i></a>
  //                         </td>
  //                     </tr>
  //                     <tr>
  //                         <td>vln01</td>
  //                         <td>Violino</td>
  //                         <td>Serenata</td>
  //                         <td>12/05/22</td>
  //                         <td>-</td>
  //                         <td>-</td>
  //                         <td>-</td>
  //                         <td>
  //                             <a href="#" class="open-info-aluno toogle-hide ml-auto" data-element="#dataInfoInstrumento"><i class='bx bx-file-find text-info mt-auto' style="font-size: 1.75rem"></i></a>
  //                         </td>
  //                     </tr>
  //                     <tr>
  //                         <td>sxf01</td>
  //                         <td>Saxofone</td>
  //                         <td>Serenata</td>
  //                         <td>12/05/23</td>
  //                         <td><i class="fa fa-check text-info" aria-hidden="true"></i></td>
  //                         <td>Caique Brito</td>
  //                         <td>12/05/22</td>
  //                         <td>
  //                             <a href="#" class="open-info-instrumento toogle-hide ml-auto" data-element="#dataInfoInstrumento"><i class='bx bx-file-find text-info mt-auto' style="font-size: 1.75rem"></i></a>
  //                         </td>
  //                     </tr>
  //                 </tbody>
  //             </table>`
}
