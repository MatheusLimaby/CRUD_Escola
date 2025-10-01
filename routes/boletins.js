const express = require('express')
const router = express.Router()

// lista de boletins pra simular o banco de dados
let listaBoletins = [
  {
    id: 1,
    aluno: "João Silva",
    disciplina: "Matemática",
    nota: 8.5,
    data: "2025-09-30"
  },
  {
    id: 2,
    aluno: "Maria Souza",
    disciplina: "História",
    nota: 9.0,
    data: "2025-10-01"
  },
]

// #Busca
// GET /boletins
router.get('/boletins', (req, res, next) => {
  res.json(listaBoletins)
})

// #Busca por id
// GET /boletins/:id
router.get('/boletins/:id', (req, res, next) => {
  const id = req.params.id
  const boletim = listaBoletins.find(b => b.id == id)

  if (!boletim) {
    return res.status(404).json({ error: "Boletim não encontrado!!!" })
  }

  res.json(boletim)
})

// #Criação
// POST /boletins
router.post('/boletins', (req, res, next) => {
  const { aluno, disciplina, nota, data } = req.body

  // Validando se todos os campos foram preenchidos
  if (!aluno || !disciplina || nota === undefined || !data) {
    return res.status(400).json({ error: "aluno, disciplina, nota e data são obrigatórios!!!" })
  }

  const novoBoletim = {
    id: Date.now(),
    aluno,
    disciplina,
    nota,
    data
  }

  listaBoletins.push(novoBoletim)
  res.status(201).json({ message: "Boletim cadastrado com sucesso!!!", novoBoletim })
})

// #Atualização
// PUT /boletins/:id
router.put('/boletins/:id', (req, res, next) => {
  const id = req.params.id
  const boletim = listaBoletins.find(b => b.id == id)

  if (!boletim) {
    return res.status(404).json({ error: "Boletim não encontrado!!!" })
  }

  const { aluno, disciplina, nota, data } = req.body
  if (!aluno || !disciplina || nota === undefined || !data) {
    return res.status(400).json({ error: "aluno, disciplina, nota e data são obrigatórios!!!" })
  }

  boletim.aluno = aluno
  boletim.disciplina = disciplina
  boletim.nota = nota
  boletim.data = data

  res.json({ message: "Boletim atualizado com sucesso!!!", boletim })
})

// #Remoção
// DELETE /boletins/:id
router.delete('/boletins/:id', (req, res, next) => {
  const id = req.params.id
  const boletim = listaBoletins.find(b => b.id == id)

  if (!boletim) {
    return res.status(404).json({ error: "Boletim não encontrado!!!" })
  }

  listaBoletins = listaBoletins.filter(b => b.id != id)
  res.json({ message: "Boletim excluído com sucesso!!!" })
})

// exportar o roteador
module.exports = router
