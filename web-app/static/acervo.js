import { getInstrumentosComEmprestimos } from "../services/instrumentosAPI";

//Teste

//const alunoId = await getAlunoId(1);

const fetchData = async () => {
  try {
    const instrumentosComEmprestimos = await getInstrumentosComEmprestimos();
    console.log(JSON.stringify(instrumentosComEmprestimos));
  } catch (error) {
    console.error("Error fetching instrumentos", error);
  }
};

fetchData();

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
