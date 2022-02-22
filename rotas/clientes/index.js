const roteador = require('express').Router()
const TabelaClientes = require('./TabelaClientes')
const Cliente = require('./Cliente')

roteador.get('/', async (req, res) =>{
    const resultados = await TabelaClientes.listar()
    res.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (req, res) =>{
    const dadosRecebidos = req.body
    const cliente = new Cliente(dadosRecebidos)
    await cliente.criar()
    res.send(
        JSON.stringify(cliente)
    )
})

module.exports = roteador