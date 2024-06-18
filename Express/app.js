const express = require('express'); // Importamos el módulo de express
const app = express();  // Creamos la aplicación Express
const _port = process.env.PORT || 3000; // Definimos el puerto, si no existe, se asigna el 3000
const { infoCursos } = require('./datos/cursos');   // Desestructuramos el objeto Cursos y lo importamos
const routerCursos = express.Router();  // Creación de Routers para evitar la sobrecarga de código

app.use('/api/cursos', routerCursos);

// Iniciamos con el Routing o direccionamiento de direcciones
app.get('/', (req, res) => {
    res.send('Hola Mundo! Bienvenido a la página principal 💻');
});

// Creamos una nueva ruta para mostrar los cursos
routerCursos.get('/', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

const routerProgramacion = require('./routers/programacion');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas');
app.use('/api/cursos/matematicas', routerMatematicas);

// Creamos el método listen para que la aplicación escuche en el puerto definido
app.listen(_port, () => {
    console.log(`El servidor está escuchando en el puerto ${_port}... 🚀`);
});