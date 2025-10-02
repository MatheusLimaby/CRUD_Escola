const express = require("express");
const router = express.Router();

// Dados em memória
let turmas = [
  { id: 1, nome: "1º Ano A", ano: 2025, turno: "Matutino" },
  { id: 2, nome: "2º Ano B", ano: 2025, turno: "Vespertino" },
];

// ✅ LISTAR todas as turmas
router.get("/turmas/", (req, res) => {
  res.json(turmas);
});

// ✅ BUSCAR turma por ID
router.get("turmas/:id", (req, res) => {
  const turma = turmas.find((t) => t.id === parseInt(req.params.id));
  if (!turma) {
    return res.status(404).json({ message: "Turma não encontrada" });
  }
  res.json(turma);
});

// ✅ CRIAR nova turma
router.post("/turmas", (req, res) => {
  const { nome, ano, turno } = req.body;

  if (!nome || !ano || !turno) {
    return res.status(400).json({ message: "Campos obrigatórios: nome, ano, turno" });
  }

  const novaTurma = {
    id: turmas.length + 1,
    nome,
    ano,
    turno,
  };

  turmas.push(novaTurma);
  res.status(201).json(novaTurma);
});

// ✅ ATUALIZAR turma
router.put("/turmas/:id", (req, res) => {
  const { id } = req.params;
  const { nome, ano, turno } = req.body;

  const turma = turmas.find((t) => t.id === parseInt(id));
  if (!turma) {
    return res.status(404).json({ message: "Turma não encontrada" });
  }

  if (!nome || !ano || !turno) {
    return res.status(400).json({ message: "Campos obrigatórios: nome, ano, turno" });
  }

  turma.nome = nome;
  turma.ano = ano;
  turma.turno = turno;

  res.json(turma);
});

// ✅ DELETAR turma
router.delete("/turmas/:id", (req, res) => {
  const { id } = req.params;
  const index = turmas.findIndex((t) => t.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Turma não encontrada" });
  }

  turmas.splice(index, 1);
  res.json({ message: "Turma removida com sucesso" });
});

module.exports = router;
