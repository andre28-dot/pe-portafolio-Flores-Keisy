type Orden = [string, number, number];

function calcularTotal(orden: Orden): void {
    // Separo los datos de la orden para realizar el calculo
    const producto = orden[0];
    const precio = orden[1];
    const cantidad = orden[2];

    const total = precio * cantidad;

    console.log("Producto:", producto);
    console.log("Precio por unidad: $", precio);
    console.log("Cantidad:", cantidad);
    console.log("Total a pagar: $", total.toFixed(2));
}

const miOrden: Orden = ["Pupusas revueltas", 0.75, 6];

calcularTotal(miOrden);

/*
Explicacion:
Utilice una tupla porque la orden necesita tres datos
en un orden definido, el nombre del producto, su precio
y la cantidad que se va a comprar

Para obtener el total multiplico el precio por la cantidad
en este caso el resultado es $4.50
*/
