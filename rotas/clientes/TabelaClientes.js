const Modelo = require('./ModeloTabelaCliente')

module.exports = {
    listar () {
        return Modelo.findAll()
    },

    inserir(cliente){
        return Modelo.create(cliente)
    }

}
