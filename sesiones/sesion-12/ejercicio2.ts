// Esta funcion recibe varias notas y calcula su promedio.
function calcularPromedio(...notas: number[]): number {

    // Si no se reciben notas, devolvemos cero para evitar dividir entre cero.
    if (notas.length === 0) {
        return 0;
    }

    let suma: number = 0;

    // Sumamos todas las notas recibidas.
    for (let nota of notas) {
        suma += nota;
    }

    // Dividimos la suma entre la cantidad de notas.
    return suma / notas.length;
}

// Probamos con diferentes cantidades de notas.
console.log(`Promedio de 2 notas: ${calcularPromedio(8, 9)}`);
console.log(`Promedio de 3 notas: ${calcularPromedio(7, 8, 10)}`);
console.log(`Promedio de 4 notas: ${calcularPromedio(9, 8, 7, 10)}`);

// Tambien probamos que pasa cuando no se reciben notas.
console.log(`Promedio sin notas: ${calcularPromedio()}`);
