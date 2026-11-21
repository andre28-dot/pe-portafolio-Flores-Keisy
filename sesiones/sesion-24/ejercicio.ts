interface SolicitudPrestamo {
    id: number;
    estudiante: string;
    libro: string;
    categoria: string;
}
// creo las tres solicitudes iniciales de la biblioteca
const solicitudes: SolicitudPrestamo[] = [
    { id: 1, estudiante: "Andrea", libro: "Introduccion a TypeScript", categoria: "Tecnologia" },
    { id: 2, estudiante: "Carlos", libro: "El principito", categoria: "Literatura" },
    { id: 3, estudiante: "Sofia", libro: "Bases de datos", categoria: "Tecnologia" }
];
console.log("Solicitudes iniciales:", solicitudes);
// Agrego una nueva solicitud al final
solicitudes.push({
    id: 4,
    estudiante: "Maria",
    libro: "Matematicas basicas",
    categoria: "Educacion"
});
// agrego una solicitud prioritaria al inicio
solicitudes.unshift({
    id: 5,
    estudiante: "Luis",
    libro: "Redes informaticas",
    categoria: "Tecnologia"
});
// muestro el orden antes de atender las solicitudes
console.log("Orden antes de atender:", solicitudes);
// Retiro la primera solicitud para atenderla
const atendida = solicitudes.shift();
// Compruebo que exista antes de mostrar sus datos
if (atendida) {
    console.log("Estudiante atendido:", atendida.estudiante);
    console.log("Libro solicitado:", atendida.libro);
} else {
    console.log("No hay solicitudes para atender");
}
// Busco una solicitud pendiente por su identificador
const solicitudEncontrada = solicitudes.find(solicitud => solicitud.id === 2);
if (solicitudEncontrada) {
    console.log("Solicitud encontrada:", solicitudEncontrada);
} else {
    console.log("No se encontro la solicitud con ese identificador");
}
// Pruebo tambien con un identificador que no existe
const solicitudNoEncontrada = solicitudes.find(solicitud => solicitud.id === 10);

if (solicitudNoEncontrada) {
    console.log("Solicitud encontrada:", solicitudNoEncontrada);
} else {
    console.log("No existe una solicitud con el ID 10");
}
// obtengo las solicitudes que pertenecen a Tecnologia
const solicitudesTecnologia = solicitudes.filter(solicitud => solicitud.categoria === "Tecnologia");
console.log("Solicitudes de Tecnologia:", solicitudesTecnologia);

// Muestro la lista final y su cantidad de elementos
console.log("Lista final de solicitudes:", solicitudes);
console.log("Cantidad de solicitudes pendientes:", solicitudes.length);

/*
Comprobacion y explicacion:
Al inicio tenia 3 solicitudes, despues agregue una al final
y otra al principio, por lo que llegue a tener 5 solicitudes
Luego utilice shift para retirar la primera solicitud
que era la de Luis, por eso al final quedaron 4 solicitudes pendientes
Con find busque una solicitud por su identificador
primero busque una que si existe y despues una que no existe
para comprobar los dos resultados
Con filter obtuve solamente las solicitudes de Tecnologia
sin necesidad de eliminar las demas categorias
Antes de aplicar filter tenia 4 solicitudes y despues de aplicar
el filtro el arreglo original sigue teniendo 4
Esto sucede porque filter crea un nuevo arreglo con los elementos
que cumplen la condicion, pero no modifica el arreglo original
*/
