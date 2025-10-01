const express = require('express');
const router = express.Router();

let boletins = [];
let nextId = 1;

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
