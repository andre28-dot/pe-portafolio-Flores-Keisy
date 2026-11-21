function factorial(numero: number): number {
    // Primero verifico que el numero no sea negativo
    if (numero < 0) {
        throw new Error("No se puede calcular el factorial de un numero negativo");
    }
    // Este es mi caso base, porque el factorial de 0 es 1
    if (numero === 0 || numero === 1) {
        return 1;
    }
    // Voy multiplicando el numero por el factorial del numero anterior
    return numero * factorial(numero - 1);
}

const resultado = factorial(4);
console.log("El factorial de 4 es:", resultado);

/*
Respuesta antes de ejecutar:
Para calcular el factorial de 4, las llamadas se realizan asi:
factorial(4) = 4 * factorial(3)
factorial(3) = 3 * factorial(2)
factorial(2) = 2 * factorial(1)
factorial(1) = 1
Luego se resuelven las multiplicaciones:
4 * 3 * 2 * 1 = 24

Prediccion: el resultado sera 24.

Mi  explicacion:
En este ejercicio utilizo la recursividad para que la funcion
se llame a si misma con un numero cada vez mas pequeño
El proceso termina cuando llega a 1 o a 0, que son los casos base.
Tambien valido que no se pueda ingresar un numero negativo.
*/
