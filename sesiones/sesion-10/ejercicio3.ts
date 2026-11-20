// Esta función muestra el mensaje de bienvenida para cada participante.
// Así ya no tenemos que escribir el mismo saludo varias veces.
function darBienvenida(nombre: string): void {
    console.log("================================");
    console.log("BIENVENIDO AL EVENTO UNIVERSITARIO");
    console.log("Participante: " + nombre);
    console.log("Gracias por asistir a nuestro evento.");
    console.log("================================");
}

// Llamamos a la misma función con tres nombres diferentes.
darBienvenida("Andrea");
darBienvenida("María");
darBienvenida("Carlos");
