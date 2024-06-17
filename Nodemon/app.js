const http = require('http');

const _puerto = 3000;

const server = http.createServer((req, res) => {
   res.end('Hola freeCodeCamp! Bienvenidos a mi primer servidor en Node.js');
});

server.listen(_puerto, () => {
	console.log(`Server running at http://localhost:${_puerto}/`);
});

// nodemon <nombre_archivo.js> para ejecutar el script automáticamente
