// Funcion generica que cuenta los elementos de un arreglo
function contarElementos<T>(coleccion: T[]): string {
    const cantidad = coleccion.length;

    return `Se procesaron ${cantidad} elementos correctamente.`;
}

// Lista de codigos de barras
const codigosBarras: string[] = ["750123", "750456", "750789"];

// Lista de descripciones
const descripciones: string[] = [
    "Arroz",
    "Leche",
    "Azucar",
    "Cafe"
];

// Lista de existencias
const existencias: boolean[] = [true, false, true];

// Probamos la funcion con diferentes arreglos
console.log(contarElementos(codigosBarras));
console.log(contarElementos(descripciones));
console.log(contarElementos(existencias));
