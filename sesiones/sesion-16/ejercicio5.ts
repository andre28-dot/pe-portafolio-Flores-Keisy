const precios: number[] = [2.50, 3.00, 4.25];
// Alternativa A: modifica el arreglo original
function aumentarPrecios(precios: number[]): void {
    for (let i = 0; i < precios.length; i++) {
        precios[i] = precios[i] + 0.25;
    }
}

// Alternativa B: creo un nuevo arreglo
function obtenerPreciosAumentados(precios: number[]): number[] {
    const nuevosPrecios = [...precios];

    for (let i = 0; i < nuevosPrecios.length; i++) {
        nuevosPrecios[i] = nuevosPrecios[i] + 0.25;
    }

    return nuevosPrecios;
}

console.log("Precios originales:", precios);

aumentarPrecios(precios);
console.log("Alternativa A:", precios);

const otrosPrecios: number[] = [2.50, 3.00, 4.25];
const resultado = obtenerPreciosAumentados(otrosPrecios);

console.log("Alternativa B:", resultado);
console.log("Precios sin modificar:", otrosPrecios);

//MI RESPUESTAS:
/* ¿Cual produce un efecto secundario? La alternativa A, porque modifica
 directamente el arreglo original

¿Cual conserva los datos originales? La alternativa B, porque trabaja 
con una copia y deja intacto el arreglo recibido

¿En que situacion utilizaria cada alternativa? Utilizaria la alternativa 
A cuando necesite actualizar los precios directamente, y la alternativa B 
cuando quiera obtener los nuevos precios sin perder los valores anteriores

¿Qué mecanismo utilice para copiar el arreglo? Utilice el operador spread (...), 
porque permite crear una copia del arreglo y trabajar con ella sin modificar el original */

