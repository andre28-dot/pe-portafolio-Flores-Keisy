interface Taller {
    id: number;
    nombre: string;
    costo: number;
    cuposDisponibles: number;
}

interface Inscripcion {
    tallerId: number;
    cantidad: number;
}

interface ResumenInscripcion {
    nombre: string;
    participantes: number;
    subtotal: number;
}

const talleres: Taller[] = [
    { id: 1, nombre: "Programacion", costo: 15, cuposDisponibles: 10 },
    { id: 2, nombre: "Diseño grafico", costo: 12, cuposDisponibles: 8 },
    { id: 3, nombre: "Robotica", costo: 20, cuposDisponibles: 0 },
    { id: 4, nombre: "Ingles", costo: 10, cuposDisponibles: 12 }
];

// Agrego un nuevo taller
talleres.push({ id: 5, nombre: "Ofimatica", costo: 8, cuposDisponibles: 6 });
// Muestro los talleres que todavia tienen cupos
const talleresDisponibles = talleres.filter(taller => taller.cuposDisponibles > 0);
console.log("Talleres disponibles:", talleresDisponibles);
// Busco un taller por su identificador
function buscarTaller(id: number): Taller | undefined {
    return talleres.find(taller => taller.id === id);
}

// registro dos inscripciones
const inscripciones: Inscripcion[] = [
    { tallerId: 1, cantidad: 3 },
    { tallerId: 2, cantidad: 2 }
];
const resumen: ResumenInscripcion[] = [];

inscripciones.forEach(inscripcion => {
    const taller = buscarTaller(inscripcion.tallerId);
    // verifico que exista el taller y que tenga suficientes cupos
    if (taller && taller.cuposDisponibles >= inscripcion.cantidad) {
        resumen.push({
            nombre: taller.nombre,
            participantes: inscripcion.cantidad,
            subtotal: taller.costo * inscripcion.cantidad
        });
    } else {
        console.log("No hay suficientes cupos para el taller:", inscripcion.tallerId);
    }
});

// Calculo el total de las inscripciones
const totalIncripcion = resumen.reduce((suma, item) => suma + item.subtotal, 0);
// Actualizo los cupos de cada taller
resumen.forEach(item => {
    const taller = talleres.find(t => t.nombre === item.nombre);
    if (taller) {
        taller.cuposDisponibles -= item.participantes;
    }
});

console.log("RESUMEN DE INSCRIPCIONES");
resumen.forEach(item => {
    console.log(item.nombre, "| Participantes:", item.participantes, "| Subtotal: $", item.subtotal.toFixed(2));
});

console.log("Total a pagar: $", total.toFixed(2));
console.log("Cupos restantes:", talleres);

/*
explicacion:
Primero cree cuatro talleres y uno de ellos no tiene cupos
despues agregue otro taller utilizando push
Con filter separe los talleres que tienen espacios disponibles
y con find busque cada taller por su identificador

Luego registre dos inscripciones y utilice map para preparar
el resumen con el nombre, los participantes y el subtotal

Con reduce sume los costos de las inscripciones
y con forEach actualice los cupos que quedaron disponibles
Tambien comprobe que cada taller existiera y tuviera
suficientes cupos antes de realizar la inscripcion
*/
