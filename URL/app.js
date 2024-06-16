const miURL = new URL('https://www.example.com/cursos/programacion?ordenar=vistas&nivel=1');

console.log(miURL.hostname); // www.example.com
console.log(miURL.pathname); // /cursos/programacion
console.log(miURL.search); // ?ordenar=vistas&nivel=1
console.log(miURL.searchParams); // URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }
console.log(miURL.searchParams.get('ordenar')); // vistas
console.log(miURL.searchParams.get('nivel')); // 1
console.log(miURL.protocol); // https: