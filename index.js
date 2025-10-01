const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
// TODO: Membro 1 - Importar e mapear rota de Alunos

// TODO: Membro 2 - Importar e mapear rota de Professores
const professoresRouter = require("./routes/professores")
app.use(professoresRouter)

// TODO: Membro 3 - Importar e mapear rota de Turmas

// TODO: Membro 4 - Importar e mapear rota de Disciplinas

// TODO: Membro 5 - Importar e mapear rota de Boletins


// --------------------------------------------- //
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
