interface Paciente {
    identificador: number;
    nombre: string;
    motivo: string;
}

const pacientes: Paciente[] = [
    { identificador: 1, nombre: "Maria", motivo: "Consulta general" },
    { identificador: 2, nombre: "Carlos", motivo: "Dolor de cabeza" },
    { identificador: 3, nombre: "Sofia", motivo: "Revision medica" },
    { identificador: 4, nombre: "Luis", motivo: "Control" }
];

console.log("Turnos iniciales:", pacientes);
// Agrego un paciente regular al final
pacientes.push({ identificador: 5, nombre: "Ana", motivo: "Consulta general" })
// Agrego un paciente de emergencia al inicio
pacientes.unshift({ identificador: 6, nombre: "Pedro", motivo: "Emergencia" });

// Retiro al primer paciente para simular su llamado
const atendido = pacientes.shift();

if (atendido) {
    console.log("Paciente llamado:", atendido.nombre);
}

// Retiro al ultimo paciente porque cancelo su turno
const cancelado = pacientes.pop();
if (cancelado) {
    console.log("Paciente que cancelo:", cancelado.nombre);
}

// Inserto un paciente preferencial en el indice 1
pacientes.splice(1, 0, {
    identificador: 7,
    nombre: "Laura",
    motivo: "Atencion preferencial"
});
// Retiro al paciente que esta en el indice 2
const derivado = pacientes.splice(2, 1);
if (derivado.length > 0) {
    console.log("Paciente derivado:", derivado[0].nombre);
}
// Obtengo los proximos dos pacientes sin modificar la cola
const proximos = pacientes.slice(0, 2);
console.log("Proximos pacientes:", proximos);
console.log("Cola completa:", pacientes);

/*
Explicacion:
Utilice push para agregar un paciente al final
y unshift para colocar al paciente de emergencia al inicio
Con shift retire al primero y con pop retire al ultimo
antes de mostrar sus nombres comprobe que existieran

Despues utilice splice para insertar al paciente preferencial
y retirar al paciente que fue derivado
Por ultimo use slice para obtener los proximos dos pacientes
este metodo me permite crear una copia de una parte del arreglo
sin modificar la lista original
*/
