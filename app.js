const http = require("http");

function sitioweb(req,res)
{
    res.writeHead(200, {"Content-type": "text/html"});
    res.end("Mi <strong>PRIMER</strong> servidor");
}

let servidor = http.createServer(sitioweb);

servidor.listen(6969, "127.0.0.1");

console.log("servidor corriendo en el puerto 6969");
