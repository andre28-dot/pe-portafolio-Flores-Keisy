// Esta funcion recibe todas las calificaciones y las va sumando.
function sumarCalificaciones(...calificaciones: number[]): number {
    let suma: number = 0;

    // Recorremos cada calificacion para agregarla a la suma.
    for (let nota of calificaciones) {
        suma += nota;
    }

    return suma;
}

// Probamos la funcion con diferentes cantidades de notas.
console.log(`Suma de 2 calificaciones: ${sumarCalificaciones(8, 9)}`);
console.log(`Suma de 3 calificaciones: ${sumarCalificaciones(7, 8, 10)}`);
console.log(`Suma de 5 calificaciones: ${sumarCalificaciones(6, 8, 9, 7, 10)}`);
