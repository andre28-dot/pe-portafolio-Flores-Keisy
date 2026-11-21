type Producto = [string, string, number, number];

const inventario: Producto[] = [
    ["F001", "Martillo", 8.50, 5],
    ["F002", "Destornillador", 3.25, 10],
    ["F003", "Alicate", 6.00, 4],
    ["F004", "Cinta metrica", 4.50, 8]
];

let valorTotal = 0;
console.log("REPORTE DE INVENTARIO");
for (let producto of inventario) {
    // Obtengo los datos de cada producto segun su posicion
    const codigo = producto[0];
    const nombre = producto[1];
    const precio = producto[2];
    const stock = producto[3];
    const subtotal = precio * stock;
    valorTotal += subtotal;

    console.log("--------------------");
    console.log("Codigo:", codigo);
    console.log("Producto:", nombre);
    console.log("Precio: $", precio.toFixed(2));
    console.log("Stock:", stock);
    console.log("Valor en inventario: $", subtotal.toFixed(2));
}
console.log("--------------------");
console.log("Valor total retenido: $", valorTotal.toFixed(2));

/*
explicacion:
Utilice un arreglo de tuplas para guardar los productos
porque todos tienen los mismos cuatro datos y en el mismo orden
En el recorrido voy tomando cada producto y multiplico
su precio por la cantidad disponible para conocer cuanto
dinero representa cada uno dentro del inventario

Al final sumo todos los resultados para obtener el valor total
*/
