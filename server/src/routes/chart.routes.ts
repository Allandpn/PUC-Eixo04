import { GetAlunosLocalidadeController } from '../modules/chartData/getAlunosLocalidadeController';
import { GetInstrumentoLocalidadeEmprestadoController } from '../modules/chartData/getIntrumentoLocalidadeEmprestadoController';
import { GetInstrumentoLocalidadeNaoEmprestadoController } from '../modules/chartData/getIntrumentoLocalidadeNaoEmprestadoController';
import { GetAlunosDataMatriculaController } from '../modules/chartData/GetAlunosDataMatriculaController';
import { GetUnidadesComQtdAlunosCoordenadoresInstrumentosController } from '../modules/unidade/useCases/getUnComQtdAlCoordInst/getUnComQtdAlCoordInstController';
import { GetInstrumentoLocalidadeController } from './../modules/chartData/getIntrumentoLocalidadeController';
import { Router } from 'express'
import { GetInstMatriculasUnidadeController } from '../modules/chartData/getInstMatriculasUnidadeController';
import { GetAlunosIdadeMediaController } from '../modules/chartData/GetAlunosIdadeMediaController';
import { GetQuantidadeAlunosController } from '../modules/chartData/GetQuantidadeAlunosController';
import { GetQuantidadeInstrumentosController } from '../modules/chartData/GetQuantidadeInstrumentosController';
import { GetQuantidadeTurmasController } from '../modules/chartData/GetQuantidadeTurmasController';
import { GetInstrumentoMaisPopularController } from '../modules/chartData/GetInstrumentoMaisPopularController';
import { GetUnidadesFormatadasController } from '../modules/chartData/GetUnidadesFormatadasController';




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
// const matriculasUnidade = [
//     { ano: 2020, BHorizonte: 12, Betim: 15, Contagem: 6 },
//     { ano: 2021, BHorizonte: 7, Betim: 10, Contagem: 11 },
//     { ano: 2022, BHorizonte: 10, Betim: 12, Contagem: 9 },
//     { ano: 2023, BHorizonte: 13, Betim: 10, Contagem: 5 }
//     ]

const getMatriculasAno = new GetAlunosDataMatriculaController();

chartRoutes.get("/data4", getMatriculasAno.handle)
  



//const getInstrumentoLocalidadeController = new GetInstrumentoLocalidadeController();    
const getInstMatriculasUnidadeController = new GetInstMatriculasUnidadeController();
chartRoutes.get("/data5", getInstMatriculasUnidadeController.handle)




//consulta de matriculas
// const qntAlunos = [
//     { x: 154 }    
//     ]
const getQuantidadeAlunosController = new GetQuantidadeAlunosController();
chartRoutes.get("/data6",getQuantidadeAlunosController.handle);



// const mediaIdade = [
//     { x: 14.5 }    
//     ]
const getAlunosIdadeMediaController= new GetAlunosIdadeMediaController();
chartRoutes.get("/data7", getAlunosIdadeMediaController.handle);


// const qntInstrumentos = [
//     { x: 14.5 }    
//     ]
const getQuantidadeInstrumentosController = new GetQuantidadeInstrumentosController();
chartRoutes.get("/data8", getQuantidadeInstrumentosController.handle)


// const qntTurmas = [
//     { x: 14.5 }    
//     ]

const getQuantidadeTurmasController = new GetQuantidadeTurmasController();
chartRoutes.get("/data9", getQuantidadeTurmasController.handle)


// const popInstrumento = [
//     { x: 14.5 }    
//     ]
const getInstrumentoMaisPopularController = new GetInstrumentoMaisPopularController();
chartRoutes.get("/data10", getInstrumentoMaisPopularController.handle)




// retorna unidades e id
// const unidadesId = [
//     {unidade: "Unidade 01 - Barreiro"},
//     {unidade: "Unidade 02 - Floresta"}
// ]

const getUnidadesFormatadasController = new GetUnidadesFormatadasController()
chartRoutes.get('/data11', getUnidadesFormatadasController.handle)





//TODO
// retorna unidades e id
const turmasDados = [
    {turma: "Turma de Violino - 02", unidade: "Unidade 01 - Barreiro", alunos: 29},
    {turma: "Turma de Violino - 01", unidade: "Unidade 01 - Barreiro", alunos: 23},    
    {turma: "Turma de Guitarra - 02", unidade: "Unidade 02 - Floresta", alunos: 22},
    {turma: "Turma de Guitarra - 02", unidade: "Unidade 02 - Floresta", alunos: 17},
    {turma: "Turma de Guitarra - 03", unidade: "Unidade 01 - Barreiro", alunos: 16},
    {turma: "Turma de Guitarra - 01", unidade: "Unidade 01 - Barreiro", alunos: 15}, 
    {turma: "Turma de Violino - 01", unidade: "Unidade 02 - Floresta", alunos: 11},   
    {turma: "Turma de Violão - 01", unidade: "Unidade 02 - Floresta", alunos: 10}
]


chartRoutes.get('/data12', (req,res)=> {
    res.send(turmasDados)
})



//TODO


//consulta de uma unidade
const idadeTurmas1 = [
    {idade: 14, quantidade: 35},
    {idade: 15, quantidade: 22},
    {idade: 16, quantidade: 18},
    {idade: 17, quantidade: 11},
    {idade: 18, quantidade: 9},
    {idade: 20, quantidade: 8},
    {idade: 23, quantidade: 7},
    {idade: 25, quantidade: 4},
    {idade: 30, quantidade: 2},
    {idade: 35, quantidade: 1},   
    ]

    //consulta de uma unidade
const idadeTurmas2 = [
    {idade: 14, quantidade: 35},
    {idade: 15, quantidade: 22},
    {idade: 16, quantidade: 18},
    {idade: 17, quantidade: 11},
    {idade: 18, quantidade: 9},
    {idade: 20, quantidade: 8},
    {idade: 23, quantidade: 7},
    {idade: 25, quantidade: 4},
    {idade: 30, quantidade: 2},
    {idade: 35, quantidade: 1},   
    ]


chartRoutes.get('/data13', (req,res)=> {
    res.send(idadeTurmas1)
})

chartRoutes.get('/data14', (req,res)=> {
    res.send(idadeTurmas2)
})




//retorna instrumentos disponiveis
const tiposInstrumentos = [
    {instrumento: "violão"},
    {instrumento: "violino"},    
    {instrumento: "saxofone"},
    {instrumento: "guitarra"},
    {instrumento: "violoncelo"},
    {instrumento: "flauta doce"},
]


chartRoutes.get('/data15', (req,res)=> {
    res.send(tiposInstrumentos)
})


//retorna instrumentos disponiveis
const estadoInstrumentos = [
    {instrumento: "violão", estado: "Novo", quantidade: 50},
    {instrumento: "violino", estado: "Regular", quantidade: 30},    
    {instrumento: "saxofone", estado: "Pequena avaria", quantidade: 20},
    {instrumento: "guitarra", estado: "Avaria severa", quantidade: 35},
    {instrumento: "violoncelo", estado: "Quebrado", quantidade: 10},
]


chartRoutes.get('/data16', (req,res)=> {
    res.send(estadoInstrumentos)
})










export {chartRoutes}



