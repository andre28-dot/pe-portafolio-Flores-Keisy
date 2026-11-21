// Funcion que utiliza any y puede recibir cualquier dato
function conservaDatoAny(dato: any): any {
    return dato;
}

// Funcion generica que conserva el tipo del dato
function conservaDatoGenerico<T>(dato: T): T {
    return dato;
}

// Pruebas con any
const textoAny = conservaDatoAny("Hola");
const numeroAny = conservaDatoAny(25);
const booleanoAny = conservaDatoAny(true);

// Pruebas con genericos
const textoGenerico = conservaDatoGenerico("Hola");
const numeroGenerico = conservaDatoGenerico(25);
const booleanoGenerico = conservaDatoGenerico(true);

// Mostramos los valores
console.log("Valores con any:");
console.log(textoAny, numeroAny, booleanoAny);

console.log("Valores con genericos:");
console.log(textoGenerico, numeroGenerico, booleanoGenerico);

// Con any, TypeScript permite esta operacion aunque no corresponda
console.log(numeroAny.toUpperCase === undefined);

// Con genericos, TypeScript detecta que un numero no tiene
// el metodo toUpperCase y marca un error de tipo
// @ts-expect-error
numeroGenerico.toUpperCase();
