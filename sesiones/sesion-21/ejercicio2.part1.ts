//ACTUALIZACION DE  PRECIOS
const precios: number[] = [1.50, 2.00, 3.25, 4.00];

console.log("Precios originales:", precios);

// Cambio el segundo precio por un nuevo valor
precios[1] = 2.50;

console.log("Precios actualizados:", precios);

/*
Prediccion:
El segundo precio cambiara de 2.00 a 2.50
los demas precios seguiran iguales

Explicacion:
Para cambiar un elemento utilizo su indice
en este caso uso el indice 1 porque corresponde al segundo precio
*/
