// Esta función recibe un nombre y prepara un saludo
// para darle la bienvenida a la Universidad de Oriente.
function crearSaludo(nombre: string): string {
    return "Hola " + nombre + ", ¡bienvenido/a a la Universidad de Oriente!";
}

// Guardamos los saludos que devuelve la función.
let saludo1: string = crearSaludo("Andrea");
let saludo2: string = crearSaludo("Daniela");

// Mostramos los saludos en la consola.
console.log(saludo1);
console.log(saludo2);
