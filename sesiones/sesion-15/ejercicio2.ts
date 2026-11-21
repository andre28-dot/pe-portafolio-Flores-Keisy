// Funcion generica que devuelve un arreglo en orden inverso
function invertirColeccion<T>(elementos: T[]): T[] {
    // Creamos una copia para no modificar el arreglo original
    return [...elementos].reverse();
}

// Arreglo de codigos de despacho
const codigos: string[] = ["DES-101", "DES-102", "DES-103"];

// Arreglo de montos de facturas
const montos: number[] = [25, 40, 60];

// Aplicamos la funcion a ambos arreglos
console.log("Codigos invertidos:", invertirColeccion(codigos));
console.log("Montos invertidos:", invertirColeccion(montos));

// Comprobamos que los arreglos originales siguen iguales
console.log("Codigos originales:", codigos);
console.log("Montos originales:", montos);
