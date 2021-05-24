const http = require('http')

http.createServer((req, res) => {
    res.write("Apredendo Node.js")
    res.end()
}).listen(5500,() => console.log("Servido iniciado"))