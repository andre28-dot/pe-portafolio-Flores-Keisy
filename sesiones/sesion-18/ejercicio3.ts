function fibonacci(posicion: number): number {
    // Verifico que la posicion no sea negativa
    if (posicion < 0 || !Number.isInteger(posicion)) {
        throw new Error("La posicion debe ser un entero positivo");
    }
    // Estos son mis casos base, los dos primeros valores de Fibonacci
    if (posicion === 0) {
        return 0;
    }
    if (posicion === 1) {
        return 1;
    }
    // Sumo los dos terminos anteriores para obtener el siguiente
    return fibonacci(posicion - 1) + fibonacci(posicion - 2);
}

function mostrarFibonacci(cantidad: number): void {
    // Verifico que la cantidad de terminos sea valida
    if (cantidad < 0 || !Number.isInteger(cantidad)) {
        throw new Error("La cantidad debe ser un entero positivo");
    }
    // Recorro las posiciones y muestro cada termino
    for (let i = 0; i < cantidad; i++) {
        console.log(fibonacci(i));
    }
}

const cantidadTerminos = 6;

console.log("Primeros", cantidadTerminos, "terminos de Fibonacci:");
mostrarFibonacci(cantidadTerminos);

/*
Cree este arbool para hacer la representacion,
Arbol de llamadas para obtener la posicion 4:

                 fibonacci(4)
                /            \
        fibonacci(3)       fibonacci(2)
         /       \           /       \
 fibonacci(2) fibonacci(1) fibonacci(1) fibonacci(0)
    /      \
fibonacci(1) fibonacci(0)

Resolviendo los valores:
fibonacci(0) = 0
fibonacci(1) = 1
fibonacci(2) = 1
fibonacci(3) = 2
fibonacci(4) = 3

Prediccion: el termino de la posicion 4 sera 3.
Resultado de los primeros 6 terminos:
0, 1, 1, 2, 3, 5

Explicacion:
En este ejercicio cada termino se obtiene sumando los dos anteriores,
utilizo dos casos base, uno para la posicion 0 y otro para la posicion 1.
Cuando la funcion recibe otra posicion, se llama a si misma para
calcular las dos posiciones anteriores y luego suma sus resultados
*/
