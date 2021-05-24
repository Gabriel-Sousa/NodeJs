// Importar o Express
const express = require("express")

// App
const server = express()

//Especificar local do CSS eda imagem
server.use(express.static(__dirname + "/public"))

// Rotas
server.get('/',(req, res) =>{
    res.sendFile(__dirname + "/index.html")
})

// Servidor
server.listen(5500, ()=> console.log("Servidor Rodando"))