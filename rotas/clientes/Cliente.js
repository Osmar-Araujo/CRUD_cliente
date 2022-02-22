const TabelaClientes = require('./TabelaClientes')

class Cliente{
    constructor({
        id, nome, cpf, tel, email, dataNasc, genero, senha
    }) {
        this.id = id
        this.nome = nome
        this.cpf = cpf
        this.tel = tel
        this.email = email
        this.dataNasc = dataNasc
        this.genero = genero
        this.senha = senha
    }

    async criar(){
        const resultado = await TabelaClientes.inserir({
            nome: this.nome,
            cpf: this.cpf,
            tel: this.tel,
            email: this.email,
            dataNasc: this.dataNasc,
            genero: this.genero,
            senha: this.senha
        })
        this.id = resultado.id
    }
}

module.exports = Cliente