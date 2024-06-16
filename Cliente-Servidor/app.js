const http = require('http');

const servidor = http.createServer((req, res) => {
    console.log('===> req (Request => Solicitud');
    console.log(req); // Imprime el objeto request
    console.log(req.url); // Imprime la URL del request
    console.log(req.method); // Imprime el método del request
    console.log(req.headers); // Imprime los headers del request
    
    console.log('===> res (Response => Respuesta');
    console.log(res); // Imprime el objeto response
    console.log(res.statusCode); // Imprime el status code de la respuesta
    res.setHeader('Content-Type', 'application/json');
    console.log(res.getHeaders()); // Imprime el header Content-Type
    res.statusCode = 305; // Cambia el status code de la respuesta
    console.log(res.statusCode); // Imprime el nuevo status code
});

const _puerto = 3000;

servidor.listen(_puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${_puerto}...`);
});