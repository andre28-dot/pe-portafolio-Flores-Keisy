interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
}

interface ItemCarrito {
    productoId: number;
    cantidad: number;
}

interface DetallePedido {
    nombre: string;
    cantidad: number;
    subtotal: number;
}
const catalogo: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 450, stock: 5, categoria: "Tecnologia" },
    { id: 2, nombre: "Mouse", precio: 12, stock: 10, categoria: "Accesorios" },
    { id: 3, nombre: "Teclado", precio: 20, stock: 0, categoria: "Accesorios" },
    { id: 4, nombre: "Monitor", precio: 150, stock: 4, categoria: "Tecnologia" }
];
// Agrego un nuevo producto al catalogo
catalogo.push({ id: 5, nombre: "Audifonos", precio: 25, stock: 8, categoria: "Accesorios" });
// Obtengo solamente los productos que tienen existencias
const disponibles = catalogo.filter(producto => producto.stock > 0);
// Busco un producto por su identificador
function buscarProducto(id: number): Producto | undefined {
    return catalogo.find(producto => producto.id === id);
}
console.log("Productos disponibles:", disponibles);

// Simulo una compra con dos productos
const carrito: ItemCarrito[] = [
    { productoId: 1, cantidad: 2 },
    { productoId: 2, cantidad: 3 }
];
const detalle: DetallePedido[] = [];
carrito.forEach(item => {
    const producto = buscarProducto(item.productoId);

    // Verifico que el producto exista y tenga suficiente stock
    if (producto && producto.stock >= item.cantidad) {
        detalle.push({
            nombre: producto.nombre,
            cantidad: item.cantidad,
            subtotal: producto.precio * item.cantidad
        });
    } else {
        console.log("No se pudo completar el producto con ID:", item.productoId);
    }
});

// Sumo los subtotales para obtener el total de la compra
const total = detalle.reduce((suma, item) => suma + item.subtotal, 0);
// Descuento del inventario las unidades compradas
detalle.forEach(item => {
    const producto = catalogo.find(p => p.nombre === item.nombre);

    if (producto) {
        producto.stock -= item.cantidad;
    }
});

console.log("DETALLE DEL PEDIDO");
detalle.forEach(item => {
    console.log(item.nombre, "| Cantidad:", item.cantidad, "| Subtotal: $", item.subtotal.toFixed(2));
});

console.log("Total a pagar: $", total.toFixed(2));
console.log("Existencias actualizadas:", catalogo);

/*
mi explicacion:

Primero cree el catalogo con los productos y sus existencias
despues agregue otro producto utilizando push
Con filter obtuve los productos que tienen stock
y con find pude buscar cada producto por su identificador

Luego simule una compra y utilice map para preparar
el detalle del pedido con el nombre, cantidad y subtotal

Con reduce sume los subtotales para conocer el total
y finalmente utilice forEach para descontar las unidades
que se compraron del inventario
*/
