interface Producto {
    nombre: string;
    precio: number;
}
const productos: Producto[] = [
    { nombre: "Laptop", precio: 650 },
    { nombre: "Mouse", precio: 12 },
    { nombre: "Teclado", precio: 25 }
];

// recorro los productos sin depender de la cantidad que tenga el arreglo
for (const producto of productos) {
    console.log("Producto:", producto.nombre);
}
// Si agrego otro producto, tambien aparece en el recorrido
productos.push({ nombre: "Monitor", precio: 180 });
console.log("Inventario actualizado:");
for (const producto of productos) {
    console.log("Producto:", producto.nombre);
}

/*
Explicacion:
Utilice for...of porque me permite recorrer cada producto directamente,
sin tener que manejar posiciones o conocer cuantos elementos tiene el arreglo,
si agrego mas productos, el ciclo tambien los mostrara
*/