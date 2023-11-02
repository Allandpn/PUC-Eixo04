import { Router } from 'express'

export const chartRoutes = Router()




//consulta de quantidade de instrumentos por unidade menos a quantidade emprestada
const dataInstUnd = [
  { x: "violão", BHorizonte: 34, Betim: 45, Contagem: 20 },
  { x: "violino", BHorizonte: 45, Betim: 34, Contagem: 17 },
  { x: "saxofone", BHorizonte: 37, Betim: 45, Contagem: 20 },
  { x: "flauta", BHorizonte: 20, Betim: 20, Contagem: 34 }
]
chartRoutes.get("/data1", (req, res) => {
  res.json(dataInstUnd)
})


//consulta de emprestimo de instrumentos por unidade
const dataEmpUnd = [
  { x: "violão", BHorizonte: 12, Betim: 10, Contagem: 17 },
  { x: "violino", BHorizonte: 12, Betim: 10, Contagem: 17 },
  { x: "saxofone", BHorizonte: 12, Betim: 10, Contagem: 17 },
  { x: "flauta", BHorizonte: 12, Betim: 10, Contagem: 17 }
]
chartRoutes.get("/data2", (req, res) => {
  res.json(dataEmpUnd)
})






//consulta de alunos por unidade
const alunoUnidade = [
  { unidade: "BHorizonte", alunos: 28 },
  { unidade: "Betim", alunos: 45 },
  { unidade: "Contagem", alunos: 57 },
]
chartRoutes.get("/data3", (req, res) => {
  res.json(alunoUnidade)
})



//consulta de matriculas por unidade
const matriculasUnidade = [
    { ano: 2020, BHorizonte: 12, Betim: 15, Contagem: 6 },
    { ano: 2021, BHorizonte: 7, Betim: 10, Contagem: 11 },
    { ano: 2022, BHorizonte: 10, Betim: 12, Contagem: 9 },
    { ano: 2023, BHorizonte: 13, Betim: 10, Contagem: 5 }
    ]
chartRoutes.get("/data4", (req, res) => {
res.json(matriculasUnidade)
})
  


//consultas popularidade instrumentos por unidade 
const prefInstUnidade = [
    { instrumento: "violão", BHorizonte: 12, Betim: 15, Contagem: 6 },
    { instrumento: "violino", BHorizonte: 7, Betim: 10, Contagem: 11 },
    { instrumento: "saxofone", BHorizonte: 10, Betim: 12, Contagem: 9 },
    { instrumento: "flauta", BHorizonte: 13, Betim: 10, Contagem: 5 }
    ]
chartRoutes.get("/data5", (req, res) => {
res.json(prefInstUnidade)
})



