const express = require("express");
const app = express();
const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password: "root",
    database: "crud_cliente",
});


app.listen(3001, () => {
    console.log("Servidor executando na porta 3001!");
});