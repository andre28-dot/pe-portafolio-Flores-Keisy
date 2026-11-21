// Funcion generica que devuelve el mismo dato que recibe
function identidad<T>(dato: T): T {
    return dato;
}

// Pruebas con tipos indicados
const dui: string = identidad<string>("01234567-8");
const carnet: number = identidad<number>(2026001);
const solvencia: boolean = identidad<boolean>(true);

// Pruebas donde TypeScript identifica el tipo automaticamente
const nombre = identidad("Andrea");
const edad = identidad(20);
const activo = identidad(false);

// Mostramos los resultados
console.log("DUI:", dui);
console.log("Carnet:", carnet);
console.log("Solvencia:", solvencia);

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Activo:", activo);
