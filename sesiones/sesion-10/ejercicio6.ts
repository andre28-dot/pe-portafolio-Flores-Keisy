// Esta función muestra el nombre del sistema de ventas.
function mostrarEncabezado(): void {
    console.log("================================");
    console.log("       SISTEMA DE VENTAS");
    console.log("================================");
}

// Esta función convierte el precio ingresado a número
// y revisa que sea un valor válido y mayor que cero.
function validarPrecio(precioIngresado: string): number {
    let precio: number = Number(precioIngresado);

    if (isNaN(precio) || precio <= 0) {
        return 0;
    }

    return precio;
}

// Esta función revisa qué tipo de cliente es
// y devuelve el porcentaje de descuento correspondiente.
function clasificarCliente(tipoCliente: string): number {
    if (tipoCliente.toLowerCase() === "estudiante") {
        return 0.05;
    } else if (tipoCliente.toLowerCase() === "docente") {
        return 0.10;
    } else {
        return 0;
    }
}

// Esta función calcula el descuento y lo resta al precio original.
function calcularTotalVenta(precio: number, descuento: number): number {
    let total: number = precio - (precio * descuento);

    return total;
}

// Esta función muestra toda la información de la venta.
function mostrarResumen(precio: number, tipoCliente: string, descuento: number, total: number): void {
    console.log("------- RESUMEN DE VENTA -------");
    console.log("Precio original: $" + precio.toFixed(2));
    console.log("Tipo de cliente: " + tipoCliente);
    console.log("Descuento aplicado: " + (descuento * 100) + "%");
    console.log("Total a pagar: $" + total.toFixed(2));
    console.log("--------------------------------");
}

// Primero mostramos el encabezado del sistema.
mostrarEncabezado();

// Estos datos representan la información ingresada para la venta.
let precioIngresado: string = "100";
let tipoCliente: string = "estudiante";

// Validamos el precio antes de continuar.
let precioVenta: number = validarPrecio(precioIngresado);

// Solo realizamos el cálculo si el precio es válido.
if (precioVenta > 0) {

    // Buscamos el descuento que corresponde al cliente.
    let descuento: number = clasificarCliente(tipoCliente);

    // Calculamos cuánto debe pagar el cliente.
    let total: number = calcularTotalVenta(precioVenta, descuento);

    // Finalmente mostramos el resumen de la venta.
    mostrarResumen(precioVenta, tipoCliente, descuento, total);

} else {
    // Si el precio no es válido, mostramos este aviso.
    console.log("Error: el precio ingresado no es válido.");
}
