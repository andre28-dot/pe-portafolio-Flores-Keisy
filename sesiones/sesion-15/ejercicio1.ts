// Funcion generica que devuelve el primer elemento del arreglo
function obtenerPrimero<T>(elementos: T[]): T | undefined {
    return elementos[0];
}

// Lista de nombres de usuarios
const nombres: string[] = ["Ana", "Carlos", "Maria"];

// Lista de numeros de tickets
const tickets: number[] = [101, 102, 103];

// Probamos la funcion con ambos arreglos
const primerNombre = obtenerPrimero(nombres);
const primerTicket = obtenerPrimero(tickets);

console.log("Primer usuario:", primerNombre);
console.log("Primer ticket:", primerTicket);
