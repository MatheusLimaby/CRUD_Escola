const express = require('express');
const router = express.Router();
let disciplinas = require('../src/data');

// GET - listar todas as disciplinas
router.get('/', (req, res) => {
    res.json(disciplinas);
});

// GET - buscar disciplina por id
router.get('/:id', (req, res) => {
    const disciplina = disciplinas.find(d => d.id == req.params.id);
    if (!disciplina) return res.status(404).json({ erro: "Disciplina não encontrada" });
    res.json(disciplina);
});

// POST - criar nova disciplina
router.post('/', (req, res) => {
    const { nome, cargaHoraria, professor } = req.body;

    if (!nome || !cargaHoraria || !professor) {
        return res.status(400).json({ erro: "Nome, carga horária e professor são obrigatórios" });
    }

    const nova = {
        id: disciplinas.length + 1,
        nome,
        cargaHoraria,
        professor
    };

    disciplinas.push(nova);
    res.status(201).json(nova);
});

// PUT - atualizar disciplina
router.put('/:id', (req, res) => {
    const disciplina = disciplinas.find(d => d.id == req.params.id);
    if (!disciplina) return res.status(404).json({ erro: "Disciplina não encontrada" });

    const { nome, cargaHoraria, professor } = req.body;
    if (!nome || !cargaHoraria || !professor) {
        return res.status(400).json({ erro: "Nome, carga horária e professor são obrigatórios" });
    }

    disciplina.nome = nome;
    disciplina.cargaHoraria = cargaHoraria;
    disciplina.professor = professor;

    res.json(disciplina);
});

// DELETE - remover disciplina
router.delete('/:id', (req, res) => {
    const index = disciplinas.findIndex(d => d.id == req.params.id);
    if (index === -1) return res.status(404).json({ erro: "Disciplina não encontrada" });

    disciplinas.splice(index, 1);
    res.json({ mensagem: "Disciplina removida com sucesso" });
});

module.exports = router;
