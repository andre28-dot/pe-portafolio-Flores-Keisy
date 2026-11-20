// Esta función revisa si el número que recibe es divisible entre 2.
// Si lo es, devuelve true; de lo contrario, devuelve false.
const esNumeroPar = (numero: number): boolean => {
    return numero % 2 === 0;
};

// Probamos la función con diferentes números.
let numero1 = 8;
let numero2 = 5;
let numero3 = 12;
let numero4 = 7;

// Mostramos si cada número es par o impar.
console.log(numero1 + " es " + (esNumeroPar(numero1) ? "par" : "impar"));
console.log(numero2 + " es " + (esNumeroPar(numero2) ? "par" : "impar"));
console.log(numero3 + " es " + (esNumeroPar(numero3) ? "par" : "impar"));
console.log(numero4 + " es " + (esNumeroPar(numero4) ? "par" : "impar"));
