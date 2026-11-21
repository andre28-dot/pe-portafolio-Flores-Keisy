//ACESSO FUERA DE RANGO
const departamentos: string[] = ["San Miguel", "La Union", "Morazan"];

// Este acceso esta fuera del rango del arreglo
console.log("Acceso incorrecto:", departamentos[3]);

// Utilizo length para encontrar el ultimo elemento
console.log("Ultimo departamento:", departamentos[departamentos.length - 1]);

/*
analisis:
El arreglo contiene 3 elementos y sus indices validos son 0, 1 y 2

Si intento consultar departamentos[3], obtendre undefined
porque esa posicion no existe dentro del arreglo

La forma correcta de mostrar el ultimo departamento es utilizar
departamentos[departamentos.length - 1]
asi obtengo Morazan sin tener que escribir directamente el indice
*/
