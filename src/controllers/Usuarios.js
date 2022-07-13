class Usuarios {
    static rotas(app){  // nao quero tranformsar minha classe em objeto entao uso static para isso
        app.get("/usuarios", (req, res) =>{
            res.send("rota usuarios")
        })
    }
}

export default Usuarios