import express from "express";
import * as dotenv from "dotenv";
import Usuarios from "./src/controllers/Usuarios.js";
import cors from "cors";
// import Tarefas from "./src/controllers/Tarefas.js";

dotenv.config()

const port = process.env.PORT || 3000 // env:acessa a variavel de ambiente cujo nome é porta
const app = express()

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
});

app.use(express.json())
app.use(cors())

Usuarios.rotas(app)
// Tarefas.rotas(app)