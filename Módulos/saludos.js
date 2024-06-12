// Crear una funcion llamada saludar, que reciba como parámetro el nombre de la persona
// y retorne el string "Hola, " seguido del nombre y un signo de exclamación.
// Exporta la función saludar.

function saludar(nombre) {
  return `Hola, ${nombre}!`;
} 

// Crear una función llamada saludarHolaMundo, que no reciba parámetros y retorne el string "Hola Mundo!".
// Exporta la función saludarHolaMundo.
function saludarHolaMundo() {
  return 'Hola Mundo!';
}

// Export the functions saludar and saludarHolaMundo
module.exports = {
  saludar,
  saludarHolaMundo
}; // Export the functions saludar and saludarHolaMundo