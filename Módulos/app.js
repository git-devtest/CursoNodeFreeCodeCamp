//const { saludar, saludarHolaMundo } = require('./saludos'); // Import the function saludo
// const os = require('os'); // Import the os module

//console.log(saludar('Harold')); // Hola Harold
//console.log(saludarHolaMundo()); // Hola Mundo!

/* Módulos Built-in 
====================*/
// Uso del módulo process
// console.log(process); // Imprime un objeto con información sobre el proceso actual
// console.log(process.env) // Imprime un objeto con las variables de entorno del sistema
// console.log(process.argv); // Imprime un arreglo con los argumentos de la línea de comandos
// console.log(process.memoryUsage()); // Imprime un objeto con información sobre el uso de memoria del proceso

// Uso del módulo os
// console.log(os.type()); // Imprime el sistema operativo
// console.log(os.homedir()); // Imprime el directorio home del usuario
// console.log(os.uptime()); // Imprime el tiempo de actividad del sistema en segundos
// console.log(os.userInfo()); // Imprime un objeto con información del usuario actual

// Uso del módulo timers
/* function mostrarTema(tema){
    console.log(`Estoy aprendiendo el tema ${tema}`);
}

function suma(a, b){
    console.log(a + b);
}

setTimeout(mostrarTema, 5000, 'Módulos en Node.js'); // Llama a la función mostrarTema después de 2 segundos

setTimeout(suma, 10000, 5, 3); // Llama a la función suma después de 2 segundos con los argumentos 5 y 3 

console.log('Antes de setInmediate()');
setImmediate(mostrarTema, 'Módulos en Node.js'); // Llama a la función mostrarTema en la siguiente iteración del event loop
console.log('Después de setInmediate()'); */

// setInterval(mostrarTema, 2000, 'Módulos en Node.js'); // Llama a la función mostrarTema cada 2 segundos
// setInterval(suma, 1500, 5, 3); // Llama a la función suma cada 5 segundos con los argumentos 5 y 3

// uso del módulo fs
const fs = require('fs'); // Importa el módulo fs

// Cuando ejecutamos los módulos de forma asíncrona, no se ejecutan en el orden en que los escribimos,
// sino en el orden en que se resuelven las promesas al igual que se hace necesario usar el throw para manejar errores.

/* console.log('Antes de leer el archivo...');

// Leer el contenido de un archivo
fs.readFile('index.html', 'utf8', (error, contenido) => {
    if(error){
        throw error;
    }
    console.log('Contenido del archivo: \n', contenido);
});

console.log('Después de leer el archivo...');

// Renombrar un archivo
fs.rename('index.html', 'main.html', (error) => {
    if(error){
        throw error;
    }
    console.log('El archivo fue renombrado');
});

console.log('Después de cambiar el nombre del archivo...');

// Escribir contenido al final de un archivo
fs.appendFile('main.html', '<p>Hola Mundo!</p>', (error) => {
    if(error) {
        throw error;
    }
    console.log('Se agregó contenido al archivo');
});

console.log('Después de agregar contenido al archivo...');

// Reemplazar el contenido de un archivo
fs.writeFile('main.html', '<h1>Hola Mundo!</h1>', (error) => {
    if(error){
        throw error;
    }
    console.log('Se reemplazó el contenido del archivo');
});

console.log('Después de reemplazar el contenido del archivo...');

// Eliminar un archivo
fs.unlink('main.html', (error) => {
    if(error){
        throw error;
    }
    console.log('El archivo fue eliminado');
});

console.log('Después de eliminar el archivo...'); */

// Cuando ejecutamos los módulos de forma sincrónica, se ejecutan en el orden en que los escribimos, 
// pero no se ejecutan en el orden en que se resuelven las promesas. De esta forma, no se hace necesario 
// usar el throw para manejar errores.

console.log('Antes de leer el archivo...');

// Leer el contenido de un archivo
const contenido = fs.readFileSync('index.html', 'utf8');
console.log('Contenido del archivo: \n', contenido);

console.log('Después de leer el archivo...');

// Renombrar un archivo
fs.renameSync('index.html', 'main.html');

console.log('Después de cambiar el nombre del archivo...');

// Escribir contenido al final de un archivo
fs.appendFileSync('main.html', '<p>Hola Mundo!</p>');

console.log('Después de agregar contenido al archivo...');

// Reemplazar el contenido de un archivo
fs.writeFileSync('main.html', '<h1>Hola Mundo!</h1>');

console.log('Después de reemplazar el contenido del archivo...');

// Eliminar un archivo
fs.unlinkSync('main.html');

console.log('Después de eliminar el archivo...');