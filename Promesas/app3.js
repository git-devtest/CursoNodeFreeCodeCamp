function ordenarProducto(producto){
    return new Promise( (resolve, reject) => {
        console.log(`Ordenando: ${producto} de freeCodeCamp.`);
        setTimeout( () => {
            if (producto === 'taza') {
                resolve(`¡Ordenando ${producto} con el logo de freeCodeCamp!`);
            } else {
                reject('¡No se pudo completar la orden, producto no disponible actualmente!');
            }
        }, 2000);
    });
}

function procesarPedido(respuesta){
    return new Promise( (resolve) => {
        console.log('Procesando pedido...');
        console.log(`La respuesta fue: ${respuesta}`);
        setTimeout( () => {
            resolve('Gracias por tu compra. Disfruta tu producto de freeCodeCamp.');
        }, 4000);
    });
}

// Chaining promises
/* ordenarProducto('Hoddie')
    .then( (respuesta) => {
        console.log('Respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then( (respuestaProcesada) => {
        console.log(respuestaProcesada);
    })
    .catch( (razonRechazo) => {
        console.log(razonRechazo);
    }); */

// Async/Await
async function realizarPedido(producto){
    try {
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recibida');
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
}

realizarPedido('taza');