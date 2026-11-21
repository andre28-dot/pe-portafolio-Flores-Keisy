function duplicarPrecio(precio: number): void {
    precio = precio * 2;
    console.log("Precio dentro de la funcion:", precio);
}

let precioOriginal: number = 15;

console.log("Precio antes de llamar la funcion:", precioOriginal);
duplicarPrecio(precioOriginal);
console.log("Precio despues de llamar la funcion:", precioOriginal);

//MI PREDICCION:
/* La variable original seguira teniendo el valor de 15, porque TypeScript pasa los
 numeros por valor, es decir, la funcion recibe una copia del dato y no modifica la 
 variable original */
