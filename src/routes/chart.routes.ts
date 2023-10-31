import { Router } from 'express'

export const router = Router()
export const router1 = Router()




//consulta de quantidade de instrumentos por unidade menos a quantidade emprestada
const dataInstUnd = [
  { x: "violão", BHorizonte: 34, Betim: 45, Contagem: 20 },
  { x: "violino", BHorizonte: 45, Betim: 34, Contagem: 17 },
  { x: "saxofone", BHorizonte: 37, Betim: 45, Contagem: 20 },
  { x: "flauta", BHorizonte: 20, Betim: 20, Contagem: 34 }
]
router.get("/data1", (req, res) => {
  res.json(dataInstUnd)
})


//consulta de emprestimo de instrumentos por unidade
const dataEmpUnd = [
  { x: "violão", BHorizonte: 12, Betim: 10, Contagem: 17 },
  { x: "violino", BHorizonte: 12, Betim: 10, Contagem: 17 },
  { x: "saxofone", BHorizonte: 12, Betim: 10, Contagem: 17 },
  { x: "flauta", BHorizonte: 12, Betim: 10, Contagem: 17 }
]
router.get("/data2", (req, res) => {
  res.json(dataEmpUnd)
})






//consulta de emprestimo de instrumentos por unidade
const alunoUnidade = [
  { unidade: "BHorizonte", alunos: 28 },
  { unidade: "Betim", alunos: 45 },
  { unidade: "Contagem", alunos: 57 },
]
router.get("/data3", (req, res) => {
  res.json(alunoUnidade)
})
