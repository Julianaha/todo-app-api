import express from "express";
import * as dotenv from "dotenv";
import Usuarios from "./src/controllers/Usuarios.js";
import Tarefas from "./src/controllers/Tarefas.js";

dotenv.config()

const port = process.env.PORT || 3000 // env:acessa a variavel de ambiente cujo nome é porta
const app = express()

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
});

app.use(express.json())

Usuarios.rotas(app)
Tarefas.rotas(app)