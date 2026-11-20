// Esta funcion recibe el nombre del estudiante y sus numeros de telefono.
function registrarTelefonos(nombre: string, ...telefonos: string[]): void {

    console.log(`Registro de contacto de: ${nombre}`);

    // Mostramos cada numero que se haya registrado.
    if (telefonos.length === 0) {
        console.log("No se registraron numeros telefonicos.");
    } else {
        for (let telefono of telefonos) {
            console.log(`Telefono: ${telefono}`);
        }
    }

    console.log("----------------------------");
}

// Probamos con estudiantes que tienen diferentes cantidades de numeros.
registrarTelefonos("Andrea", "7654-1234");

registrarTelefonos("Maria", "7123-4567", "7890-1234");

registrarTelefonos("Carlos", "7012-3456", "7654-9876", "7890-4567");
