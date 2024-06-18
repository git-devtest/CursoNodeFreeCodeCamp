const express = require('express');                             // Importamos el módulo de express
const routerMatematicas = express.Router();                     // Creamos una nueva instancia de Router
routerMatematicas.use(express.json());                          // Middleware para el manejo de JSON
const { matematicas } = require('../datos/cursos').infoCursos;  // Desestructuramos el objeto matematicas y lo importamos

// Creamos una nueva ruta para mostrar los cursos de matemáticas
routerMatematicas.get('/', (req, res) => {
    res.send(JSON.stringify(matematicas));
});

// Creamos una ruta genérica para mostrar los cursos de cualquier tema de matemáticas
routerMatematicas.get('/:tema', (req, res) => {
    const { tema } = req.params;
    const resultados = matematicas.filter(curso => curso.tema === tema);

    // Si no se encuentra el tema, se envía un mensaje de error
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos para el tema de matemáticas solicitado (${tema}) 😢`);
    } else {
        res.send(JSON.stringify(resultados));
    }
});

// Creamos una ruta genérica para mostrar los cursos de cualquier tema de matemáticas y nivel
routerMatematicas.get('/:tema/:nivel', (req, res) => {
    const { tema, nivel } = req.params;
    const resultados = matematicas.filter(curso => curso.tema === tema && curso.nivel === nivel);

    // Si no se encuentra el tema y nivel, se envía un mensaje de error
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos para el tema de matemáticas y nivel solicitado (${tema}, ${nivel}) 😢`);
    } else {
        res.send(JSON.stringify(resultados));
    }
});

// Exportamos el módulo
module.exports = routerMatematicas;