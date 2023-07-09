const http = require('http');

http.createServer((req,response) => {
    // response.setHeader('Content-Disposition','attachemen; filename=lista.csv');
    // response.writeHead(200,{'Content-Type':'application/csv'});
    response.write('Hola mundo');


    response.end();
})
.listen(8080);

console.log('Escuchando el puerto', 8080 );




