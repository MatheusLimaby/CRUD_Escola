const express = require('express');
const router = express.Router();

let nextId = 3; // começa do 3, já que teremos 2 exemplos prontos

// Lista com 2 boletins de exemplo
let boletins = [
  {
    id: 1,
    titulo: "Boletim de Ocorrência - Furto",
    descricao: "Relato de furto ocorrido no centro da cidade",
    data: "2025-09-30",
    autor: "João Silva"
  },
  {
    id: 2,
    titulo: "Boletim de Ocorrência - Acidente",
    descricao: "Colisão entre dois veículos na avenida principal",
    data: "2025-10-01",
    autor: "Maria Souza"
  }
];

// Criar boletim
router.post('/', (req, res) => {
  const boletim = { id: nextId++, ...req.body };
  boletins.push(boletim);
  res.status(201).json(boletim);
});

// Listar todos
router.get('/', (req, res) => res.json(boletins));

// Buscar por ID
router.get('/:id', (req, res) => {
  const b = boletins.find(b => b.id == req.params.id);
  if (!b) return res.status(404).json({ error: 'Boletim não encontrado' });
  res.json(b);
});

// Atualizar boletim
router.put('/:id', (req, res) => {
  const index = boletins.findIndex(b => b.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Boletim não encontrado' });
  boletins[index] = { id: boletins[index].id, ...req.body };
  res.json(boletins[index]);
});

// Deletar boletim
router.delete('/:id', (req, res) => {
  const index = boletins.findIndex(b => b.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Boletim não encontrado' });
  const deleted = boletins.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;
