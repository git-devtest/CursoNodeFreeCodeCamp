const estatusPedido = () => {
    return Math.random() < 0.8;
}

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('¡Tu pizza está en camino!');
        } else {
            reject('¡Tu pizza no está en camino!');
        }
    }, 3000);
});

/* const manejarPedido = (confirmacion) => {
    console.log(confirmacion);
};

const manejarRechazo = (razonRechazo) => {
    console.log(razonRechazo);
};

miPedidoDePizza.then(manejarPedido, manejarRechazo); */

// Method Chaining
/* miPedidoDePizza
    .then((valor) => {
        console.log(valor);
    })
    .catch((razonRechazo) => {
        console.log(razonRechazo);
    }); */

const manejarPedido = (confirmacion) => {
    console.log(confirmacion);
};
    
const manejarRechazo = (razonRechazo) => {
    console.log(razonRechazo);
};

miPedidoDePizza.then(manejarPedido).catch(manejarRechazo);