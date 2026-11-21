const presentes: string[] = ["Ana", "Carlos", "Mario"];

function agregarEstudiante(estudiantes: string[]): void {
    estudiantes.push("Sofia");
}

console.log("Antes de llamar la funcion:", presentes);
agregarEstudiante(presentes);
console.log("Despues de llamar la funcion:", presentes);
console.log("Cantidad de estudiantes:", presentes.length);

//MI PREDICION
/* El comportamiento es diferente, porque en el primer ejercicio 
se trabaja con un numero y se modifica una copia, mientras que en el 
segundo se trabaja con un arreglo y los cambios realizados dentro de la 
funcion tambien se reflejan en el arreglo original */
