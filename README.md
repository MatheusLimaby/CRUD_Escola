Projeto: Implementação de CRUDs de uma escola

O projeto tem como objetivo implementar 5 CRUDS completos no contexto de uma escola: Alunos, Professores, Turmas, Disciplinas e Boletins

Instalação e execução:

1.	Clone o repositório:
git clone <link-do-repositorio>
2.	Instale as dependências:
npm install
3.	Execute a API em modo desenvolvimento (com Nodemon):
npm run dev
A API estará disponível em http://localhost:3000.
________________________________________
Endpoints

1. Alunos
•	GET /alunos → Lista todos os alunos
•	GET /alunos/:id → Retorna aluno por ID
•	POST /alunos → Cria novo aluno
•	PUT /alunos/:id → Atualiza aluno (mesmo corpo)
•	DELETE /alunos/:id → Remove aluno

3. Professores
•	GET /professores
•	GET /professores/:id
•	POST /professores
•	PUT /professores/:id
•	DELETE /professores/:id

4. Turmas

•	GET /turmas
•	GET /:id
•	POST /turmas
•	PUT /turmas/:id
•	DELETE /turmas/:id

4. Disciplinas

•	GET /disciplina
•	GET /disciplina/:id
•	POST /disciplina
•	PUT /disciplina/:id
•	DELETE /disciplina/:id

5. Boletins

•	GET /boletins
•	GET /boletins/:id
•	POST /boletins
•	PUT /boletins/:id
•	DELETE /boletins/:id

Integrantes
Nome	GitHub	Contribuição
Matheus Lima Rodrigues 1	MatheusLimaby	Configuração inicial, CRUD Alunos, README
Marcelo Wilson de Santana 2	@MarceloWilson	CRUD de Alunos
Vinicius Teixeira	@	CRUD Disciplinas e Boletins, README



  
