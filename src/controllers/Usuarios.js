import Database from "../infra/Database.js";
import UsuarioModel from "../models/UsuarioModel.js"
import ValidacoesService from "../services/ValidacoesService.js"
import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class Usuarios {
    static rotas(app) {  // nao quero transformar minha classe em objeto entao uso static para isso
        app.get("/usuarios", (req, res) => {
            const response = DatabaseMetodos.listarTodosUsuarios()
            res.status(200).json(response)
        })

        app.get("/usuarios/:id", (req, res) => {
            if (ValidacoesService.validaIndex(req.params.id, Database.Usuarios)) {
                const usuario = DatabaseMetodos.listarUsuarioPorIndex(req.params.id)
                res.status(200).json(usuario)
            } else {
                res.status(404).json({ Erro: "Usuario nao encontrado" })
            }
        })

        app.post("/usuarios", (req, res) => {
            const isValid = ValidacoesService.IsValid(...Object.values(req.body.nome))

            if (isValid) {
                const usuario = new UsuarioModel(...Object.values(req.body))
                const response = DatabaseMetodos.inserirUsuario(usuario)
                res.status(201).json(response)
            } else {
                res.status(400).send("Erro")
            }
        })

        app.put("/usuarios/:id", (req, res) => {
            const isValid = ValidacoesService.IsValid(...Object.values(req.body))

            if (isValid) {
                const usuario = new UsuarioModel(...Object.values(req.body))
                const response = DatabaseMetodos.atualizarporId(req.params.id, usuario)
                res.status(201).json(response)
            } else {
                res.status(400).json({ Erro: "Erro" })
            }
        })

        app.patch("/usuarios/:id", (req, res) => {
            const response = DatabaseMetodos.atualizaPropriedadesPorId(req.params.id, req.body)
            res.status(200).json(response)
        })

        app.delete("/usuarios/:index", (req, res) => {
            if (ValidacoesService.validaIndex(req.params.index, Database.Usuarios)) {
                const usuario = DatabaseMetodos.deletaUsuarioPorId(req.params.index)
                res.status(200).json(usuario)
            } else {
                res.status(404).json({ Error: "Usuario nao encontrado" })
            }
        })
    }
}

export default Usuarios