const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tel:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNasc:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    genero:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
}

const opcoes = {
    freezeTable: true,
    tableName: 'clientes',
    timeStamps: true
}

module.exports = instancia.define('clientes', colunas, opcoes)