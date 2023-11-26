import { getInstrumentosComEmprestimos } from "./instrumentosAPI.js";



async function fetchData() {
  try {
    const data = await getInstrumentosComEmprestimos();
    return data;
  } catch (error) {
    console.error("Error fetching instrumentos", error);
  }
}

async function GetDataAndPopulateTabel() {
  try {
    const result = await fetchData();
    PopulateTable(result);
  } catch (error) {
    console.error("Error get data and populate table", error);
  }
}

GetDataAndPopulateTabel();

function PopulateTable(dados) {
  console.log(dados);
  var tabela = document.querySelector("#tabela-tbody-main");

  var registro = ""; // Move the initialization here
  
  for (let i of dados) {

    var isEmprestimo = "";
      if(i.isEmprestado == true){
        isEmprestimo = "<i class='fa fa-check text-info' aria-hidden='true'></i>"}
      else{
        isEmprestimo =  " - "
      }
    
  registro += `
    <tr>                            
      <td>${i.id}</td>
      <td>${i.nomeInstrumento}</td>                              
      <td>${i.marcaInstrumento}</td>                             
      <td>-</td>
      <td >${isEmprestimo}</td> 
      <td>Leide Nunes</td>
      <td> - </td>                          
      <td> 
          <a href="#" class="open-info-aluno toogle-hide ml-auto" data-element="#dataInfoInstrumento" value="${i.id}"><i class='bx bx-file-find text-info mt-auto' style="font-size: 1.75rem"></i></a>                                 
      </td>
    </tr>
    `

  }
   
    tabela.innerHTML = registro;

}

