const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const config = require("config");
const cors = require("cors")

app.use(cors());
app.use(bodyParser.json());

const roteador = require ('./rotas/clientes')
app.use('/api/clientes', roteador)

app.listen(config.get('api.porta'), () => {
    console.log("Servidor executando na porta 3001!");
});