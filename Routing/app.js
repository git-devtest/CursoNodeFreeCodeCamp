const http = require('http');
const cursos = require('./cursos');                                                      // Importa el archivo cursos.js
const _puerto = 3000;                                                                    // Puerto en el que se ejecutará el servidor

const server = http.createServer((req, res) => {
    const { method } = req;                                                             // Obtiene el método de la petición

    switch (method) {                                                                   // Evalúa el método de la petición
        case 'GET':                                                                     // Si el método es GET
            return manejarSolicitudGET(req, res);                                       // Llama a la función que maneja las peticiones GET
        case 'POST':                                                                    // Si el método es POST
            return manejarSolicitudPOST(req, res);                                      // Llama a la función que maneja las peticiones POST
        default:                                                                        // Si el método no es ninguno de los definidos
            console.log(`El método no puede ser manejado por el servidor: ${method}`);  // Muestra un mensaje de error
    }
});

function manejarSolicitudGET(req, res) {
    const path = req.url;                                                               // Obtiene la ruta de la petición

    if (path === '/') {
        res.statusCode = 200;                                                           // Establece el código de estado de la respuesta
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js');          // Envía una respuesta al cliente
    } else if (path === '/cursos') {
        res.statusCode = 200;                                                           // Establece el código de estado de la respuesta                              // Establece el tipo de contenido de la respuesta
        return res.end(JSON.stringify(cursos.infoCursos));                                     // Envía una respuesta al cliente
    } else if ( path === '/cursos/programacion'){
        res.statusCode = 200;                                                           // Establece el código de estado de la respuesta
        return res.end(JSON.stringify(cursos.infoCursos.programacion));                        // Envía una respuesta al cliente
    } else {
        res.statusCode = 404;                                                           // Establece el código de estado de la respuesta solo si ninguna ruta coincide
        return res.end('El recurso solicitado no existe...');                                  // Envía una respuesta al cliente solo si ninguna ruta coincide con las definidas
    }
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;                                                               // Obtiene la ruta de la petición

    if (path === '/cursos/programacion') {
        res.statusCode = 200;                                                               // Establece el código de estado de la respuesta
        return res.end('El servidor recibio una solicitud POST para /cursos/programacion...');     // Envía una respuesta al cliente
    }
}

server.listen(_puerto, () => {                                                          // Inicia el servidor en el puerto especificado
    console.log(`Servidor corriendo en http://localhost:${_puerto}...`);                // Muestra un mensaje de éxito
});