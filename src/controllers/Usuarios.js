import UsuarioModel from "../models/UsuarioModel.js"
import ValidacoesService from "../services/ValidacoesService.js"

class Usuarios {
    static rotas(app){  // nao quero transformar minha classe em objeto entao uso static para isso
        app.get("/usuarios", (req, res) =>{
            const nome = "Juliana"
            if(ValidacoesService.validaNome(nome)){
                const usuario = new UsuarioModel('Juliana', 'julianaha01@gmail.com', '12345678910')
                res.send(usuario)
            }else{
                res.status(400).send("Erro")
            }
        })
    }
}

export default Usuarios