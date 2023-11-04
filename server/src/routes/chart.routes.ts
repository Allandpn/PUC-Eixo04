import { GetAlunosLocalidadeController } from '../modules/chartData/getAlunosLocalidadeController';
import { GetInstrumentoLocalidadeEmprestadoController } from '../modules/chartData/getIntrumentoLocalidadeEmprestadoController';
import { GetInstrumentoLocalidadeNaoEmprestadoController } from '../modules/chartData/getIntrumentoLocalidadeNaoEmprestadoController';
import { GetAlunosDataMatriculaController } from '../modules/chartData/GetAlunosDataMatriculaController';
import { GetUnidadesComQtdAlunosCoordenadoresInstrumentosController } from '../modules/unidade/useCases/getUnComQtdAlCoordInst/getUnComQtdAlCoordInstController';
import { GetInstrumentoLocalidadeController } from './../modules/chartData/getIntrumentoLocalidadeController';
import { Router } from 'express'




const chartRoutes = Router()



//consulta de quantidade de instrumentos por unidade menos a quantidade emprestada
// const dataInstUnd = [
//   { x: "violão", BHorizonte: 34, Betim: 45, Contagem: 20 },
//   { x: "violino", BHorizonte: 45, Betim: 34, Contagem: 17 },
//   { x: "saxofone", BHorizonte: 37, Betim: 45, Contagem: 20 },
//   { x: "flauta", BHorizonte: 20, Betim: 20, Contagem: 34 }
// ]

const getInstrumentoLocalidadeNaoEmprestado = new GetInstrumentoLocalidadeNaoEmprestadoController();
//Foi efetuada a criação desta saída no modules/chartData/getInstrumentoLocalidadeController
chartRoutes.get("/data1", getInstrumentoLocalidadeNaoEmprestado.handle);


//consulta de emprestimo de instrumentos por unidade
// const dataEmpUnd = [
//   { x: "violão", BHorizonte: 12, Betim: 10, Contagem: 17 },
//   { x: "violino", BHorizonte: 12, Betim: 10, Contagem: 17 },
//   { x: "saxofone", BHorizonte: 12, Betim: 10, Contagem: 17 },
//   { x: "flauta", BHorizonte: 12, Betim: 10, Contagem: 17 }
// ]

const getInstrumentoLocalidadeEmprestado = new GetInstrumentoLocalidadeEmprestadoController();
chartRoutes.get("/data2", getInstrumentoLocalidadeEmprestado.handle);






//consulta de alunos por unidade

const getAlunosLocalidadeController= new GetAlunosLocalidadeController();


// const alunoUnidade = [
//   { unidade: "BHorizonte", alunos: 28 },
//   { unidade: "Betim", alunos: 45 },
//   { unidade: "Contagem", alunos: 57 },
// ]
chartRoutes.get("/data3", getAlunosLocalidadeController.handle)



//consulta de matriculas por unidade
const matriculasUnidade = [
    { ano: 2020, BHorizonte: 12, Betim: 15, Contagem: 6 },
    { ano: 2021, BHorizonte: 7, Betim: 10, Contagem: 11 },
    { ano: 2022, BHorizonte: 10, Betim: 12, Contagem: 9 },
    { ano: 2023, BHorizonte: 13, Betim: 10, Contagem: 5 }
    ]

const getMatriculasAno = new GetAlunosDataMatriculaController();

chartRoutes.get("/data4", getMatriculasAno.handle)
  


// consultas popularidade instrumentos por unidade 
// const prefInstUnidade = [
//     { instrumento: "violão", BHorizonte: 12, Betim: 15, Contagem: 6 },
//     { instrumento: "violino", BHorizonte: 7, Betim: 10, Contagem: 11 },
//     { instrumento: "saxofone", BHorizonte: 10, Betim: 12, Contagem: 9 },
//     { instrumento: "flauta", BHorizonte: 13, Betim: 10, Contagem: 5 }
//     ]

const getInstrumentoLocalidade = new GetInstrumentoLocalidadeController();    
chartRoutes.get("/data5", getInstrumentoLocalidade.handle)





//consulta de matriculas por unidade
const qntAlunos = [
    { x: 154 }    
    ]
chartRoutes.get("/data6", (req, res) => {
res.json(qntAlunos)
})



const mediaIdade = [
    { x: 14.5 }    
    ]
chartRoutes.get("/data7", (req, res) => {
res.json(mediaIdade)
})


const qntInstrumentos = [
    { x: 14.5 }    
    ]
chartRoutes.get("/data8", (req, res) => {
res.json(qntInstrumentos)
})


const qntTurmas = [
    { x: 14.5 }    
    ]
chartRoutes.get("/data9", (req, res) => {
res.json(qntTurmas)
})


const popInstrumento = [
    { x: 14.5 }    
    ]
chartRoutes.get("/data10", (req, res) => {
res.json(popInstrumento)
})




export {chartRoutes}



