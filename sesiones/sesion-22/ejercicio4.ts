let respuesta: (string | number)[] = [200, "OK"];
console.log("Respuesta original:", respuesta);
// Con este arreglo puedo agregar otro dato sin problema
respuesta.push("Correcto");
// Tambien puedo cambiar el orden de los valores
respuesta = ["OK", 200];
console.log("Respuesta modificada:", respuesta);

// Ahora utilizo una tupla para mantener el orden
let respuestaSegura: [number, string] = [200, "OK"];
console.log("Tupla original:", respuestaSegura);
// Estas operaciones producirian errores de TypeScript
// respuestaSegura.push("Correcto");
// respuestaSegura = ["OK", 200];

/*
analisis:
El primer ejemplo utiliza un arreglo que permite guardar
textos o numeros en cualquier posicion, por eso puedo agregar
otro elemento o cambiar el orden de los datos
En cambio, con la tupla establezco que el primer valor
debe ser un numero y el segundo debe ser un texto

Asi mantengo el orden que necesito y evito cambios
que podrian causar problemas al utilizar la respuesta
*/
