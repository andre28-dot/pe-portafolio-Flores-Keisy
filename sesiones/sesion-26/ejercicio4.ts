const notas: number[] = [7, 5, 8, 4, 9, 6, 3, 10];
const notaMinima: number = 6;
let aprobados: number = 0;
// Recorro las notas y verifico quienes alcanzaron la nota minima
for (const nota of notas) {
    if (nota >= notaMinima) {
        aprobados++;
    }
}
console.log("Cantidad de estudiantes aprobados:", aprobados);

/*
Explicacion:
Elegí for...of porque solamente necesito revisar cada nota,
no necesito conocer la posicion de los estudiantes,
con el condicional verifico si la nota es igual o mayor a 6,
cuando se cumple, aumento el contador de aprobados
*/