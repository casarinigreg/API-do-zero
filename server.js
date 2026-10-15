import express from 'express'

const app = express()
app.use(express.json())

const users = []

// METÓDOS HTTP
// GET --> LISTAR
// POST --> CRIAR
// PUT --> EDITAR VARIOS
// PATCH --> EDITAR UM
// DELETE --> DELETAR

// STATUS HTTP
// 2xx -> sucesso
// 4xx -> ERRO CLIENTE(erro no front)
// 5xx -> ERRO SERVIDOR(erro no back)

app.post('/usuarios', (req, res) => { // salvar usuários

    users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/usuarios', (request, response) => { // Listar usuarios
    response.status(200).json(users)
})
/* 
    1) Método HTTP
    2) Endereço

    www.lojaseuzé.com>>>/produtos<<<
*/

app.listen(3000) // porta do servidor

/* CRIAR API DE USUÁRIOS

    1) Criar um usuário
    2) Listar todos os usuários
    3) Editar um usuário
    4) Deletar um usuário
*/

