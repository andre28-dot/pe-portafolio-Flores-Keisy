// Esta funcion recibe varios valores y busca cual es el mayor.
function encontrarMayor(...valores: number[]): number | null {

    // Si no se recibe ningun valor, devolvemos null.
    if (valores.length === 0) {
        return null;
    }

    // Comenzamos tomando el primer valor como el mayor.
    let mayor: number = valores[0];

    // Comparamos los demas valores para encontrar el mas grande.
    for (let valor of valores) {
        if (valor > mayor) {
            mayor = valor;
        }
    }

    return mayor;
}

// Probamos la funcion con diferentes cantidades de ventas.
console.log(`Mayor venta: ${encontrarMayor(50, 80, 120)}`);
console.log(`Mayor venta: ${encontrarMayor(200, 150, 300, 250)}`);
console.log(`Mayor venta: ${encontrarMayor(45, 90)}`);

// Probamos que sucede cuando no se envian valores.
let resultado = encontrarMayor();

if (resultado === null) {
    console.log("No se puede encontrar un mayor valor porque no hay datos.");
} else {
    console.log(`El mayor valor es: ${resultado}`);
}
