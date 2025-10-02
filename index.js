const express = require("express");
const cors = require("cors");

const app = express();

const disciplinasRoutes = require('./routes/disciplina');
app.use(cors());
app.use(express.json());

// TODO: Membro 1 - Importar e mapear rota de Alunos

// TODO: Membro 2 - Importar e mapear rota de Professores

// TODO: Membro 3 - Importar e mapear rota de Turmas
const turmasRoutes = require("./routes/turmas");
app.use( turmasRoutes);


// TODO: Membro 4 - Importar e mapear rota de Disciplinas

app.use('/disciplina', disciplinasRoutes);


// TODO: Membro 5 - Importar e mapear rota de Boletins

const BoletinsRotas =  require("./routes/boletins");
app.use(BoletinsRotas);

// --------------------------------------------- //
app.listen(3000, () => {
  console.log("Aplicação rodando em http://localhost:3000")
  })
