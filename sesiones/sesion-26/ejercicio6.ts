const libros: string[] = [
    "Cien años de soledad",
    "El principito",
    "Don Quijote de la Mancha",
    "La metamorfosis"
];

console.log("RECORRIDO CON FOR");
// Recorro el arreglo utilizando las posiciones
for (let i = 0; i < libros.length; i++) {
    console.log(libros[i]);
}

console.log("RECORRIDO CON FOR...OF");
// recorro directamente cada titulo
for (const libro of libros) {
    console.log(libro);
}
console.log("RECORRIDO CON FOREACH");
// Utilizo una funcion para mostrar cada titulo
libros.forEach((libro) => {
    console.log(libro);
});

/*
comparacion:
Las tres formas permiten mostrar los mismos titulos,
pero cada una tiene una manera diferente de recorrer el arreglo,

for me permite trabajar con las posiciones y tener mas control
sobre el recorrido, por ejemplo, si necesito comenzar desde una
posicion especifica,

for...of me parece mas sencillo porque puedo obtener directamente
cada libro sin tener que utilizar indices,

forEach tambien es facil de leer y me permite ejecutar una accion
por cada elemento del arreglo,

Considero que for...of es el mas legible para mostrar los titulos,
porque el codigo queda sencillo y facil de entender,
utilizaria for cuando necesite trabajar con los indices o controlar
el recorrido, y forEach cuando quiera aplicar una accion a cada elemento
*/