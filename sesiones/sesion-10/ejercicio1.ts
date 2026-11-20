// Esta función recibe el largo y el ancho de un espacio
// y hace la multiplicación para obtener su área.
function calcularAreaRectangulo(largo: number, ancho: number): number {
    return largo * ancho;
}

// Aquí probamos la función con dos espacios diferentes.
let areaSala = calcularAreaRectangulo(8, 5);
let areaHabitacion = calcularAreaRectangulo(4, 3);

// Mostramos los resultados en la consola.
console.log("Área de la sala: " + areaSala + " metros cuadrados");
console.log("Área de la habitación: " + areaHabitacion + " metros cuadrados");
