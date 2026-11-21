const ventas: number[] = [3.50, 2.75, 5.00, 4.25, 6.50];
let total: number = 0;
// Recorro los precios y voy acumulando el dinero recaudado
for (const venta of ventas) {
    total += venta;
}
console.log("Total recaudado: $" + total.toFixed(2));

/*
Explicacion:
Utilice for...of para recorrer cada venta y sumarla al total,
toFixed(2) permite mostrar el resultado con dos decimales,
asi el dinero aparece con un formato mas adecuado
*/