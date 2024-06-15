const http = require('http');

const servidor = http.createServer((req, res) => {
    console.log('===> Response entregado');
    /* console.log(req); // Imprime el objeto request
    console.log(req.url); // Imprime la URL del request
    console.log(req.method); // Imprime el método del request
    console.log(req.headers); // Imprime los headers del request   */ 
    // console.log(res); // Imprime el objeto response
    console.log(res.statusCode); // Imprime el status code de la respuesta
    res.setHeader('Content-Type', 'apllication/json');
    console.log(res.getHeaders()); // Imprime el header Content-Type
});

const _puerto = 3000;

servidor.listen(_puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${_puerto}...`);
});