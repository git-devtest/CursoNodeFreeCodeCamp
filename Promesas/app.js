const promesaCumplida = 0;

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('¡La promesa se cumplió!');
        } else {
            reject('¡La promesa no se cumplió!');
        }
    }, 3000);
});

const manejarPromesaCumplida = (valor) => {
    console.log(valor);
};

const manejarPromesaNoCumplida = (razonRechazo) => {
    console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaNoCumplida);