import TarefaModel from "../models/TarefaModel.js"
import ValidacaoService from "../services/ValidacoesTarefas.js"

class Tarefas {
    static rotas(app){  
        app.get("/tarefas", (req, res) =>{
            const nomeTarefa = 'criar formulario'
            if(ValidacaoService.validaTarefaNome(nomeTarefa)){
                const tarefa = new TarefaModel('criar formulario', 'com input e botao para validar', '2 dias', 'alta')
                res.send(tarefa)
            }else{
                res.status(400).send("Erro")
            }
        })
    }
}

export default Tarefas