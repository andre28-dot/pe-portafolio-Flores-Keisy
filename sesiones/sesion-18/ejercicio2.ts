function calcularAhorro(dias: number): number {
    // Primero verifico que la cantidad de dias sea valida
    if (dias < 0 || !Number.isInteger(dias)) {
        throw new Error("La cantidad de dias debe ser un entero positivo");
    }
    // Si no hay dias, el ahorro acumulado es 0
    if (dias === 0) {
        return 0;
    }
    // Sumo el ahorro del dia actual con el ahorro de los dias anteriores
    return dias + calcularAhorro(dias - 1);
}

const dias = 5;
const total = calcularAhorro(dias);

console.log("Dias de ahorro:", dias);
console.log("Total ahorrado: $", total);

/*
Seguimiento manual para N = 5:

calcularAhorro(5) = 5 + calcularAhorro(4)
calcularAhorro(4) = 4 + calcularAhorro(3)
calcularAhorro(3) = 3 + calcularAhorro(2)
calcularAhorro(2) = 2 + calcularAhorro(1)
calcularAhorro(1) = 1 + calcularAhorro(0)
calcularAhorro(0) = 0
Ahora sumo los valores:
5 + 4 + 3 + 2 + 1 + 0 = 15
Prediccion: al finalizar los 5 dias habra ahorrado $15.

Mi  explicacion:
En cada llamada voy reduciendo la cantidad de dias en uno.
Cuando llego a 0, la funcion deja de llamarse y devuelve 0
Asi puedo sumar todos los ahorros desde el primer dia hasta el ultimo.
*/
