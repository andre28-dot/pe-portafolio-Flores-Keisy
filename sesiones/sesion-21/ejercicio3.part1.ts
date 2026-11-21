//ASISTENCIA  SEMANAL
const asistencia: boolean[] = [true, true, false, true, false];

console.log("Asistencia de la semana:", asistencia);
console.log("Lunes:", asistencia[0]);
console.log("Miercoles:", asistencia[2]);
console.log("Viernes:", asistencia[4]);
console.log("Cantidad de dias:", asistencia.length);

/*
prediccion:
El lunes y martes tienen asistencia
el miercoles no
el jueves si y el viernes no

La cantidad de dias registrados sera 5

explicacion:
Utilice true para indicar que si hubo asistencia
y false para indicar que no hubo
*/
