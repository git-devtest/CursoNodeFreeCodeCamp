const express = require('express');                                 // Importamos el módulo de express
const routerProgramacion = express.Router();                        // Creamos una nueva instancia de Router
routerProgramacion.use(express.json());                             // Middleware para el manejo de JSON
const { programacion } = require('../datos/cursos').infoCursos;     // Desestructuramos el objeto programacion y lo importamos

// Creamos una nueva ruta para mostrar los cursos de programación
routerProgramacion.get('/', (req, res) => {
    res.json(programacion);
});

// Creamos una ruta genérica para mostrar los cursos de cualquier lenguaje de programación
routerProgramacion.get('/:lenguaje', (req, res) => {
    const { lenguaje } = req.params;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

    // Si no se encuentra el lenguaje, se envía un mensaje de error
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos para el lenguaje de programación solicitado (${lenguaje}) 😢`);
    } 
    
    if (req.query.ordenar === 'vistas') {
        //return res.send(resultados.sort((a, b) => b.vistas - a.vistas)); // Criterio de ordenamiento descendente
        return res.send(resultados.sort((a, b) => a.vistas - b.vistas)); // Criterio de ordenamiento ascendente
    }

    res.json(resultados);
});

// Creamos una ruta genérica para mostrar los cursos de cualquier lenguaje de programación y nivel
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const { lenguaje, nivel } = req.params;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    // Si no se encuentra el lenguaje y nivel, se envía un mensaje de error
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos para el lenguaje de programación y nivel solicitado (${lenguaje}, ${nivel}) 😢`);
    } else {
        res.json(resultados);
    }
});

// Creamos una ruta genérica para usar el método POST
routerProgramacion.post('/', (req, res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.status(201).send(programacion);
});

// Creamos una ruta genérica para usar el método PUT
routerProgramacion.put('/:id', (req, res) => {
    const { id } = req.params;
    let cursoModificado = req.body;
    let indice = programacion.findIndex(curso => curso.id === parseInt(id));
    console.log(indice);

    if (indice === -1) {
        return res.status(404).send(`No se encontró el curso con el ID ${id} 😢`);
    }

    programacion[indice] = cursoModificado;
    res.json(programacion);
});

// Creamos una ruta genérica para usar el método PATCH
routerProgramacion.patch('/:id', (req, res) => {
    const { id } = req.params;
    let cursoModificado = req.body;
    let indice = programacion.findIndex(curso => curso.id === parseInt(id));

    if (indice === -1) {
        return res.status(404).send(`No se encontró el curso con el ID ${id} 😢`);
    }

    //programacion[indice] = { ...programacion[indice], ...cursoModificado };
    Object.assign(programacion[indice], cursoModificado);
    res.json(programacion);
});

// Creamos una ruta genérica para usar el método DELETE
routerProgramacion.delete('/:id', (req, res) => {
    const { id } = req.params;
    let indice = programacion.findIndex(curso => curso.id === parseInt(id));

    if (indice === -1) {
        return res.status(404).send(`No se encontró el curso con el ID ${id} 😢`);
    }

    programacion.splice(indice, 1);
    res.json(programacion);
});

// Exportamos el módulo
module.exports = routerProgramacion;