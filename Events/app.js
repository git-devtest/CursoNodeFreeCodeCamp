const EventEmitter = require('events');
//console.log('EventEmitter:', EventEmitter);

const emisorProductos = new EventEmitter();

// Captura y ejecución del evento de compra
emisorProductos.on('compra', () => {
    console.log('Se ha realizado la compra de un producto');
});

// Captura y ejecución del evento de compra con valor
emisorProductos.on('compraValor', (valor) => {
    console.log(`Compra por valor de: $${valor}`);
});

// Captura y ejecución del evento de compra con valor y cantidad
emisorProductos.on('compraValorCant', (valor, cantidad) => {
    console.log(`Compra por valor de: $${valor}`);
    console.log(`Número de productos: ${cantidad}`);
});

// Emisión del evento
emisorProductos.emit('compra');
emisorProductos.emit('compraValor', 25000);
emisorProductos.emit('compraValorCant', 50000, 5);