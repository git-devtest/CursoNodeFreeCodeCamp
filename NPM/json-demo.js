const curso = require('./curso.json');
/* console.log(curso);
console.log(curso.titulo);
console.log(curso.temas); */

/* for (let i in curso) {
    console.log(curso[i]);
} */

let infoCurso = {
    "titulo": "Aprende Node.js desde cero",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
        "JavaScript", 
        "Node.js"
    ],
    "esPublico": true
 }

// Convertir un objeto a JSON
let infoCursoJSON = JSON.stringify(infoCurso);
console.log("Convirtiendo un objeto de JavaScript a JSON");
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);
console.log(infoCursoJSON.titulo);

// Convertir un JSON a objeto
let objetoCurso = JSON.parse(infoCursoJSON);
console.log("Convirtiendo un JSON a objeto de JavaScript");
console.log(objetoCurso);
console.log(typeof objetoCurso);
console.log(objetoCurso.titulo);