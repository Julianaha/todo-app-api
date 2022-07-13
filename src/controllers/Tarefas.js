class Tarefas {
    static rotas(app){  
        app.get("/tarefas", (req, res) =>{
            res.send("rota tarefas")
        })
    }
}

export default Tarefas