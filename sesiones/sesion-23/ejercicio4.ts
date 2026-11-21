interface Solicitud {
    id: number;
    nombreEstudiante: string;
    problema: string;
}
const solicitudes: Solicitud[] = [
    { id: 1, nombreEstudiante: "Andrea", problema: "Problema con internet" },
    { id: 2, nombreEstudiante: "Sofia", problema: "No funciona el teclado" },
    { id: 3, nombreEstudiante: "Carlos", problema: "Problema con el programa" },
    { id: 4, nombreEstudiante: "Maria", problema: "No enciende la computadora" }
];

console.log("Solicitudes iniciales:", solicitudes);
// Agrego una solicitud al final
solicitudes.push({
    id: 5,
    nombreEstudiante: "Luis",
    problema: "Problema con la impresora"
});

// Coloco una solicitud urgente al inicio
solicitudes.unshift({
    id: 6,
    nombreEstudiante: "Pedro",
    problema: "Falla urgente de red"
});
// Retiro la primera solicitud porque sera atendida
const atendida = solicitudes.shift();
if (atendida) {
    console.log("Solicitud atendida:", atendida.nombreEstudiante);
}

// Retiro la ultima porque el estudiante resolvio su problema
const resuelta = solicitudes.pop();

if (resuelta) {
    console.log("Solicitud resuelta por el estudiante:", resuelta.nombreEstudiante);
}
// Inserto una solicitud prioritaria en el indice 1
solicitudes.splice(1, 0, {
    id: 7,
    nombreEstudiante: "Valeria",
    problema: "No puede ingresar al sistema"
});
// retiro la solicitud del indice 3 para enviarla a otro tecnico
const derivada = solicitudes.splice(3, 1);

if (derivada.length > 0) {
    console.log("Solicitud derivada:", derivada[0].nombreEstudiante);
}
// Obtengo las proximas dos solicitudes sin modificar la fila
const proximas = solicitudes.slice(0, 2);
console.log("Proximas solicitudes:", proximas);
console.log("Fila completa:", solicitudes);

/*
mi explicacion:

Utilice push para agregar una solicitud al final
y unshift para colocar la solicitud urgente al inicio
Con shift retire la primera solicitud para atenderla
y con pop quite la ultima porque el estudiante ya resolvio su problema

Despues utilice splice para agregar una solicitud prioritaria
y retirar otra que sera atendida por un tecnico diferente
los metodos push, unshift, shift, pop y splice modificaron
directamente el arreglo original
Para obtener las proximas dos solicitudes utilice slice
y comprobe que la fila completa seguia teniendo los mismos datos
que tenia antes de crear esa seleccion

Esto sucede porque slice devuelve una copia de una parte del arreglo
sin eliminar ni agregar elementos a la lista original
*/
