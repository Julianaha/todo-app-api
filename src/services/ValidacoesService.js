class ValidacoesService{
    static validaNome(nome){
        return nome.length >= 3
    }
    static validaNome(nome){
        return true
    }
    static validaEmail(email){
        return true
    }
    static validaTelefone(telefone){
        return true
    }
    static isValid(nome, email, telefone){
        return this.validaNome(nome)&& this.validaTelefone(telefone) && this.validaEmail(email)
    }
}

export default ValidacoesService